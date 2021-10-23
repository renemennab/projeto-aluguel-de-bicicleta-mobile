
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace mapa_do_bem_api.Model
{
    public class Coletor : ApplicationUser
    {
        [JsonIgnore]
        public ICollection<PontoDeColeta> PontosDeColeta { get; set; }
    }
}
