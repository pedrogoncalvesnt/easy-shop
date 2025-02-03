using EasyShop.API;
using Microsoft.EntityFrameworkCore;
using EasyShop.API.Controllers;
using EasyShop.API.Entities;

var builder = WebApplication.CreateBuilder(args);

// Adiciona o contexto com o SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Adiciona depend�ncias
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Middleware do Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Middlewares b�sicos
app.UseHttpsRedirection();
app.UseAuthorization();

// Mapear endpoints ou controllers
app.MapProductEndpoints(); // Minimal APIs

app.MapCustomerEndpoints();

app.MapCategoryEndpoints();
// app.MapControllers(); // Para APIs baseadas em controllers

app.Run();
