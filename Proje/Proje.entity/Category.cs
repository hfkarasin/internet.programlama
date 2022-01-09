using System.Collections.Generic;
using Proje.entity;
namespace Proje.entity
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public List<ProductCategory> ProductCategories{get;  set;}
        
    }
}