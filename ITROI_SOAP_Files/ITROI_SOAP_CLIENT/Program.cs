using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ITROI_SOAP_CLIENT.ClothesShopClient;

namespace ITROI_SOAP_CLIENT
{
    class Program
    {
        static void Main(string[] args)
        {
            ClothesShopWebServiceSoapClient client = new ClothesShopWebServiceSoapClient();

            PostDelivery postDelivery = new PostDelivery { City = "Краматорск", PostOffice = 2 };
            CourierDelivery courierDelivery = new CourierDelivery { City = null, Adress = "" };
            CartItem[] cart = new CartItem[] { new CartItem { ProductId = 1, Amount = 1, Size = "L" } };

            ArrayOfString brands = new ArrayOfString { "Adidas" };
            ArrayOfString categories = new ArrayOfString { "Pants" };
            ArrayOfString colours = new ArrayOfString { "Black" };

            client.CreateOrder("Вячеслав", "Черногор", "+380991111111", "test@gmail.com", postDelivery, courierDelivery, cart);
            client.CreateComment(1, "Sigraem v gvint");
            client.CreateMark(1, 7);

            var productById = client.GetProductById(1);
            Console.WriteLine(productById.Name);

            Console.WriteLine("");

            var products = client.GetProductsByFiltres(null, null, colours, -1, 450);
            foreach(var product in products)
            {
                Console.WriteLine(product.Name);
            }
            Console.ReadLine();
        }
    }
}
