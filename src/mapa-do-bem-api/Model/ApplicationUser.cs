using Microsoft.AspNetCore.Identity;

namespace mapa_do_bem_api.Model
{
    public class ApplicationUser : IdentityUser
    {
        public string Nome { get; set; }
        public string Perfil { get; set; }
    }
}
