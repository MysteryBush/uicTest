namespace uicTest.Data
{
    public class CardItemService
    {
        private static readonly string[] Desc = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        public Task<CardItem[]> GetCardAsync(DateTime startDate)
        {
            return Task.FromResult(Enumerable.Range(1, 12).Select(index => new CardItem
            {
                Date = startDate.AddDays(index),
                Title = Desc[Random.Shared.Next(Desc.Length)],
                Desc = Desc[Random.Shared.Next(Desc.Length)]
            }).ToArray());
        }
    }
}