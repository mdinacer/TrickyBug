using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace API.Extensions;

public static class SwaggerExtensions
{
    public static IServiceCollection AddSwaggerConfig(this IServiceCollection services)
    {
        
        services.AddSwaggerGen(c =>
        {
           // c.SchemaFilter<EnumSchemaFilter>();
           c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Description = "JWT auth header",
                Name = "Authorization",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.ApiKey,
                Scheme = "Bearer"
            });
            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        },
                        Scheme = "oauth2",
                        Name = "Bearer",
                        In = ParameterLocation.Header
                    },
                    new List<string>()
                }
            });
        });
        return services;
    }
    
    public class EnumSchemaFilter : ISchemaFilter
    {
        public void Apply(OpenApiSchema model, SchemaFilterContext context)
        {
            if (context.Type.IsEnum)
            {
                model.Enum.Clear();
                Enum.GetNames(context.Type)
                    .ToList()
                    .ForEach(name => model.Enum.Add(new OpenApiString($"{name}")));
            }
        }
    }
}