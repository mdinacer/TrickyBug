using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersConfig();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerConfig();
builder.Services.AddDbContextConfig(builder.Configuration);
builder.Services.AddCorsConfig(); //TODO: enable on frontend dev
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddCustomServices(builder.Configuration);

// Create,Initialize, Migrate, Seed the database
await builder.InitializeDatabase();

var app = builder.Build();


// Add Middlewares and configurations
app.AddMiddlewaresConfig();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.Use(async (context, next) =>
    {
        context.Response.Headers.Add("Strict-Transport-Security", "max-age=31536000");
        await next.Invoke();
    });
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors("CorsPolicy");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

// app.UseEndpoints(endpoints =>
// {
//     endpoints.MapControllers();
//     endpoints.MapHub<ChatHub>("/chat");
//     endpoints.MapFallbackToController("Index", "Fallback");
// });

app.Run();