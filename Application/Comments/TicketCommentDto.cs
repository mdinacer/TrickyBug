namespace Application.Comments;

public class TicketCommentDto
{
    public int Id { get; set; }
    public string AuthorId { get; set; }
    public string Author { get; set; }
   // public string Title { get; set; }
    public string Body { get; set; }
    public int TicketId { get; set; }
    public DateTime CreationDate { get; set; } 
}

public class CreateTicketCommentDto
{
    //public string Title { get; set; }
    public string Body { get; set; }
}

public class UpdateTicketCommentDto
{
    public int Id { get; set; }
    //public string Title { get; set; }
    public string Body { get; set; }
}