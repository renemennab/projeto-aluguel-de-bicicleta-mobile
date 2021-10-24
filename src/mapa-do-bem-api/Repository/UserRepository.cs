using mapa_do_bem_api.Model;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
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
        
        public async Task<bool> Cadastrar(ApplicationUser user, string senha)
        {           
           var retorno = await _userManager.CreateAsync(user, senha);

           return retorno.Succeeded;
        }

        public async Task<ApplicationUser> SelecionarPorId(string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            return user;
        }

    }
}
