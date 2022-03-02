using Application.Core;
using Application.Interfaces;
using Application.Validators;
using AutoMapper;
using Domain.Models;
using FluentValidation;
using MediatR;
using Persistence;
using Slugify;

namespace Application.Projects;

public class Create
{
    public class Command : IRequest<Result<ProjectDto>>
    {
        public CreateProjectDto Project { get; set; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.Project).SetValidator(new CreateProjectValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<ProjectDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IPhotoAccessor _photoAccessor;
        private readonly ISlugHelper _slugHelper;

        public Handler(DataContext context, IPhotoAccessor photoAccessor, IMapper mapper, ISlugHelper slugHelper)
        {
            _mapper = mapper;
            _slugHelper = slugHelper;
            _context = context;
            _photoAccessor = photoAccessor;
        }

        public async Task<Result<ProjectDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var project = new Project
            {
                Id = Guid.NewGuid().ToString(),
                Title = request.Project.Title,
                Slug = _slugHelper.GenerateSlug(request.Project.Title),
                Description = request.Project.Description
            };

            if (request.Project.Photo != null)
            {
                var photoUploadResult = await _photoAccessor.AddPhoto(request.Project.Photo);
                project.Photo = new Photo
                {
                    Url = photoUploadResult.Url,
                    Id = photoUploadResult.PublicId
                };
            }

            _context.Projects.Add(project);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            var projectResult = _mapper.Map<ProjectDto>(project);

            return !result
                ? Result<ProjectDto>.Failure("Failed to create project")
                : Result<ProjectDto>.Success(projectResult);
        }
    }
}