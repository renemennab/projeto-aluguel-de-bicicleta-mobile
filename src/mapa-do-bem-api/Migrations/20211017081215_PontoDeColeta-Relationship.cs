using Microsoft.EntityFrameworkCore.Migrations;

namespace mapa_do_bem_api.Migrations
{
    public partial class PontoDeColetaRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ColetorId",
                table: "PontoDeColeta",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PontoDeColeta_ColetorId",
                table: "PontoDeColeta",
                column: "ColetorId");

            migrationBuilder.AddForeignKey(
                name: "FK_PontoDeColeta_AspNetUsers_ColetorId",
                table: "PontoDeColeta",
                column: "ColetorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PontoDeColeta_AspNetUsers_ColetorId",
                table: "PontoDeColeta");

            migrationBuilder.DropIndex(
                name: "IX_PontoDeColeta_ColetorId",
                table: "PontoDeColeta");

            migrationBuilder.DropColumn(
                name: "ColetorId",
                table: "PontoDeColeta");
        }
    }
}
