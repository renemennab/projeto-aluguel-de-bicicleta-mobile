using mapa_do_bem_api.Repository;
using mapa_do_bem_api.Model;
using Moq;
using Xunit;
using mapa_do_bem_api.Services;
using mapa_do_bem_api.ViewModel;
using System.Collections.Generic;

namespace mapa_do_bem_api_test
{
    public class PontoServiceTest
    {
        /* CT003 - Sistema deve permitir que usuários cadastrem ponto de coleta */
        [Fact]
        public async void Cadastrar()
        {
            var mockRepo = new Mock<IPontoColetaRepository>();
            mockRepo.Setup(x => x.Incluir(It.IsAny<PontoDeColeta>()))
                    .Verifiable();

            var userRepo = new Mock<IUserRepository>();

            var itemRepo = new Mock<IItemRepository>();

            var pontoService = new PontoColetaService(mockRepo.Object, userRepo.Object, itemRepo.Object);

            List<int> ItensAceitos = new (){ 1, 2 };

            await pontoService.Cadastrar(
                new PontoColetaViewModel
                {
                    Nome = "Ponto Teste",
                    Descricao = "Ponto Teste Descrição",
                    Telefone = "21987653456",
                    Cep = "21876345",
                    CidadeEstado = "Rio de Janeiro/RJ",
                    Numero = 235,
                    Latitude = -22.9046433m,
                    Longitude = -43.1800605m,
                    HorarioInicioFuncionamento = "09:00",
                    HorarioFimFuncionamento = "21:00",
                    DiasFuncionamento = "Sex, Sab, Dom",
                    ItensDoacao = ItensAceitos,
                    ColetorId = "a2fg35h6y6k8"
                });

            mockRepo.VerifyAll();
        }
    }
}
