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
            var Coletor = (Coletor)await _userRepository.SelecionarPorId(pontoDeColeta.ColetorId);

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

        public async Task Excluir(int id)
        {
            var ponto = await _repository.SelecionarPorId(id);

            await _repository.Excluir(ponto);
        }

        public async Task Alterar(PontoDeColeta ponto)
        {
            PontoDeColeta pontoAntigo = await _repository.SelecionarPorId(ponto.Id);

            pontoAntigo.Nome = ponto.Nome is not null ? ponto.Nome : pontoAntigo.Nome;
            pontoAntigo.Descricao = ponto.Descricao is not null ? ponto.Descricao : pontoAntigo.Descricao;
            pontoAntigo.Telefone = ponto.Telefone is not null ? ponto.Telefone : pontoAntigo.Telefone;
            pontoAntigo.Cep = ponto.Cep is not null ? ponto.Cep : pontoAntigo.Cep;
            pontoAntigo.CidadeEstado = ponto.CidadeEstado is not null ? ponto.CidadeEstado : pontoAntigo.CidadeEstado;
            pontoAntigo.Numero = ponto.Numero is not null ? ponto.Numero : pontoAntigo.Numero;
            pontoAntigo.Latitude = ponto.Latitude is not null ? ponto.Latitude : pontoAntigo.Latitude;
            pontoAntigo.Longitude = ponto.Longitude is not null ? ponto.Longitude : pontoAntigo.Longitude;
            pontoAntigo.HorarioInicioFuncionamento = ponto.HorarioInicioFuncionamento is not null ? ponto.HorarioInicioFuncionamento : pontoAntigo.HorarioInicioFuncionamento;
            pontoAntigo.HorarioFimFuncionamento = ponto.HorarioFimFuncionamento is not null ? ponto.HorarioFimFuncionamento : pontoAntigo.HorarioFimFuncionamento;
            pontoAntigo.DiasFuncionamento = ponto.DiasFuncionamento is not null ? ponto.DiasFuncionamento : pontoAntigo.DiasFuncionamento;

            pontoAntigo.ItensDoacao.Clear();
            
            foreach (var produto in ponto.ItensDoacao)
            {
                pontoAntigo.ItensDoacao.Add(await _itemRepository.SelecionarPorId(produto.Id));
            }

            pontoAntigo.Coletor = (Coletor)await _userRepository.SelecionarPorId(ponto.ColetorId);

            await _repository.Alterar(pontoAntigo);
        }

        public async Task<IList<PontoDeColeta>> SelecionarTodos()
        {
            return await _repository.SelecionarTodos();
        }
    }
}