using mapa_do_bem_api.Model;

namespace mapa_do_bem_api.Repository
{
    public class PontoColetaRepository : BaseRepository<PontoDeColeta>, IPontoColetaRepository
    {
        public PontoColetaRepository(ApplicationDbContext context): base(context){}
    }
}
