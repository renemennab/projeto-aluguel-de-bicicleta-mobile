using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using mapa_do_bem_api.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public class PontoColetaService : IPontoColetaService
    {
        private readonly IPontoColetaRepository _repository;
        private readonly IUserRepository _userRepository;
        private readonly IItemRepository _itemRepository;

        public PontoColetaService(IPontoColetaRepository repository, IUserRepository userRepository, IItemRepository itemRepository)
        {
            _repository = repository;
            _userRepository = userRepository;
            _itemRepository = itemRepository;
        }
     
        public async Task Cadastrar(PontoColetaViewModel pontoDeColeta)
        {
            var Coletor = (Coletor) await _userRepository.SelecionarPorId(pontoDeColeta.ColetorId);

            var ItensAceitos = new List<Item>();

            foreach (var IdProduto in pontoDeColeta.ItensDoacao)
            {
               ItensAceitos.Add(await _itemRepository.SelecionarPorId(IdProduto));
            }

            var ponto = new PontoDeColeta
            {
                Nome = pontoDeColeta.Nome,
                Descricao = pontoDeColeta.Descricao,
                Telefone = pontoDeColeta.Telefone,
                Cep = pontoDeColeta.Cep,
                CidadeEstado = pontoDeColeta.CidadeEstado,
                Numero = pontoDeColeta.Numero,
                Latitude = pontoDeColeta.Latitude,
                Longitude = pontoDeColeta.Longitude,
                HorarioInicioFuncionamento = pontoDeColeta.HorarioInicioFuncionamento,
                HorarioFimFuncionamento = pontoDeColeta.HorarioFimFuncionamento,
                DiasFuncionamento = pontoDeColeta.DiasFuncionamento,
                ItensDoacao  = ItensAceitos, 
                Coletor = Coletor
            };

            await _repository.Incluir(ponto);
        }

        public async Task<PontoDeColeta> SelecionarPorId(int id)
        {
            return await _repository.SelecionarPorId(id);
        }
    }
}
