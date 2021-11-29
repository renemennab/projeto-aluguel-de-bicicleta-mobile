using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace mapa_do_bem_api.ViewModel
{
    public class PontoColetaViewModel
    {
        [JsonIgnore]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }
        
        [Required]
        public string Descricao { get; set; }

        [Required]
        public string Telefone { get; set; }

        [Required]
        public string Cep { get; set; }

        [Required]
        public string CidadeEstado { get; set; }

        [Required]
        public int Numero { get; set; }

        [Required]
        public decimal Latitude { get; set; }

        [Required]
        public decimal Longitude { get; set; }

        [Required]
        public string HorarioInicioFuncionamento { get; set; }

        [Required]
        public string HorarioFimFuncionamento { get; set; }

        [Required]
        public string DiasFuncionamento { get; set; }
        
        [Required]
        public ICollection<int> ItensDoacao { get; set; }

        [Required]
        public string ColetorId { get; set; }
    }
}
