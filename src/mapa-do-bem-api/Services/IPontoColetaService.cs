using mapa_do_bem_api.Model;
using mapa_do_bem_api.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public interface IPontoColetaService
    {
        Task Cadastrar(PontoColetaViewModel pontoDeColeta);

        Task<PontoDeColeta> SelecionarPorId(int id);

        Task Excluir(int id);

        Task Alterar(PontoDeColeta ponto);

        Task<IList<PontoDeColeta>> SelecionarTodos();
    }
}
