using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistance.Migrations
{
    /// <inheritdoc />
    public partial class CanceledProperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "isHost",
                table: "ActivityAttendees",
                newName: "IsHost");

            migrationBuilder.AddColumn<bool>(
                name: "IsCanceled",
                table: "Activities",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsCanceled",
                table: "Activities");

            migrationBuilder.RenameColumn(
                name: "IsHost",
                table: "ActivityAttendees",
                newName: "isHost");
        }
    }
}
