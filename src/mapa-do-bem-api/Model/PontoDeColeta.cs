﻿using System.Collections.Generic;


namespace mapa_do_bem_api.Model
{
    public class PontoDeColeta
    {
        public PontoDeColeta()
        {
            this.ItensDoacao = new HashSet<Item>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Telefone { get; set; }
        public string Cep { get; set; }
        public int Numero { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string HorarioFuncionamento { get; set; }
        public string DiasFuncionamento { get; set; }
        public ICollection<Item> ItensDoacao { get; set; }
       
        public virtual Coletor Coletor { get; set; }
        //Eventos
        
    }
}
