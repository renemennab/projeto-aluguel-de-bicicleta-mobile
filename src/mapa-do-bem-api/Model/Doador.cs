using System.Collections.Generic;

namespace mapa_do_bem_api.Model
{
    public class Doador : ApplicationUser
    {
        public Doador()
        {
            this.PontosFavoritos = new List<PontosFavoritos>();
        }
        public IList<PontosFavoritos> PontosFavoritos { get; set; }
    }
}
