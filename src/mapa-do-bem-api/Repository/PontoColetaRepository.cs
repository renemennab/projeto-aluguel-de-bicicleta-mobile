using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public class PontoColetaRepository : BaseRepository<PontoDeColeta>, IPontoColetaRepository
    {
        public PontoColetaRepository(ApplicationDbContext context): base(context){}

        public new async Task<PontoDeColeta> SelecionarPorId(int id)
        {
            return await this.Query.Include(x => x.ItensDoacao).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
