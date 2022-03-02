using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class AddedAuthor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Tickets",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Phases",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Phases",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Phases",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Descriptions",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "AuthorId",
                table: "Actions",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Actions",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Body = table.Column<string>(type: "TEXT", nullable: false),
                    TicketId = table.Column<int>(type: "INTEGER", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    AuthorId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comments_AspNetUsers_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Comments_Tickets_TicketId",
                        column: x => x.TicketId,
                        principalTable: "Tickets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Actions_AuthorId",
                table: "Actions",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_AuthorId",
                table: "Comments",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_TicketId",
                table: "Comments",
                column: "TicketId");

            migrationBuilder.AddForeignKey(
                name: "FK_Actions_AspNetUsers_AuthorId",
                table: "Actions",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Actions_AspNetUsers_AuthorId",
                table: "Actions");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Actions_AuthorId",
                table: "Actions");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Phases");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Phases");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Phases");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Descriptions");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "Actions");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Actions");
        }
    }
}
