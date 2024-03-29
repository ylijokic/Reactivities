using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityAttendee> ActivityAttendees { get; set; }
        public DbSet<Photo> Photos { get; set; }

        // Configure Many-to-Many relationship
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ActivityAttendee>(x => x.HasKey(aa => new {aa.AppUserId, aa.AcitivityId}));

            builder.Entity<ActivityAttendee>().HasOne(u => u.AppUser).WithMany(a => a.Activities).HasForeignKey(aa => aa.AppUserId);
            builder.Entity<ActivityAttendee>().HasOne(u => u.Acitivity).WithMany(a => a.Attendees).HasForeignKey(aa => aa.AcitivityId);
        }
    }
}