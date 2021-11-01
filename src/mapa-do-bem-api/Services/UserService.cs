using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using mapa_do_bem_api.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPontoColetaRepository _pontoRepository;

        public UserService(IUserRepository userRepository, IPontoColetaRepository pontoRepository)
        {
            _userRepository = userRepository;
            _pontoRepository = pontoRepository;
        }
        public async Task<bool> Cadastrar(UserViewModel model)
        {
            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                Nome = model.Nome,
                Perfil = model.Perfil
            };

            return await _userRepository.Cadastrar(user, model.Senha);
        }

        public async Task<UserLoggedViewModel> Login(LoginViewModel model)
        {
            var user = await _userRepository.Login(model.Email, model.Senha);

            if (user == null)
                return null;

            return new UserLoggedViewModel
            {
                Id = user.Id,
                Nome = user.Nome,
                Perfil = user.Perfil
            };
        }

        public async Task<ApplicationUser> SelecionarPorId(string id)
        {
            return await _userRepository.SelecionarPorId(id);
        }

        public async Task<IList<PontoDeColeta>> SelecionarTodosPorUsuario(string idUsuario)
        {
            return await _pontoRepository.SelecionarTodosPorUsuario(idUsuario);
        }
    }
}
