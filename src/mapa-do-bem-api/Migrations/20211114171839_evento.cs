using Microsoft.EntityFrameworkCore.Migrations;

namespace mapa_do_bem_api.Migrations
{
    public partial class evento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Evento",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    DataInicio = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    DataFim = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    PontoColetaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Evento", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Evento_PontoDeColeta_PontoColetaId",
                        column: x => x.PontoColetaId,
                        principalTable: "PontoDeColeta",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Evento_PontoColetaId",
                table: "Evento",
                column: "PontoColetaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Evento");
        }
    }
}
