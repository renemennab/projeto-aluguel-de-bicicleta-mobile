using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace mapa_do_bem_api.Repository
{
    public class PontoColetaRepository : BaseRepository<PontoDeColeta>, IPontoColetaRepository
    {
        public PontoColetaRepository(ApplicationDbContext context): base(context){}

        public new async Task<PontoDeColeta> SelecionarPorId(int id)
        {
            return await this.Query.Include(x => x.ItensDoacao).FirstOrDefaultAsync(x => x.Id == id);
        }

        public new async Task<IList<PontoDeColeta>> SelecionarTodos()
        {
            return await this.Query.Include(x => x.ItensDoacao).ToListAsync();
        }

        public async Task<IList<PontoDeColeta>> SelecionarTodosPorUsuario(string idUsuario)
        {
            return await this.Query.Include(x => x.ItensDoacao)
                                   .Where(x => x.ColetorId == idUsuario)
                                   .ToListAsync();
        }

        public async Task<IList<PontoDeColeta>> BuscarPorFiltro(String filtro)
        {
            return await this.Query.Include(x => x.ItensDoacao)
                                   .Where(x => x.Nome.ToUpper().Contains(filtro)
                                   || x.CidadeEstado.ToUpper().Contains(filtro)
                                   || x.ItensDoacao.Any(i => i.Produto.ToUpper().Contains(filtro)))
                                   .ToListAsync();
        }
    }
}
