using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using mapa_do_bem_api.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;

namespace mapa_do_bem_api
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            CurrentEnvironment = env;
        }

        public IConfiguration Configuration { get; }
        private IWebHostEnvironment CurrentEnvironment { get; set; }

        private string GetHerokuConnectionString()
        {
            var dbUri = new Uri(Environment.GetEnvironmentVariable("DATABASE_URL"));

            string db = dbUri.LocalPath.TrimStart('/');
            string[] userInfo = dbUri.UserInfo.Split(':', StringSplitOptions.RemoveEmptyEntries);

            return $"User ID={userInfo[0]};Password={userInfo[1]};Host={dbUri.Host};Port={dbUri.Port};Database={db};Pooling=true;SSL Mode=Require;Trust Server Certificate=True;";
        }

        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = this.CurrentEnvironment.IsProduction() ? GetHerokuConnectionString()
                                        : this.Configuration.GetConnectionString("MapaDoBem");

            services.AddDbContext<ApplicationDbContext>(opt =>
            {
                opt.UseNpgsql(connectionString);
            });

            services.AddCors(options =>
            {
                options.AddPolicy(name: "CorsPolicy",
                        builder =>
                        {
                            builder.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                        });
            });

            services.AddControllers();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API Mapa Do Bem", Version = "v1" });
            });

            services.AddIdentity<ApplicationUser, IdentityRole>()
                    .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddScoped(typeof(BaseRepository<>));
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IPontoColetaRepository, PontoColetaRepository>();
            services.AddScoped<IPontoColetaService, PontoColetaService>();
            services.AddScoped<IItemRepository, ItemRepository>();
            services.AddScoped<IEventoRepository, EventoRepository>();
            services.AddScoped<IEventoService, EventoService>();
            services.AddScoped<IColetorService, ColetorService>();
            services.AddScoped<IDoadorRepository, DoadorRepository>();
            services.AddScoped<IDoadorService, DoadorService>();
        }

        public void Configure(IApplicationBuilder app)
        {
            if (this.CurrentEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "mapa_do_bem_api v1"));

            app.UseRouting();
            
            app.UseCors("CorsPolicy");
            
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
