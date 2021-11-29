using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace mapa_do_bem_api.Repository.Mapping
{
    public class PontosFavoritosMap : IEntityTypeConfiguration<PontosFavoritos>
    {
        public void Configure(EntityTypeBuilder<PontosFavoritos> builder)
        {
            builder.ToTable("PontosFavoritos");

            builder.HasKey(f => f.Id);
            builder.Property(f => f.Id).ValueGeneratedOnAdd();
        }
    }
}
