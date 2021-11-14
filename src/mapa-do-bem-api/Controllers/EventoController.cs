using mapa_do_bem_api.Model;
using mapa_do_bem_api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventoController : ControllerBase
    {
        private readonly IEventoService _service;

        public EventoController(IEventoService eventoService)
        {
            _service = eventoService;
        }


        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Evento>> GetEvento(int id)
        {
            var result = await _service.SelecionarPorId(id);

            return result is not null ? Ok(result) : NotFound();
        }

        [HttpPost("cadastrar")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Evento>> CadastrarEvento(EventoViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _service.Cadastrar(model);

            return Created($"/{model.Id}", model);
        }

        [HttpPut("alterar")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> AlterarEvento(Evento evento)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _service.Alterar(evento);

            return Ok();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> ExcluirEvento(int id)
        {
            await _service.Excluir(id);
            return NoContent();
        }


        [HttpGet("{idPonto}/eventos-ponto")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> ListarTodos(int idPonto)
        {
            return Ok(await _service.SelecionarTodosPorPonto(idPonto));
        }

    }
}
