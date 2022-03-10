namespace Application.Actions;

public class ActionDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime ActionDate { get; set; }
    public string ProjectId { get; set; }
    public string AuthorId { get; set; }
    public bool IsAuthor { get; set; }
    public string Author{ get; set; }
}

public class CreateActionDto    
{
    public string Title { get; set; }
    public string Description { get; set; }
    
}

public class UpdateActionDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
   
}

