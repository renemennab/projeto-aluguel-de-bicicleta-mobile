using System.ComponentModel.DataAnnotations;

namespace mapa_do_bem_api.ViewModel
{
    public class UserViewModel
    {
        [Required]
        public string Nome { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required]
        public string Senha { get; set; }
        
        [Required]
        public string Perfil { get; set; }
    }
}
