using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace mapa_do_bem_api.Repository.Mapping
{
    public class ItemMap : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.ToTable("Item");

            builder.HasKey(i => i.Id);

            builder.Property(i => i.Id).ValueGeneratedOnAdd();

            builder.Property(i => i.Produto).IsRequired().HasMaxLength(300);

            builder.HasData
            (
                new Item { Id = 1, Produto = "Alimento Não Perecível" },
                new Item { Id = 2, Produto = "Alimento Preparado" },
                new Item { Id = 3, Produto = "Produtos de Higiene Pessoal" },
                new Item { Id = 4, Produto = "Roupas" }
            );
        }
    }
}
