using EasyShop.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace EasyShop.API;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // Defina as tabelas aqui
    public DbSet<Product> Products { get; set; }
    public DbSet<Customer> Users { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<EasyShop.API.Entities.Category> Category { get; set; } = default!;
}
