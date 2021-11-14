using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public class ColetorService : IColetorService
    {
        private readonly IPontoColetaRepository _pontoRepository;

        public ColetorService(IPontoColetaRepository pontoRepository)
        {
            _pontoRepository = pontoRepository;
        }
       
        public async Task<IList<PontoDeColeta>> SelecionarTodosPorUsuario(string idUsuario)
        {
            return await _pontoRepository.SelecionarTodosPorUsuario(idUsuario);
        }
    }
}
