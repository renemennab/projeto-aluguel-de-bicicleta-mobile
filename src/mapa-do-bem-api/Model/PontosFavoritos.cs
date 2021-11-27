using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace mapa_do_bem_api.Model
{
    public class PontosFavoritos
    {
        public int Id { get; set; }
        
        [Required]
        public int PontoId { get; set; }
        
        [Required]
        public string DoadorId { get; set; }

        public PontoDeColeta Ponto { get; set; }
        
        [JsonIgnore]
        public Doador Doador { get; set; }
    }
}
