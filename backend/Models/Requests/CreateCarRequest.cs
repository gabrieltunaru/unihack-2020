using System;

namespace unihack.Models.Requests
{
    public class CreateCarRequest
    {
        public string Model { get; set; }
        public string Company { get; set; }
        public int Year { get; set; }
        public float Autonomy { get; set; }
        public float BatteryLeft { get; set; }
        public DateTime LastTechRevision { get; set; }
    }
}