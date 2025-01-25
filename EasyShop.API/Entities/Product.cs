using System.ComponentModel.DataAnnotations;
using EasyShop.API;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.EntityFrameworkCore;

namespace EasyShop.API.Entities;

public class Product
{
    public Product(
        int id,
        string name, 
        string description,
        double price,
        int stock, string productImageUrl,
        DateTime createdAt, 
        DateTime updatedAt,
        bool isActive, 
        double discount,
        int categoryId)
    {
        Id = id;
        Name = name;
        Description = description;
        Price = price;
        Stock = stock;
        ProductImageUrl = productImageUrl;
        CreatedAt = DateTime.UtcNow;
        UpdatedAt = updatedAt;
        IsActive = isActive;
        Discount = discount;
        CategoryId = categoryId;
    }

    public int Id { get; private set; }
    [Required]
    public string Name { get; private set; }
    [Required]
    public string Description { get; private set; }
    [Required]
    public double Price { get; private set; }
    [Required]
    public int Stock { get; private set; }
    public string ProductImageUrl { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime UpdatedAt { get; private set; }
    public bool IsActive { get; private set; }
    public double Discount { get; private set; }


    // Relacionamento com a categoria
    public int CategoryId { get; set; } // Chave estrangeira
    public Category Category { get; private set; } // Propriedade de navegação
}