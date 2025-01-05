using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITROI_REST.DTO.Requests
{
    public class GetProductsByFiltersRequest
    {
        public List<string> brands { get; set; }
        public List<string> categories { get; set; }
        public List<string> colours { get; set; }
        public double minPrice { get; set; }
        public double maxPrice { get; set; }
    }
}
