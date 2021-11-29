using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public class ColetorService : IColetorService
    {
        private readonly IPontoColetaRepository _pontoRepository;

        private readonly IEventoRepository _eventoRepository;

        public ColetorService(IPontoColetaRepository pontoRepository, IEventoRepository eventoRepository)
        {
            _pontoRepository = pontoRepository;
            _eventoRepository = eventoRepository;
        }

        public async Task<IList<Evento>> SelecionarEventosPorColetor(string idUsuario)
        {
            return await _eventoRepository.SelecionarTodosPorColetor(idUsuario);
        }

        public async Task<IList<PontoDeColeta>> SelecionarPontosPorColetor(string idUsuario)
        {
            return await _pontoRepository.SelecionarTodosPorUsuario(idUsuario);
        }
    }
}
