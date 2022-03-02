using Application.Projects;
using FluentValidation;

namespace Application.Validators;

public class CreateProjectValidator : AbstractValidator<CreateProjectDto>
{
    public CreateProjectValidator()
    {
        RuleFor(x => x.Title).NotEmpty();
        RuleFor(x => x.Description).NotEmpty();
        // RuleFor(x => x.Date).NotEmpty();
        // RuleFor(x => x.Category).NotEmpty();
        // RuleFor(x => x.City).NotEmpty();
        // RuleFor(x => x.Venue).NotEmpty();
    }
}

public class UpdateProjectValidator : AbstractValidator<UpdateProjectDto>
{
}