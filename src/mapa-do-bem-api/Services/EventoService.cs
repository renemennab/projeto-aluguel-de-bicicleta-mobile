using mapa_do_bem_api.Model;
using mapa_do_bem_api.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public class EventoService : IEventoService
    {
        private readonly IEventoRepository _repository;

        public EventoService(IEventoRepository repository)
        {
            _repository = repository;
        }

        public async Task Alterar(Evento evento)
        {
            Evento eventoAntigo = await _repository.SelecionarPorId(evento.Id);

            eventoAntigo.Nome = evento.Nome is not null ? evento.Nome : eventoAntigo.Nome;
            eventoAntigo.Descricao = evento.Descricao is not null ? evento.Descricao : eventoAntigo.Descricao;
            eventoAntigo.DataInicio = evento.DataInicio is not null ? evento.DataInicio : eventoAntigo.DataInicio;
            eventoAntigo.DataFim = evento.DataFim is not null ? evento.DataFim : eventoAntigo.DataFim;

            await _repository.Alterar(eventoAntigo);
        }

        public async Task Cadastrar(EventoViewModel model)
        {
            var evento = new Evento
            {
                Nome = model.Nome,
                Descricao = model.Descricao,
                DataInicio = model.DataInicio,
                DataFim = model.DataFim,
                PontoColetaId = model.PontoColetaId
            };

            await _repository.Incluir(evento);
        }

        public async Task Excluir(int id)
        {
            var evento = await _repository.SelecionarPorId(id);

            await _repository.Excluir(evento);
        }

        public async Task<Evento> SelecionarPorId(int id)
        {
            return await _repository.SelecionarPorId(id);
        }

        public async Task<IList<Evento>> SelecionarTodosPorPonto(int idPonto)
        {
            return await _repository.SelecionarTodosPorPonto(idPonto);
        }
    }
}