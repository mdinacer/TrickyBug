using Application.ProjectMembers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProjectMembersController : BaseApiController
{
    [HttpPost("{id}/add")]
    public async Task<IActionResult> AddMember(string id, [FromForm] CreateProjectMemberDto projectMember)
    {
        return HandleResult(await Mediator.Send(new Add.Command {  Id = id ,Member = projectMember }));
    }
    
    [HttpPost("{id}/addRange")]
    public async Task<IActionResult> AddMembers(string id, List<CreateProjectMemberDto> members)
    {
        return HandleResult(await Mediator.Send(new AddRange.Command { Id = id ,Members = members }));
    }

    //Authorize(Policy = "IsActivityHost")]
    [HttpPut("{id}/edit")]
    public async Task<IActionResult> EditMember(string id,[FromForm] UpdateProjectMemberDto projectMember)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { Member = projectMember }));
    }
    
    [HttpPatch("{id}/setLeader")]
    public async Task<IActionResult> SetLeader(string id, SetLeaderMemberDto member)
    {
        return HandleResult(await Mediator.Send(new SetLeader.Command {Id = id, MemberId = member.UserId }));
    }
    
    [HttpPut("{id}/editRange")]
    public async Task<IActionResult> EditMembers(string id, List<UpdateProjectMemberDto> members)
    {
        return HandleResult(await Mediator.Send(new EditRange.Command { Members = members }));
    }

    //
    // [Authorize(Policy = "IsActivityHost")]
    [HttpDelete("{id}/delete")]
    public async Task<IActionResult> DeleteMember(string id, DeleteProjectMemberDto member)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id, MemberId = member.UserId }));
    }
    
    [HttpDelete("{id}/deleteRange")]
    public async Task<IActionResult> DeleteMember(string id, List<string> membersId)
    {
        return HandleResult(await Mediator.Send(new DeleteRange.Command { Id = id, MembersId = membersId }));
    }
}