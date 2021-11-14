using mapa_do_bem_api.Model;
using mapa_do_bem_api.ViewModel;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public interface IUserService
    {
        Task<bool> Cadastrar(UserViewModel model);
        Task<ApplicationUser> SelecionarPorId(string id);
        Task<UserLoggedViewModel> Login(LoginViewModel model);
    }
}
