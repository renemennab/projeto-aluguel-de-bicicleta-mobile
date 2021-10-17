using mapa_do_bem_api.Model;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public UserRepository(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        public async Task<ApplicationUser> Cadastrar(ApplicationUser user, string senha)
        {           
           await _userManager.CreateAsync(user, senha);

           return user;
        }

    }
}
