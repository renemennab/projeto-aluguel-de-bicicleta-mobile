using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using mapa_do_bem_api.ViewModel;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public class PontoColetaService : IPontoColetaService
    {
        private readonly IPontoColetaRepository _repository;

        public PontoColetaService(IPontoColetaRepository repository)
        {
            _repository = repository;
        }
        
        // TODO: receber ColetorId 
        public async Task Cadastrar(PontoColetaViewModel pontoDeColeta)
        {
            var ponto = new PontoDeColeta
            {
                Nome = pontoDeColeta.Nome,
                Descricao = pontoDeColeta.Descricao,
                Telefone = pontoDeColeta.Telefone,
                Cep = pontoDeColeta.Cep,
                Numero = pontoDeColeta.Numero,
                Latitude = pontoDeColeta.Latitude,
                Longitude = pontoDeColeta.Longitude,
                HorarioFuncionamento = pontoDeColeta.HorarioFuncionamento,
                DiasFuncionamento = pontoDeColeta.DiasFuncionamento,
                ItensDoacao  = pontoDeColeta.ItensDoacao,
                Coletor = pontoDeColeta.Coletor
            };

            await _repository.Incluir(ponto);
        }
    }
}
