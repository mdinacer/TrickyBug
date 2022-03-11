using Application.Core;
using Application.ProjectMembers;
using Application.Projects;
using Application.Tickets;
using Microsoft.AspNetCore.Mvc;
using Create = Application.Projects.Create;
using Delete = Application.Projects.Delete;
using Details = Application.Projects.Details;
using Edit = Application.Projects.Edit;
using List = Application.Projects.List;


namespace API.Controllers;

public class ProjectsController : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetProjects([FromQuery] ProjectParams param)
    {
        return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
    }

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetProject(string slug)
    {
        return HandleResult(await Mediator.Send(new Details.Query { Slug = slug }));
    }
    
    [HttpGet("{id}/getById")]
    public async Task<IActionResult> GetProjectById(string id)
    {
        return HandleResult(await Mediator.Send(new DetailsById.Query { Id = id }));
    }

    [HttpPost]
    public async Task<IActionResult> CreateProject([FromForm] CreateProjectDto projectDto)
    {
        return HandleResult(await Mediator.Send(new Create.Command { Project = projectDto }));
    }

    //Authorize(Policy = "IsActivityHost")]
    [HttpPut]
    public async Task<IActionResult> EditProject([FromForm] UpdateProjectDto projectDto)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { Project = projectDto }));
    }

    //
    // [Authorize(Policy = "IsActivityHost")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProject(string id)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }

    [HttpGet("{id}/members")]
    public async Task<IActionResult> ListMembers(string id)
    {
        return HandleResult(await Mediator.Send(new ListMembers.Query { Id = id }));
    }
    
    [HttpGet("{id}/isLeader")]
    public async Task<IActionResult> GetIsLeader(string id)
    {
        return HandleResult(await Mediator.Send(new GetIsLeader.Query { Id = id }));
    }

    [HttpGet("{id}/tickets")]
    public async Task<IActionResult> ListTickets(string id, [FromQuery] ProjectPhaseTicketParams ticketParams)
    {
        return HandleResult(await Mediator.Send(new ListTickets.Query { Id = id, Params = ticketParams }));
    }
    [HttpGet("{id}/recentTickets")]
    public async Task<IActionResult> ListRecentTickets(string id)
    {
        return HandleResult(await Mediator.Send(new ListRecentTikcets.Query { Id = id }));
    }
    
    [HttpGet("{id}/recentActions")]
    public async Task<IActionResult> ListRecentActions(string id)
    {
        return HandleResult(await Mediator.Send(new ListRecentActions.Query { Id = id}));
    }

    [HttpGet("{id}/actions")]
    public async Task<IActionResult> ListActions(string id, [FromQuery] PaginationParams pagingParams)
    {
        return HandleResult(await Mediator.Send(new ListActions.Query { Id = id, Params = pagingParams }));
    }
    
    [HttpGet("{id}/recentPhases")]
    public async Task<IActionResult> ListRecentPhases(string id)
    {
        return HandleResult(await Mediator.Send(new ListRecentPhases.Query { Id = id}));
    }
    
    [HttpGet("{id}/phases")]
    public async Task<IActionResult> ListPhases(string id)
    {
        return HandleResult(await Mediator.Send(new ListPhases.Query { Id = id}));
    }
}