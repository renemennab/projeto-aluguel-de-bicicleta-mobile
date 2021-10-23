using mapa_do_bem_api.Model;
using mapa_do_bem_api.ViewModel;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public interface IPontoColetaService
    {
        Task Cadastrar(PontoColetaViewModel pontoDeColeta);

        Task<PontoDeColeta> SelecionarPorId(int id);
    }
}
