﻿using mapa_do_bem_api.Model;
using mapa_do_bem_api.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public interface IUserService
    {
        Task<bool> Cadastrar(UserViewModel model);
        Task<ApplicationUser> SelecionarPorId(string id);
        Task<IList<PontoDeColeta>> SelecionarTodosPorUsuario(string idUsuario);

        //Task<ApplicationUser> Login(LoginViewModel model);
    }
}
