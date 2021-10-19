using mapa_do_bem_api.Model;

namespace mapa_do_bem_api.Repository
{
    public class ItemRepository : BaseRepository<Item>, IItemRepository
    {
        public ItemRepository(ApplicationDbContext context): base(context){}
    }
}
