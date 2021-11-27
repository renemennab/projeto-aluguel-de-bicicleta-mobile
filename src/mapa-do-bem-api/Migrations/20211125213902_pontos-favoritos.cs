using Microsoft.EntityFrameworkCore.Migrations;

namespace mapa_do_bem_api.Migrations
{
    public partial class pontosfavoritos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Evento_PontoDeColeta_PontoColetaId",
                table: "Evento");

            migrationBuilder.AlterColumn<int>(
                name: "PontoColetaId",
                table: "Evento",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateTable(
                name: "PontosFavoritos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PontoId = table.Column<int>(type: "int", nullable: false),
                    DoadorId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PontosFavoritos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PontosFavoritos_AspNetUsers_DoadorId",
                        column: x => x.DoadorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PontosFavoritos_PontoDeColeta_PontoId",
                        column: x => x.PontoId,
                        principalTable: "PontoDeColeta",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Item",
                columns: new[] { "Id", "Produto" },
                values: new object[] { 5, "Material Escolar" });

            migrationBuilder.CreateIndex(
                name: "IX_PontosFavoritos_DoadorId",
                table: "PontosFavoritos",
                column: "DoadorId");

            migrationBuilder.CreateIndex(
                name: "IX_PontosFavoritos_PontoId",
                table: "PontosFavoritos",
                column: "PontoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Evento_PontoDeColeta_PontoColetaId",
                table: "Evento",
                column: "PontoColetaId",
                principalTable: "PontoDeColeta",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Evento_PontoDeColeta_PontoColetaId",
                table: "Evento");

            migrationBuilder.DropTable(
                name: "PontosFavoritos");

            migrationBuilder.DeleteData(
                table: "Item",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.AlterColumn<int>(
                name: "PontoColetaId",
                table: "Evento",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Evento_PontoDeColeta_PontoColetaId",
                table: "Evento",
                column: "PontoColetaId",
                principalTable: "PontoDeColeta",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
