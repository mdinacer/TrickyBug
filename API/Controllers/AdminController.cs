using API.DTO;
using Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


[Authorize(Roles = "Admin")]
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<UserRole> _roleManager;

    public AdminController(UserManager<AppUser> userManager, RoleManager<UserRole> roleManager)
    {
        _userManager = userManager;
        _roleManager = roleManager;
    }
    
    [HttpGet("getRoles")]
    public async Task<ActionResult<List<string>>> GetRoles()
    {
        return await _roleManager.Roles.Select(r => r.Name).ToListAsync();
    }
    
    
    [HttpGet("{id}/getUserRoles")]
    public async Task<ActionResult<List<string>>> GetUserRoles(string id)
    {

        var user = await _userManager.FindByIdAsync(id);
        
        if (user == null) return BadRequest("Could not find user");
        var roles = await _userManager.GetRolesAsync(user);
        
        
        return roles.ToList();
    }
    
    [HttpPost("{id}/addUserRole")]
    public async Task<IActionResult> AddUserRole(string id, UserRoleDto userRole)
    {

        var user = await _userManager.FindByIdAsync(id);
        if (user == null) return BadRequest("Could not find user");
        var userHasRole = await _userManager.IsInRoleAsync(user, userRole.Role);

        if (!userHasRole)
        {
            await _userManager.AddToRoleAsync(user, userRole.Role);
        }

        return Ok();
    }
    
    [HttpPost("{id}/removeUserRole")]
    public async Task<IActionResult> RemoveUserRole(string id, UserRoleDto userRole)
    {

        var user = await _userManager.FindByIdAsync(id);
        if (user == null) return BadRequest("Could not find user");
        var userHasRole = await _userManager.IsInRoleAsync(user, userRole.Role);

        if (userHasRole)
        {
            await _userManager.RemoveFromRoleAsync(user, userRole.Role);
        }

        return Ok();
    }
    
   
}