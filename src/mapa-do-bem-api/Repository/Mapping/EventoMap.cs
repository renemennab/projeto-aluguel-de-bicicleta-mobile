using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace mapa_do_bem_api.Repository.Mapping
{
    public class EventoMap : IEntityTypeConfiguration<Evento>
    {
        public void Configure(EntityTypeBuilder<Evento> builder)
        {
            builder.ToTable("Evento");

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Id).ValueGeneratedOnAdd();

            builder.Property(e => e.Nome).IsRequired().HasMaxLength(300);

            builder.Property(e => e.Descricao).IsRequired().HasMaxLength(500);

            builder.Property(e => e.DataInicio).IsRequired().HasMaxLength(500);

            builder.Property(e => e.DataFim).IsRequired().HasMaxLength(500);

        }
    }
}
