using AutoMapper;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;
using System.Linq;

namespace DeveloperTest.Business.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public CustomerService(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public CustomerModel GetCustomer(int id)
        {
            return context.Customers.Where(x => x.CustomerId == id).Select(customer => mapper.Map<CustomerModel>(customer)).SingleOrDefault();
        }

        public CustomerModel[] GetCustomers()
        {
            return context.Customers.Select(customer => mapper.Map<CustomerModel>(customer)).ToArray();
        }

        public CustomerModel CreateCustomer(BaseCustomerModel model)
        {
            var addedCustomer = context.Customers.Add(mapper.Map<Customer>(model));

            context.SaveChanges();

            return mapper.Map<CustomerModel>(addedCustomer.Entity);
        }

    }
}
