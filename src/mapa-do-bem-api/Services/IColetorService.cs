using mapa_do_bem_api.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public interface IColetorService
    {
        Task<IList<PontoDeColeta>> SelecionarPontosPorColetor(string idUsuario);
        Task<IList<Evento>> SelecionarEventosPorColetor(string idUsuario);
    }
}
