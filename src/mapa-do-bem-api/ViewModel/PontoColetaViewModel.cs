using mapa_do_bem_api.Model;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace mapa_do_bem_api.ViewModel
{
    public class PontoColetaViewModel
    {
        [Required]
        public string Nome { get; set; }
        
        [Required]
        public string Descricao { get; set; }

        [Required]
        public string Telefone { get; set; }

        [Required]
        public string Cep { get; set; }

        [Required]
        public int Numero { get; set; }

        [Required]
        public decimal Latitude { get; set; }

        [Required]
        public decimal Longitude { get; set; }

        [Required]
        public string HorarioFuncionamento { get; set; }

        [Required]
        public string DiasFuncionamento { get; set; }
        
        [Required]
        public ICollection<Item> ItensDoacao { get; set; }

        [Required]
        public virtual Coletor Coletor { get; set; }
    }
}
