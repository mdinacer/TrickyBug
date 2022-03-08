using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class List
{
    public class Query : IRequest<Result<PagedList<ProjectDto>>>
    {
        public ProjectParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<ProjectDto>>>
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

        public async Task<Result<PagedList<ProjectDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var username = _userAccessor.GetUsername();
            var query = _context.Projects
                .Include(p => p.Phases)
                .Include(p => p.Tickets)
                .Include(p => p.Members)
                .ThenInclude(m => m.User)
                .ProjectTo<ProjectDto>(_mapper.ConfigurationProvider, 
                        new { currentUsername = _userAccessor.GetUsername() })
                .AsQueryable();
            
            
            
            if (request.Params.SearchTerm != null)
                query = query.Where(t => t.Title.ToLower().Contains(request.Params.SearchTerm.ToLower()));
            
           
            
            if (request.Params.IsMember)
                query = query.Where(t => t.IsMember);

            
            query = request.Params.OrderBy switch
            {
                "added" => query.OrderByDescending(p => p.CreationDate.Date),
                "updated" => query.OrderByDescending(p => p.LastUpdate.Value.Date),
               // "ticketsMax" => query.OrderByDescending(p => p.TicketsCount),
             //   "ticketsMin" => query.OrderBy(p => p.TicketsCount),
                _ => query.OrderBy(p => p.Title)
            };
            //if (request.Params.IsLead != null) query = query.Where(t => t.Status == request.Params.Status);

            return Result<PagedList<ProjectDto>>.Success(
                await PagedList<ProjectDto>.CreateAsync(query, request.Params.PageNumber,
                    request.Params.PageSize)
            );
        }
    }
}