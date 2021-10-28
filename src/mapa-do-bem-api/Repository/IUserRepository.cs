using mapa_do_bem_api.Model;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public interface IUserRepository 
    {
        Task<bool> Cadastrar(ApplicationUser user, string senha);

        Task<ApplicationUser> SelecionarPorId(string id);

        Task<ApplicationUser> Login(string email, string senha);

    }
}
