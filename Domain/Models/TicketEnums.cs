using System.ComponentModel;

namespace Domain.Models;

public enum IssueOccurrence
{
    [Description("Persistent Issue")] Persistent,
    [Description("Frequent Issue")] Frequent,

    [Description("Random Occurence Issue")]
    Random,

    [Description("Hard to reproduce Issue")]
    Rare
}

public enum TicketStatus
{
    [Description("Defect is logged and posted for the first time")]
    New,
    [Description("Assigned the developer team")]
    Assigned,
    [Description("Analyzing started")]
    Open,
    [Description("Fixed Issue")]
    Fixed,
    [Description("Pending for retest")]
    Pending,
    [Description("Check whether the defect is fixed ")]
    Retest,
    [Description("Positive Re-Test")]
    Verified,
    [Description("Bug not fixed")]
    Reopen,
    [Description("Bug is fixed and no longer exists")]
    Closed,
    [Description("A duplicate ticket for the same bug")]
    Duplicate,
    [Description("Not a genuine defect")]
    Rejected,
    [Description("Not of a prime priority. Expected to get fixed in the next release")]
    Deferred,
    [Description("Does not affect the functionality of the application")]
    NotBug
}

public enum TicketPriority
{
    [Description("Low priority")] Low,
    [Description("Medium priority")] Medium,
    [Description("High priority")] High,
    [Description("Urgent priority")] Urgent
}

public enum IssueSeverity
{
    [Description("Low severity")] Low,
    [Description("Medium severity")] Medium,
    [Description("High severity")] High,
    [Description("Critical severity")] Critical
}

public enum IssueNature
{
    [Description("Functional issue")] Functional,
    [Description("Performance issue")] Performance,
    [Description("Usability issue")] Usability,
    [Description("Compatibility issue")] Compatibility,
    [Description("Security issue")] Security
}