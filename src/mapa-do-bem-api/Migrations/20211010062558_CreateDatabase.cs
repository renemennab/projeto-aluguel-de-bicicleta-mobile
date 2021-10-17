using Microsoft.EntityFrameworkCore.Migrations;

namespace mapa_do_bem_api.Migrations
{
    public partial class CreateDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Item",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Produto = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PontoDeColeta",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: false),
                    Cep = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    Numero = table.Column<int>(type: "int", maxLength: 4, nullable: false),
                    Latitude = table.Column<decimal>(type: "decimal(8,6)", nullable: false),
                    Longitude = table.Column<decimal>(type: "decimal(9,6)", nullable: false),
                    HorarioFuncionamento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiasFuncionamento = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PontoDeColeta", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ItemPontoDeColeta",
                columns: table => new
                {
                    ItensDoacaoId = table.Column<int>(type: "int", nullable: false),
                    PontoDeColetaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemPontoDeColeta", x => new { x.ItensDoacaoId, x.PontoDeColetaId });
                    table.ForeignKey(
                        name: "FK_ItemPontoDeColeta_Item_ItensDoacaoId",
                        column: x => x.ItensDoacaoId,
                        principalTable: "Item",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ItemPontoDeColeta_PontoDeColeta_PontoDeColetaId",
                        column: x => x.PontoDeColetaId,
                        principalTable: "PontoDeColeta",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Item",
                columns: new[] { "Id", "Produto" },
                values: new object[,]
                {
                    { 1, "Alimento Não Perecível" },
                    { 2, "Alimento Preparado" },
                    { 3, "Produtos de Higiene Pessoal" },
                    { 4, "Roupas" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ItemPontoDeColeta_PontoDeColetaId",
                table: "ItemPontoDeColeta",
                column: "PontoDeColetaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ItemPontoDeColeta");

            migrationBuilder.DropTable(
                name: "Item");

            migrationBuilder.DropTable(
                name: "PontoDeColeta");
        }
    }
}
