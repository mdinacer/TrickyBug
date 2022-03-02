using Application.Phases;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[Authorize(Policy = "IsProjectLeader")]
public class PhasesController : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetPhases()
    {
        return HandleResult(await Mediator.Send(new List.Query()));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPhase(int id)
    {
        return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
    }

    [HttpPost("{id}")]
    public async Task<IActionResult> CreatePhase(string id, CreatePhaseDto phase)
    {
        return HandleResult(await Mediator.Send(new Create.Command {ProjectId = id, Phase = phase }));
    }

   

    //Authorize(Policy = "IsActivityHost")]
    [HttpPut]
    public async Task<IActionResult> EditPhase([FromForm] UpdatePhaseDto phase)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { Phase = phase }));
    }

    //
    // [Authorize(Policy = "IsActivityHost")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePhase(string id)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }
}