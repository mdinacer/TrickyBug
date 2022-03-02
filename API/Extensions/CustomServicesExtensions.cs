using API.Services;
using Application.Core;
using Application.Interfaces;
using Application.Projects;
using Infrastructure.Email;
using Infrastructure.Photos;
using Infrastructure.Security;
using MediatR;
using Slugify;

namespace API.Extensions;

public static class CustomServicesExtensions
{
    public static IServiceCollection AddCustomServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddMediatR(typeof(Create.Handler).Assembly);
        services.AddAutoMapper(typeof(MappingProfiles).Assembly);
        services.AddScoped<IUserAccessor, UserAccessor>();
        services.AddScoped<IPhotoAccessor, PhotoAccessor>();
        services.AddScoped<ISlugHelper, SlugHelper>();
        services.AddScoped<EmailSender>();
        services.AddScoped<TokenService>();
        services.Configure<CloudinarySettings>(config.GetSection("Cloudinary"));
        services.AddSignalR();
        return services;
    }
}