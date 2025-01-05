using ITROI_REST.DTO.Requests;
using ITROI_REST.DTO.Responses;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITROI_REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        [HttpPost("CreateComment", Name = "CreateComment")]
        public async Task<ActionResult> CreateComment(Comment com)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    db.Comments.Add(com);
                    db.SaveChanges();

                    return new JsonResult(null);
                }
                catch (Exception err)
                {
                    return new JsonResult(err);
                }
            }
        }

        [HttpPost("CreateMark", Name = "CreateMark")]
        public async Task<ActionResult> CreateMark(MarkRequest mark)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    Mark obj = db.Marks.FirstOrDefault(m => m.ProductId == mark.ProductId);

                    if (obj != null)
                    {
                        obj.Amount += 1;
                        obj.Value = ((obj.Value * (obj.Amount - 1)) + mark.Mark) / obj.Amount;
                    }
                    else
                    {
                        db.Marks.Add(new Mark
                        {
                            ProductId = mark.ProductId,
                            Value = mark.Mark,
                            Amount = 1,
                        });
                    }

                    db.SaveChanges();

                    return new JsonResult(null);
                }
                catch (Exception err)
                {
                    return new JsonResult(err);
                }
            }
        }

        [HttpPost("GetElementById", Name = "GetElementById")]
        public async Task<ActionResult> GetElementById(GetElementByIdRequest idObj)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    return new JsonResult(db.Products.FirstOrDefault(p => p.Id == idObj.ProductId));
                }
                catch (Exception err)
                {
                    return new JsonResult(err);
                }
            }
        }

        [HttpPost("GetMarkById", Name = "GetMarkById")]
        public async Task<ActionResult> GetMarkById(GetElementByIdRequest idObj)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    return new JsonResult(db.Marks.FirstOrDefault(p => p.ProductId == idObj.ProductId));
                }
                catch (Exception err)
                {
                    return new JsonResult(err);
                }
            }
        }

        [HttpPost("GetProductsByFilters", Name = "GetProductsByFilters")]
        public async Task<ActionResult> GetProductsByFilters(GetProductsByFiltersRequest filters)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    List<Product> products = db.Products.ToList();

                    if (filters.brands != null)
                    {
                        products = products.Where(p => filters.brands.Contains(p.Brand)).ToList();
                    }
                    if (filters.categories != null)
                    {
                        products = products.Where(p => filters.categories.Contains(p.Category)).ToList();
                    }
                    if (filters.colours != null)
                    {
                        products = products.Where(p => filters.colours.Contains(p.Colour)).ToList();
                    }
                    if (filters.minPrice != -1)
                    {
                        products = products.Where(p => p.Price >= filters.minPrice).ToList();
                    }
                    if (filters.maxPrice != -1)
                    {
                        products = products.Where(p => p.Price <= filters.maxPrice).ToList();
                    }

                    return new JsonResult(new GetProductsByFiltersResponse(products));
                }
                catch (Exception err)
                {
                    return new JsonResult(err);
                }
            }
        }
    }
}
