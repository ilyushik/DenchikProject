using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITROI_REST.DTO.Responses
{
    public class GetProductsByFiltersResponse
    {
        public GetProductsByFiltersResponse(List<Product> products)
        {
            this.products = products;
        }

        public List<Product> products { get; set; }
    }
}
