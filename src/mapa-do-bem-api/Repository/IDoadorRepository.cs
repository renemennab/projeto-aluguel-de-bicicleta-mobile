using mapa_do_bem_api.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public interface IDoadorRepository : IBaseRepository<Doador>
    {
        Task<IList<PontoDeColeta>> ListarPontosFavoritos(string idDoador);
        public Task<Doador> SelecionarPorId(string id);
    }
}
