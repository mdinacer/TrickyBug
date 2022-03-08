using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain.Models;
using MediatR;
using Persistence;
using Slugify;

namespace Application.Projects;

public class Edit
{
    public class Command : IRequest<Result<ProjectDto>>
    {
        public UpdateProjectDto Project { get; set; }
    }

    // public class CommandValidator : AbstractValidator<Command>
    // {
    //     public CommandValidator()
    //     {
    //         RuleFor(x => x.Project).SetValidator(new UpdateProjectValidator());
    //     }
    // }

    public class Handler : IRequestHandler<Command, Result<ProjectDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IPhotoAccessor _photoAccessor;
        private readonly ISlugHelper _slugHelper;

        public Handler(DataContext context, IMapper mapper, ISlugHelper slugHelper, IPhotoAccessor photoAccessor)
        {
            _mapper = mapper;
            _slugHelper = slugHelper;
            _photoAccessor = photoAccessor;
            _context = context;
        }

        public async Task<Result<ProjectDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var project = await _context.Projects.FindAsync(new object?[] { request.Project.Id }, cancellationToken);

            if (project == null) return null;

            if (request.Project.Title != project.Title) project.Slug = _slugHelper.GenerateSlug(request.Project.Title);

            _mapper.Map(request.Project, project);


            if (request.Project.File != null)
            {
                if (!string.IsNullOrEmpty(project.PhotoId))
                {
                    await _photoAccessor.DeletePhoto(project.PhotoId);
                    project.PhotoId = "";
                }

                var photoUploadResult = await _photoAccessor.AddPhoto(request.Project.File);
                project.Photo = new Photo
                {
                    Url = photoUploadResult.Url,
                    Id = photoUploadResult.PublicId
                };
            }

            project.LastUpdate = DateTime.UtcNow;

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<ProjectDto>.Failure("Failed to update project")
                : Result<ProjectDto>.Success(_mapper.Map<ProjectDto>(project));
        }
    }
}