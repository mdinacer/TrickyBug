namespace API.Extensions;

public static class CorsExtensions
{
    public static IServiceCollection AddCorsConfig(this IServiceCollection services)
    {
        services.AddCors(opt =>
        {
            opt.AddPolicy("CorsPolicy", policy =>
            {
                policy
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .WithExposedHeaders("WWW-Authenticate", "Pagination")
                    .WithOrigins("http://localhost:3000");
            });
        });

        return services;
    }
}