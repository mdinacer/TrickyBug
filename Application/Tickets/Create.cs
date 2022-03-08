using Application.Core;
using Application.Interfaces;
using Application.Projects;
using Application.Validators;
using AutoMapper;
using Domain.Models;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Slugify;

namespace Application.Tickets;

public class Create
{
    public class Command : IRequest<Result<TicketDto>>
    {
        public CreateTicketDto Ticket { get; set; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            // RuleFor(x => x.Ticket).SetValidator(new CreateProjectValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<TicketDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IPhotoAccessor _photoAccessor;
        private readonly IUserAccessor _userAccessor;
        private readonly ISlugHelper _slugHelper;

        public Handler(DataContext context, IPhotoAccessor photoAccessor, IUserAccessor userAccessor, IMapper mapper, ISlugHelper slugHelper)
        {
            _mapper = mapper;
            _slugHelper = slugHelper;
            _context = context;
            _photoAccessor = photoAccessor;
            _userAccessor = userAccessor;
        }

        public async Task<Result<TicketDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var project = await _context.Projects.FindAsync(request.Ticket.ProjectId);

            if (project == null) return Result<TicketDto>.Failure("Unable to find project");

            var user = await _context.Users.FirstOrDefaultAsync(x =>
                x.UserName == _userAccessor.GetUsername(), cancellationToken);

            if (user == null) return Result<TicketDto>.Failure("You must be authenticated");

            var ticket = _mapper.Map<ProjectTicket>(request.Ticket);
            ticket.Author = user;
            ticket.Project = project;

            if (request.Ticket.Description != null)
            {
                var description = _mapper.Map<TicketDescription>(request.Ticket.Description);

                if (request.Ticket.Description.File != null)
                {
                    var photoUploadResult = await _photoAccessor.AddPhoto(request.Ticket.Description.File);
                    description.Photo = new Photo
                    {
                        Url = photoUploadResult.Url,
                        Id = photoUploadResult.PublicId
                    };
                }

                ticket.Description = description;
            }

            _context.Tickets.Add(ticket);



            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            var ticketResult = _mapper.Map<TicketDto>(ticket);

            return !result
                ? Result<TicketDto>.Failure("Failed to create ticket")
                : Result<TicketDto>.Success(ticketResult);
        }
    }
}