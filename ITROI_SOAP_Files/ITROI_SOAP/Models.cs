using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ITROI_SOAP
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Brand { get; set; }
        public string Category { get; set; }
        public string Colour { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }

    public class CartItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int Amount { get; set; }
        public string Size { get; set; }
    }

    public class PostDelivery
    {
        public int Id { get; set; }
        public string City { get; set; }
        public int PostOffice { get; set; }
    }

    public class CourierDelivery
    {
        public int Id { get; set; }
        public string City { get; set; }
        public string Adress { get; set; }
    }

    public class Order
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public List<CartItem> Cart { get; set; }
        public PostDelivery PostDelivery { get; set; }
        public CourierDelivery CourierDelivery { get; set; }
    }

    public class Comment
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public string Text { get; set; }
    }

    public class Mark
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public double Value { get; set; }
        public int Amount { get; set; }
    }
}