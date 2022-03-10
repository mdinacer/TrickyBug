using Application.ProjectMembers;
using FluentValidation;

namespace Application.Validators;

public class ProjectMemberValidator: AbstractValidator<CreateProjectMemberDto>
{
    public ProjectMemberValidator()
    {
       // RuleFor(x => x.Date).NotEmpty();
        // RuleFor(x => x.Category).NotEmpty();
        // RuleFor(x => x.City).NotEmpty();
        // RuleFor(x => x.Venue).NotEmpty();
    }
}

public class UpdateProjectMemberValidator : AbstractValidator<UpdateProjectMemberDto>
{
}