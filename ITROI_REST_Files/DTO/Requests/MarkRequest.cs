using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITROI_REST.DTO.Requests
{
    public class MarkRequest
    {
        public int ProductId { get; set; }
        public int Mark { get; set; }
    }
}
