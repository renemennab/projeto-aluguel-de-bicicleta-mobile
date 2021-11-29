using mapa_do_bem_api.Repository;
using mapa_do_bem_api.Model;
using Moq;
using Xunit;
using mapa_do_bem_api.Services;
using System.Threading.Tasks;

namespace mapa_do_bem_api_test
{
    public class DoadorServiceTest
    {
        /* CT010 - Sistema deve permitir que usuários favoritem pontos de coleta */
        [Fact]
        public async void Cadastrar()
        {
            Doador doador = new()
            {
                Id = "a2fg35h6y6k8"
            };

            PontoDeColeta ponto = new()
            {
                Id = 2
            };

            var mockRepo = new Mock<IDoadorRepository>();

            mockRepo.Setup(x => x.SelecionarPorId("a2fg35h6y6k8")).Returns(Task.FromResult(doador));
            mockRepo.Setup(x => x.Alterar(It.IsAny<Doador>()))
                    .Verifiable();

            var pontoRepo = new Mock<IPontoColetaRepository>();

            pontoRepo.Setup(x => x.SelecionarPorId(2)).Returns(Task.FromResult(ponto));

            var doadorService = new DoadorService(pontoRepo.Object, mockRepo.Object);

            await doadorService.AddPontoFavorito("a2fg35h6y6k8", 2);

            mockRepo.VerifyAll();
        }
    }
}
