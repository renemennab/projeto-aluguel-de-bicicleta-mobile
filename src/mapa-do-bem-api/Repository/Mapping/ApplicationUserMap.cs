using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace mapa_do_bem_api.Repository.Mapping
{
    public class ApplicationUserMap : IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            builder.HasDiscriminator(u => u.Perfil);

            builder.Property(u => u.Nome).HasMaxLength(300);

            builder.Property(u => u.Perfil).HasMaxLength(300).HasColumnName("Perfil");

        }
    }
}
