using Application.Core;
using Application.Phases;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class ListPhases
{
    public class Query : IRequest<Result<List<PhaseDto>>>
    {
        public string Id { get; set; }
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
            var phases = await _context.Phases
                .Where(p => p.ProjectId == request.Id)
                .OrderBy(d => d.StartDate)
                .ProjectTo<PhaseDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken: cancellationToken);
            
            return Result<List<PhaseDto>>.Success(phases);
        }
    }
}