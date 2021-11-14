using mapa_do_bem_api.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public interface IEventoService
    {
        Task Cadastrar(EventoViewModel model);
        Task<Evento> SelecionarPorId(int id);
        Task Excluir(int id);
        Task Alterar(Evento evento);
        Task<IList<Evento>> SelecionarTodosPorPonto(int idPonto);
    }
}
