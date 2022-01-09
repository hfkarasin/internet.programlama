using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proje.dataAccess.Abstract;
using Proje.entity;


namespace Proje.dataAccess.Concrete.EfCore
{
    public class EfCoreProductRepository : EfCoreGenericRepository<Product, ShopContext>, IProductRepository
    {
        
    }
}