using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITROI_REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> CreateOrder(Order ord)
        {
            using(ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    db.Orders.Add(ord);
                    db.SaveChanges();

                    return new JsonResult(null);
                }
                catch (Exception err)
                {
                    return new JsonResult(err);
                }
            }
        }
    }
}
