using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public class DoadorRepository : BaseRepository<Doador>, IDoadorRepository
    {
        public DoadorRepository(ApplicationDbContext context): base(context){}

        public async Task<IList<PontoDeColeta>> ListarPontosFavoritos(string idDoador)
        {
            return await this.Query.SelectMany(x => x.PontosFavoritos)
                                    .Where(x => x.DoadorId == idDoador)
                                    .Select(x => x.Ponto)
                                    .ToListAsync();
        }

        public async Task<Doador> SelecionarPorId(string id)
        {
            return await this.Query.Include(x => x.PontosFavoritos).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
