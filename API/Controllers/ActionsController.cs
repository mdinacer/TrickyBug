using Application.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Authorize(Policy = "IsProjectMember")]
public class ActionsController : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetActions()
    {
        return HandleResult(await Mediator.Send(new List.Query()));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetAction(int id)
    {
        return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
    }

   
    [HttpPost("{id}")]
    public async Task<IActionResult> CreateAction(string id,[FromForm] CreateActionDto actionDto)
    {
        return HandleResult(await Mediator.Send(new Create.Command {ProjectId = id, Action = actionDto }));
    }

   

    //Authorize(Policy = "IsActivityHost")]
    [HttpPut]
    public async Task<IActionResult> EditAction([FromForm] UpdateActionDto actionDto)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { Action = actionDto }));
    }

    //
    // [Authorize(Policy = "IsActivityHost")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAction(string id)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }
}