namespace uicTest.Data
{
    public class CardItem
    {
        public DateTime Date { get; set; } = DateTime.Now;

        public string? Title { get; set; } = "Card Title";

        public string? Img { get; set; } = string.Empty;

        public string? Desc { get; set; } = string.Empty;
    }
}