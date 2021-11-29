using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public class DoadorService : IDoadorService
    {
        private readonly IPontoColetaRepository _pontoRepository;

        private readonly IDoadorRepository _doadorRepository;

        public DoadorService(IPontoColetaRepository pontoRepository, IDoadorRepository doadorRepository)
        {
            _pontoRepository = pontoRepository;
            _doadorRepository = doadorRepository;
        }

        public async Task<IList<PontoDeColeta>> ListarPontosFavoritos(string idDoador)
        {
            return await _doadorRepository.ListarPontosFavoritos(idDoador);
        }

        public async Task AddPontoFavorito(string idDoador, int idPonto)
        {
            var Ponto = await _pontoRepository.SelecionarPorId(idPonto);

            var Doador = await _doadorRepository.SelecionarPorId(idDoador);

            if (Doador.PontosFavoritos.Any(f =>  f.PontoId == Ponto.Id)) 
            {
                throw new ArgumentException("Ponto já favoritado por esse usuário");
            } 

            Doador.PontosFavoritos.Add(new PontosFavoritos()
            {
                Ponto = Ponto,
                PontoId = Ponto.Id,
                Doador = Doador,
                DoadorId = Doador.Id
            });

            await _doadorRepository.Alterar(Doador);
        }

        public async Task RemoverPontoFavorito(string idDoador, int idPonto)
        {
            var Ponto = await _pontoRepository.SelecionarPorId(idPonto);

            var Doador = await _doadorRepository.SelecionarPorId(idDoador);

            var PontoFav = Doador.PontosFavoritos.FirstOrDefault(x => x.PontoId == Ponto.Id);

            Doador.PontosFavoritos.Remove(PontoFav);

            await _doadorRepository.Alterar(Doador);
        }
    }
}
