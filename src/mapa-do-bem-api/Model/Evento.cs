using System.Text.Json.Serialization;

namespace mapa_do_bem_api.Model
{
    public class Evento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string DataInicio { get; set; }
        public string DataFim { get; set; }
        public int? PontoColetaId { get; set; }

        [JsonIgnore]
        public virtual PontoDeColeta PontoColeta { get; set; }
    }
}
