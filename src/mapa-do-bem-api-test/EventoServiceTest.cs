using mapa_do_bem_api.Repository;
using mapa_do_bem_api.Model;
using Moq;
using Xunit;
using mapa_do_bem_api.Services;

namespace mapa_do_bem_api_test
{
    public class EventoServiceTest
    {
        /* CT006 - Sistema deve permitir que usuários cadastrem evento de distribuição */
        [Fact]
        public async void Cadastrar()
        {
            var mockRepo = new Mock<IEventoRepository>();
            mockRepo.Setup(x => x.Incluir(It.IsAny<Evento>()))
                    .Verifiable();

            var eventoService = new EventoService(mockRepo.Object);

            await eventoService.Cadastrar(
                new EventoViewModel
                {
                    Nome = "Evento Teste",
                    Descricao = "Evento Teste Descrição",
                    DataInicio = "20/11/2021",
                    DataFim = "20/12/2021",
                    PontoColetaId = 2
                });

            mockRepo.VerifyAll();
        }
    }
}
