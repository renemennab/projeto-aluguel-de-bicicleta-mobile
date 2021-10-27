using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {

        public DbContext Context { get; set; }
        public DbSet<T> Query { get; set; }

        public BaseRepository(ApplicationDbContext context)
        {
            this.Context = context;
            this.Query = context.Set<T>();
        }

        public async Task Incluir(T obj)
        {
            await this.Query.AddAsync(obj);
            await this.Context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> SelecionarTodos()
        {
            return await this.Query.ToListAsync();
        }

        public async Task<T> SelecionarPorId(int Id)
        {
            return await this.Query.FindAsync(Id);
        }

        public async Task Alterar(T obj)
        {
            this.Query.Update(obj);
            await this.Context.SaveChangesAsync();
        }

        public async Task Excluir(T obj)
        {
            this.Query.Remove(obj);
            await this.Context.SaveChangesAsync();
        }
    }
}
