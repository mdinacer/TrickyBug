namespace API.DTO;

public class UserDto
{
    
    public string DisplayName { get; set; }
    public string Token { get; set; }
    public string Username { get; set; }
    public string Image { get; set; }
    public string Title { get; set; }
    public bool IsActive { get; set; }
}   


public class UserFullDto
{
    public string Id { get; set; }
    public string DisplayName { get; set; }
    public string Username { get; set; }
    public string Image { get; set; }
    public string Title { get; set; }
    public bool IsActive { get; set; }
}