using Application.Core;
using Application.Tickets;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class TicketsController : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetTickets([FromQuery] TicketParams param)
    {
        return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTicket(int id)
    {
        return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
    }

    [HttpPost]
    public async Task<IActionResult> CreateTicket([FromForm] CreateTicketDto ticketDto)
    {
        return HandleResult(await Mediator.Send(new Create.Command { Ticket = ticketDto }));
    }

    //Authorize(Policy = "IsActivityHost")]
    [HttpPatch]
    public async Task<IActionResult> EditTicketStatus([FromForm] UpdateTicketStatusDto ticketStatus)
    {
        return HandleResult(await Mediator.Send(new EditStatus.Command { TicketStatus = ticketStatus }));
    }

    //Authorize(Policy = "IsActivityHost")]
    [HttpPut]
    public async Task<IActionResult> EditTicket([FromForm] UpdateTicketDto ticketDto)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { Ticket = ticketDto }));
    }

    //
    // [Authorize(Policy = "IsActivityHost")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTicket(string id)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }
    
    [HttpGet("{id}/comments")]
    public async Task<IActionResult> GetTicketComments(int id,[FromQuery] PaginationParams param)
    {
        return HandlePagedResult(await Mediator.Send(new ListComments.Query { Id = id,Params = param }));
    }
}