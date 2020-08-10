using DeveloperTest.Database.Models.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperTest.Models
{
    public class BaseCustomerModel
    {
        [Required]
        [MinLength(5)]
        public string Name { get; set; }

        [Required]
        public CustomerType Type { get; set; }
    }
}
