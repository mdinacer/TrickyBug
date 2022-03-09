using Application.Core;
using Application.Interfaces;
using Application.Tickets;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments;

public class Edit
{
    public class Command : IRequest<Result<TicketCommentDto>>
    {
        public UpdateTicketCommentDto Comment { get; set; }
    }

    // public class CommandValidator : AbstractValidator<Command>
    // {
    //     public CommandValidator()
    //     {
    //         RuleFor(x => x.Project).SetValidator(new UpdateProjectValidator());
    //     }
    // }

    public class Handler : IRequestHandler<Command, Result<TicketCommentDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _mapper = mapper;
            _userAccessor = userAccessor;
            _context = context;
        }

        public async Task<Result<TicketCommentDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var comment = await _context.Comments
                .SingleOrDefaultAsync(t => t.Id == request.Comment.Id,  cancellationToken);

            if (comment == null) return Result<TicketCommentDto>.Failure("Failed to find comment");

            var userName = _userAccessor.GetUsername();

            var user = await _context.Users.SingleOrDefaultAsync(u => u.UserName == userName, cancellationToken);
            
            if (user == null) return Result<TicketCommentDto>.Failure("Not Authorized");
            
            if(comment.AuthorId != user.Id)return Result<TicketCommentDto>.Failure("You are not authorized to edit this Item");

            _mapper.Map(request.Comment, comment);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<TicketCommentDto>.Failure("Failed to update project")
                : Result<TicketCommentDto>.Success(_mapper.Map<TicketCommentDto>(comment));
        }
    }
}