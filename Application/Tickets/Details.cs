using Application.Core;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Tickets;

public class Details
{
    public class Query : IRequest<Result<TicketFullDto>>
    {
        public int Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<TicketFullDto>>
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

        public async Task<Result<TicketFullDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var ticket = await _context.Tickets
               .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            return Result<TicketFullDto>.Success(_mapper.Map<TicketFullDto>(ticket));
        }
    }
}