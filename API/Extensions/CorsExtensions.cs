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
                    .WithOrigins("http://localhost:3000")
                    .AllowCredentials()
                    .WithExposedHeaders("WWW-Authenticate", "Pagination");

            });
        });

        return services;
    }
}