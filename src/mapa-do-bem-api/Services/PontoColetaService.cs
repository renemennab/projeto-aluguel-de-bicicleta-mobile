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
     
        public async Task Cadastrar(PontoColetaViewModel pontoDeColeta, string coletorId)
        {
            var Coletor = (Coletor) await _userRepository.SelecionarPorId(coletorId);

            var ItensAceitos = new List<Item>();

            foreach (var produto in pontoDeColeta.ItensDoacao)
            {
               ItensAceitos.Add(await _itemRepository.SelecionarPorId(produto.Id));
            }

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
                ItensDoacao  = ItensAceitos, 
                Coletor = Coletor
            };

            await _repository.Incluir(ponto);
        }
    }
}
