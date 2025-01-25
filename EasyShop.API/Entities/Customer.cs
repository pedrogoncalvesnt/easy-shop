using EasyShop.API;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace EasyShop.API.Entities;

public class Customer
{
    public Customer(
        int id,
        string oAuthProvider,
        string oAuthProviderId,
        string email,
        string name,
        string profilePictureUrl, 
        DateTime lastLogin)
    {
        Id = id;
        OAuthProvider = oAuthProvider;
        OAuthProviderId = oAuthProviderId;
        Email = email;
        Name = name;
        ProfilePictureUrl = profilePictureUrl;
        CreatedAt = DateTime.UtcNow;
        LastLogin = lastLogin;
    }

    public int Id { get; private set; }
    public string OAuthProvider { get; private set; }
    public string OAuthProviderId { get; private set; }
    public string Email { get; private set; }
    public string Name { get; private set; }
    public string ProfilePictureUrl { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime LastLogin { get; private set; }
}