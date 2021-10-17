using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace mapa_do_bem_api.Repository.Mapping
{
    public class PontoDeColetaMap : IEntityTypeConfiguration<PontoDeColeta>
    {
        public void Configure(EntityTypeBuilder<PontoDeColeta> builder)
        {
            builder.ToTable("PontoDeColeta");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id).ValueGeneratedOnAdd();

            builder.Property(p => p.Nome).IsRequired().HasMaxLength(300);

            builder.Property(p => p.Descricao).IsRequired().HasMaxLength(500);

            builder.Property(p => p.Telefone).IsRequired().HasMaxLength(11);

            builder.Property(p => p.Cep).IsRequired().HasMaxLength(8);

            builder.Property(p => p.Numero).IsRequired().HasMaxLength(4);

            builder.Property(p => p.Latitude).IsRequired().HasColumnType("decimal(8,6)");

            builder.Property(p => p.Longitude).IsRequired().HasColumnType("decimal(9,6)");

            builder.Property(p => p.HorarioFuncionamento).IsRequired();

            builder.Property(p => p.DiasFuncionamento).IsRequired();

        }
    }
}
