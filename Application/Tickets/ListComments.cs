using Application.Comments;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Tickets;

public class ListComments
{
    public class Query : IRequest<Result<PagedList<TicketCommentDto>>>
    {
        public int Id { get; set; }
        public PaginationParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<TicketCommentDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<PagedList<TicketCommentDto>>> Handle(Query request,
            CancellationToken cancellationToken)
        {
            var query = _context.Comments
                .Include(p => p.Author)
                .Where(c => c.TicketId == request.Id)
                .OrderBy(d => d.CreationDate)
                .ProjectTo<TicketCommentDto>(_mapper.ConfigurationProvider)
                .AsQueryable();

            return Result<PagedList<TicketCommentDto>>.Success(await PagedList<TicketCommentDto>.CreateAsync(query,
                request.Params.PageNumber,
                request.Params.PageSize));
        }
    }
}