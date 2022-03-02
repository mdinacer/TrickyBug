namespace Domain.Models;

public class TicketComment: BaseAuthorEntity
{
    public string Title { get; set; }
    public string Body { get; set; }
    public int TicketId { get; set; }
    public ProjectTicket Ticket { get; set; }
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
}