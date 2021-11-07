using Microsoft.EntityFrameworkCore.Migrations;

namespace mapa_do_bem_api.Migrations
{
    public partial class addcamposPontoDeColeta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HorarioFuncionamento",
                table: "PontoDeColeta");

            migrationBuilder.AddColumn<string>(
                name: "CidadeEstado",
                table: "PontoDeColeta",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HorarioFimFuncionamento",
                table: "PontoDeColeta",
                type: "nvarchar(500)",
                nullable: false,
                defaultValue: "08:00");

            migrationBuilder.AddColumn<string>(
                name: "HorarioInicioFuncionamento",
                table: "PontoDeColeta",
                type: "nvarchar(500)",
                nullable: false,
                defaultValue: "22:00");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CidadeEstado",
                table: "PontoDeColeta");

            migrationBuilder.DropColumn(
                name: "HorarioFimFuncionamento",
                table: "PontoDeColeta");

            migrationBuilder.DropColumn(
                name: "HorarioInicioFuncionamento",
                table: "PontoDeColeta");

            migrationBuilder.AddColumn<string>(
                name: "HorarioFuncionamento",
                table: "PontoDeColeta",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
