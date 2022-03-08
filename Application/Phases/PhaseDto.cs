using System.ComponentModel.DataAnnotations;

namespace Application.Phases;

public class PhaseDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public string ProjectId { get; set; }

}

public class CreatePhaseDto
{
   
    [Required]
    public string Title { get; set; }
    [Required]
    public string Description { get; set; }
}

public class UpdatePhaseDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
}
