using mapa_do_bem_api.Repository;
using mapa_do_bem_api.Model;
using Moq;
using System.Threading.Tasks;
using Xunit;
using mapa_do_bem_api.Services;
using mapa_do_bem_api.ViewModel;

namespace mapa_do_bem_api_test
{
    public class UserServiceTest
    {
        [Fact]
        public async void Cadastrar()
        {
            var mockRepo = new Mock<IUserRepository>();
            mockRepo.Setup(x => x.Cadastrar(It.IsAny<ApplicationUser>(), It.IsAny<string>()))
                    .Returns(Task.FromResult(true));

            var mockRepoPonto = new Mock<IPontoColetaRepository>();

            var usuarioService = new UserService(mockRepo.Object);
            var retorno = await usuarioService.Cadastrar(
                new UserViewModel
                {
                    Nome = "Teste",
                    Email = "teste@email.com",
                    Senha = "senhaForte!123",
                    Perfil = "Coletor"
                });

            Assert.True(retorno);
        }

        [Fact]
        public async void Login()
        {
            var user = new ApplicationUser
            {
                Id = "325d0079",
                Nome = "Teste",
                Perfil = "Coletor"
            };

            var mockRepo = new Mock<IUserRepository>();
            mockRepo.Setup(x => x.Login("teste@email.com", "senhaForte!123"))
                    .Returns(Task.FromResult(user));

            var mockRepoPonto = new Mock<IPontoColetaRepository>();

            var usuarioService = new UserService(mockRepo.Object);
            var retorno = await usuarioService.Login(
                new LoginViewModel
                {
                    Email = "teste@email.com",
                    Senha = "senhaForte!123"
                });

            Assert.Equal("325d0079", retorno.Id);
        }
    }
}
