using Application.Comments;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class CommentsController : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetComments()
    {
        return HandleResult(await Mediator.Send(new List.Query()));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetComment(int id)
    {
        return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
    }

   
    [HttpPost("{id}")]
    public async Task<IActionResult> CreateComment(string id, CreateTicketCommentDto comment)
    {
        return HandleResult(await Mediator.Send(new Create.Command {ProjectId = id, Comment = comment }));
    }

   

    //Authorize(Policy = "IsActivityHost")]
    [HttpPut]
    public async Task<IActionResult> EditComment(UpdateTicketCommentDto comment)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { Comment = comment }));
    }

    //
    // [Authorize(Policy = "IsActivityHost")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteComment(string id)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }
}