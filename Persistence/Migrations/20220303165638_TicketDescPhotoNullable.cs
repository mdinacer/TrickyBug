using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class TicketDescPhotoNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Descriptions_Photo_PhotoId",
                table: "Descriptions");

            migrationBuilder.AlterColumn<string>(
                name: "PhotoId",
                table: "Descriptions",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_Descriptions_Photo_PhotoId",
                table: "Descriptions",
                column: "PhotoId",
                principalTable: "Photo",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Descriptions_Photo_PhotoId",
                table: "Descriptions");

            migrationBuilder.AlterColumn<string>(
                name: "PhotoId",
                table: "Descriptions",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Descriptions_Photo_PhotoId",
                table: "Descriptions",
                column: "PhotoId",
                principalTable: "Photo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
