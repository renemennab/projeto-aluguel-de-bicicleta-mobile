using mapa_do_bem_api.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public interface IEventoRepository : IBaseRepository<Evento>
    {
        Task<IList<Evento>> SelecionarTodosPorPonto(int idPonto);
    }
}
