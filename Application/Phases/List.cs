
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Phases;

public class List
{
    public class Query : IRequest<Result<List<PhaseDto>>>
    {
    }

    public class Handler : IRequestHandler<Query, Result<List<PhaseDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
            
        }

        public async Task<Result<List<PhaseDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            // TODO: Add Admin Role Authentication in Controller
            var phases = await _context.Phases
                .OrderBy(d => d.StartDate)
                .ProjectTo<PhaseDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken: cancellationToken);
            

            return Result<List<PhaseDto>>.Success(phases);
        }
    }
}