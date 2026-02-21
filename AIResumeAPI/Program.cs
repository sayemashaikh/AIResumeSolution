var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// ✅ Add CORS policy (VERY IMPORTANT for Angular connection)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable Swagger (for all environments)
app.UseSwagger();
app.UseSwaggerUI();

// Middleware
app.UseHttpsRedirection();

// ✅ Enable CORS
app.UseCors("AllowAngular");

app.UseAuthorization();

// Map controllers
app.MapControllers();

app.Run();