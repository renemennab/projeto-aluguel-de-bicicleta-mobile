using mapa_do_bem_api.Model;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Repository
{
    public interface IPontoColetaRepository : IBaseRepository<PontoDeColeta>
    {
       new Task<PontoDeColeta> SelecionarPorId(int id);
    }
}
