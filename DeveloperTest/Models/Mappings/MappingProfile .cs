using AutoMapper;
using DeveloperTest.Database.Models;

namespace DeveloperTest.Models.Mappings
{
    public class MappingProfile : Profile
    {        
        public MappingProfile()
        {
            CreateMap<BaseCustomerModel, Customer>();
            CreateMap<Customer, CustomerModel>();

            CreateMap<BaseJobModel, JobModel>();
            CreateMap<Job, JobModel>();
        }
    }
}
