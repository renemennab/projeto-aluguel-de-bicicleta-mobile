using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using mapa_do_bem_api.ViewModel;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<ApplicationUser> Cadastrar(UserViewModel model)
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
    }
}
