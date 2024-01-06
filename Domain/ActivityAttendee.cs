namespace Domain
{
    public class ActivityAttendee
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public Guid AcitivityId { get; set; }
        public Activity Acitivity { get; set; }
        public bool IsHost { get; set; }
    }
}