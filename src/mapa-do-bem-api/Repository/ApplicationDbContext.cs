using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository.Mapping;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace mapa_do_bem_api.Repository
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Item> Item { get; set; }
        public DbSet<PontoDeColeta> PontoDeColeta { get; set; }
        public DbSet<ApplicationUser> AspNetUsers { get; set; }
        public DbSet<Coletor> Coletor { get; set; }
        public DbSet<Doador> Doador { get; set; }
        public DbSet<Evento> Evento { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new ItemMap());
            builder.ApplyConfiguration(new PontoDeColetaMap());
            builder.ApplyConfiguration(new ApplicationUserMap());
            builder.ApplyConfiguration(new EventoMap());

            base.OnModelCreating(builder);
        }
    }
}
