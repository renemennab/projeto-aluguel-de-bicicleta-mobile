using mapa_do_bem_api.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public class EventoRepository : BaseRepository<Evento>, IEventoRepository
    {
        public EventoRepository(ApplicationDbContext context): base(context){}

        public async Task<IList<Evento>> SelecionarTodosPorPonto(int idPonto)
        {
            return await this.Query.Where(x => x.PontoColetaId == idPonto)
                                   .ToListAsync();
        }

        public async Task<IList<Evento>> SelecionarTodosPorColetor(string idColetor)
        {
            return await this.Query.Where(x => x.PontoColeta.ColetorId == idColetor)
                                   .ToListAsync();
        }
    }
}
