using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace mapa_do_bem_api.Model
{
    public class EventoViewModel
    {
        [JsonIgnore]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public string DataInicio { get; set; }
        [Required]
        public string DataFim { get; set; }
        [Required]
        public int PontoColetaId { get; set; }
    }
}
