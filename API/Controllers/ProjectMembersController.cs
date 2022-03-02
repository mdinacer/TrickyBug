using Application.ProjectMembers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProjectMembersController : BaseApiController
{
    [HttpPost("addMember")]
    public async Task<IActionResult> AddProjectMember([FromForm] CreateProjectMemberDto projectMember)
    {
        return HandleResult(await Mediator.Send(new Add.Command { Member = projectMember }));
    }
    
    [HttpPost("addMembers")]
    public async Task<IActionResult> AddProjectMembers(string id, List<CreateProjectMemberDto> members)
    {
        return HandleResult(await Mediator.Send(new AddRange.Command { Id = id ,Members = members }));
    }

    //Authorize(Policy = "IsActivityHost")]
    [HttpPut("editMember")]
    public async Task<IActionResult> EditProjectMember([FromForm] UpdateProjectMemberDto projectMember)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { Member = projectMember }));
    }

    //
    // [Authorize(Policy = "IsActivityHost")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProjectMember(string id, string memberId)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id, MemberId = memberId }));
    }
}