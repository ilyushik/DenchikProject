using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace ITROI_SOAP
{
    /// <summary>
    /// Сводное описание для ClothesShopWebService
    /// </summary>
    [WebService(Namespace = "http://clothesShop.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class ClothesShopWebService : System.Web.Services.WebService
    {

        [WebMethod]
        public string CreateOrder(string firstName, string lastName, string phone, string email, PostDelivery postDelivery, CourierDelivery courierDelivery, List<CartItem> cart)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    Order order;

                    if (courierDelivery.City == null)
                    {
                        order = new Order
                        {
                            FirstName = firstName,
                            LastName = lastName,
                            Phone = phone,
                            Email = email,
                            PostDelivery = postDelivery,
                            Cart = cart,
                        };
                    }
                    else
                    {
                        order = new Order
                        {
                            FirstName = firstName,
                            LastName = lastName,
                            Phone = phone,
                            Email = email,
                            CourierDelivery = courierDelivery,
                            Cart = cart,
                        };
                    }

                    db.Orders.Add(order);
                    db.SaveChanges();

                    return null;
                }
                catch(Exception err)
                {
                    return err.Message;
                }
            }
        }

        [WebMethod]
        public string CreateComment(int productId, string text)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    db.Comments.Add(new Comment { 
                        ProductId = productId,
                        Text = text
                    });

                    db.SaveChanges();

                    return null;
                }
                catch (Exception err)
                {
                    return err.InnerException.Message;
                }
            }
        }

        [WebMethod]
        public string CreateMark(int productId, int mark)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    //db.Products.Add(new Product
                    //{
                    //    Name = "Штаны",
                    //    Price = 499.99,
                    //    Brand = "Adidas",
                    //    Category = "Pants",
                    //    Colour = "Black",
                    //    Description = "Не ну штаны реально топ",
                    //    Image = "0001"
                    //});
                    //db.SaveChanges();

                    Mark obj = db.Marks.FirstOrDefault(m => m.ProductId == productId);

                    if(obj != null)
                    {
                        obj.Amount += 1;
                        obj.Value = ((obj.Value * (obj.Amount - 1)) + mark) / obj.Amount;
                    }
                    else
                    {
                        db.Marks.Add(new Mark
                        {
                            ProductId = productId,
                            Value = mark,
                            Amount = 1,
                        });
                    }

                    db.SaveChanges();

                    return null;
                }
                catch (Exception err)
                {
                    return err.InnerException.Message;
                }
            }
        }

        [WebMethod]
        public Product GetProductById(int productId)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    return db.Products.FirstOrDefault(p => p.Id == productId);
                }
                catch (Exception err)
                {
                    return null;
                }
            }
        }

        [WebMethod]
        public List<Product> GetProductsByFiltres(List<string> brands, List<string> categories, List<string> colours, double minPrice, double maxPrice)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                try
                {
                    List<Product> products = db.Products.ToList();

                    if(brands != null)
                    {
                        products = products.Where(p => brands.Contains(p.Brand)).ToList();
                    }
                    if (categories != null)
                    {
                        products = products.Where(p => categories.Contains(p.Category)).ToList();
                    }
                    if (colours != null)
                    {
                        products = products.Where(p => colours.Contains(p.Colour)).ToList();
                    }
                    if(minPrice != -1)
                    {
                        products = products.Where(p => p.Price >= minPrice).ToList();
                    }
                    if (maxPrice != -1)
                    {
                        products = products.Where(p => p.Price <= maxPrice).ToList();
                    }

                    return products;
                }
                catch (Exception err)
                {
                    return null;
                }
            }
        }
    }
}
