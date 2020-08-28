using Microsoft.EntityFrameworkCore;
using server.Entities;

namespace server
{
    public class Context : DbContext 
    {
        public DbSet<Contato> Contatos { get; set; }

        public Context(DbContextOptions options) : base(options){}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        
    }
}