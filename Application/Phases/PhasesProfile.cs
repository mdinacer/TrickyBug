using AutoMapper;
using Domain.Models;

namespace Application.Phases;

public class PhasesProfile : Profile
{
    public PhasesProfile()
    {
        CreateMap<ProjectPhase, PhaseDto>();
        CreateMap<CreatePhaseDto, ProjectPhase>();
        CreateMap<UpdatePhaseDto, ProjectPhase>();
    }
}