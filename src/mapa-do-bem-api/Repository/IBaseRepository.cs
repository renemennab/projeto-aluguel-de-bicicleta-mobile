using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public interface IBaseRepository<T> where T : class
    {
        Task Incluir(T obj);
        Task<IEnumerable<T>> SelecionarTodos();
        Task<T> SelecionarPorId(int Id);
        Task Alterar(T obj);
        Task Excluir(T obj);
    }
}
