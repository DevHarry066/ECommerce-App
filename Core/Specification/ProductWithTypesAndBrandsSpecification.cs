using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class ProductWithTypesAndBrandsSpecification: BaseSpecification<Product>
    {
        public ProductWithTypesAndBrandsSpecification(string sort)
        {
            AddInclude(p => p.ProductType);
            AddInclude(p => p.ProductBrand);
            AddOrderBy(x => x.Name);

            if (!string.IsNullOrEmpty(sort))
            {
                switch (sort)
                {
                    case "priceAsc":
                            AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDesecending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(p => p.Name);
                        break;
                }
            }
        }

        public ProductWithTypesAndBrandsSpecification(int id)
            : base(x=> x.Id == id)
        {
            AddInclude(p => p.ProductType);
            AddInclude(p => p.ProductBrand);
        }
    }
}
