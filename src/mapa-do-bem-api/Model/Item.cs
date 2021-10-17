using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace mapa_do_bem_api.Model
{
    public class Item
    {
        public int Id { get; set; }
        public string Produto { get; set; }

        [JsonIgnore]
        public ICollection<PontoDeColeta> PontoDeColeta { get; set; }
    }
}
