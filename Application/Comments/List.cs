using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments;

public class List
{
    public class Query : IRequest<Result<List<TicketCommentDto>>>
    {
        public int TicketId { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<List<TicketCommentDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<List<TicketCommentDto>>> Handle(Query request,
            CancellationToken cancellationToken)
        {
            var comments = await _context.Comments
                .Include(p => p.Author)
                .Where(c => c.TicketId == request.TicketId)
                .OrderBy(d => d.CreationDate)
                .ProjectTo<TicketCommentDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return Result<List<TicketCommentDto>>.Success(comments);
        }
    }
}