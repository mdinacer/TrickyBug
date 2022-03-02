using Domain.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DataContext : IdentityDbContext<AppUser, UserRole, string>
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<ProjectTicket> Tickets { get; set; }
    public DbSet<TicketComment> Comments { get; set; }
    public DbSet<ProjectPhase> Phases { get; set; }
    public DbSet<ProjectAction> Actions { get; set; }
    public DbSet<ProjectMember> ProjectMembers { get; set; }
    public DbSet<TicketDescription> Descriptions { get; set; }
    public DbSet<UserProfile> Profiles { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<AppUser>()
            .HasOne(u => u.Profile)
            .WithOne(p => p.User)
            .HasForeignKey<UserProfile>(a => a.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.Entity<ProjectTicket>()
            .HasOne(u => u.Description)
            .WithOne(p => p.Ticket)
            .HasForeignKey<TicketDescription>(a => a.TicketId)
            .OnDelete(DeleteBehavior.Cascade);


        builder.Entity<ProjectMember>(b =>
        {
            b.HasKey(k => new { k.UserId, k.ProjectId });

            b.HasOne(o => o.User)
                .WithMany(f => f.Projects)
                .HasForeignKey(o => o.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            b.HasOne(o => o.Project)
                .WithMany(f => f.Members)
                .HasForeignKey(o => o.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}