using Application.Core;
using Application.Interfaces;
using Application.Tickets;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments;

public class Details
{
    public class Query : IRequest<Result<TicketCommentDto>>
    {
        public int Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<TicketCommentDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _userAccessor = userAccessor;
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<TicketCommentDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var ticket = await _context.Comments
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            return Result<TicketCommentDto>.Success(_mapper.Map<TicketCommentDto>(ticket));
        }
    }
}