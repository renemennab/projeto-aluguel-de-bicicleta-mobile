using mapa_do_bem_api.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public interface IDoadorService
    {
        Task<IList<PontoDeColeta>> ListarPontosFavoritos(string idDoador);
        Task AddPontoFavorito(string idDoador, int idPonto);
        Task RemoverPontoFavorito(string idDoador, int idPonto);
    }
}
