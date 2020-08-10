using DeveloperTest.Database.Models.Enum;

namespace DeveloperTest.Models
{
    public class CustomerModel
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public CustomerType CustomerType { get; set; }

    }
}
