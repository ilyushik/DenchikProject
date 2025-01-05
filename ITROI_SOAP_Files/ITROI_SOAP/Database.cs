using Microsoft.EntityFrameworkCore;

namespace ITROI_SOAP
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<PostDelivery> PostDeliveries { get; set; }
        public DbSet<CourierDelivery> CourierDeliveries { get; set; }
        public DbSet<Mark> Marks { get; set; }

        public ApplicationContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;user=admin;password=qwerty;database=ITROI;");
        }
    }
}