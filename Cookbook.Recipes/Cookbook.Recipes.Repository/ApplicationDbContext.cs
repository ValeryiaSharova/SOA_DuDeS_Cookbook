using Cookbook.Recipes.Repository.Models;
using Microsoft.EntityFrameworkCore;

namespace Cookbook.Recipes.Repository
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Recipe> Recipes { get; set; }

        public DbSet<Ingredient> Ingredients { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Ingredient>()
                .HasOne(av => av.Recipe)
                .WithMany(q => q.Ingredients)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
