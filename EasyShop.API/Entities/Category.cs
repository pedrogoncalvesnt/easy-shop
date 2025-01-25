using EasyShop.API;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace EasyShop.API.Entities;

public class Category {
    public Category(
        int id,
        string name)
    {
        Id = id;
        Name = name;
    }

    public int Id { get; private set; }
    public string Name { get; private set; }

    public List<Product>? Products { get; set; }
}