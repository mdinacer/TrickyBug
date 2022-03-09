using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain.Models;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments;

public class Create
{
    public class Command : IRequest<Result<TicketCommentDto>>
    {
        public int TicketId { get; set; }
        public CreateTicketCommentDto Comment { get; set; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            // RuleFor(x => x.Ticket).SetValidator(new CreateProjectValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<TicketCommentDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IUserAccessor userAccessor, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
            _userAccessor = userAccessor;
        }

        public async Task<Result<TicketCommentDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var ticket = await _context.Tickets.FindAsync(request.TicketId);

            if (ticket == null) return Result<TicketCommentDto>.Failure("Unable to find Ticket");

            var user = await _context.Users.FirstOrDefaultAsync(x =>
                x.UserName == _userAccessor.GetUsername(), cancellationToken: cancellationToken);

            if (user == null) return Result<TicketCommentDto>.Failure("You must be authenticated");

            var comment = _mapper.Map<TicketComment>(request.Comment);
            comment.Author = user;
            comment.Ticket = ticket;


            _context.Comments.Add(comment);


            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            var commentResult = _mapper.Map<TicketCommentDto>(comment);

            return !result
                ? Result<TicketCommentDto>.Failure("Failed to create comment")
                : Result<TicketCommentDto>.Success(commentResult);
        }
    }
}