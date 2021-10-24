using mapa_do_bem_api.Model;
using mapa_do_bem_api.Services;
using mapa_do_bem_api.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PontoController : ControllerBase
    {
        private readonly IPontoColetaService _pontoService;

        public PontoController(IPontoColetaService pontoService)
        {
            _pontoService = pontoService;
        }

        //// GET: api/<PontoController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}


        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PontoDeColeta>> GetPonto(int id)
        {
            var result = await _pontoService.SelecionarPorId(id);

            return result is not null ? Ok(result) : NotFound();
        }

   
        [HttpPost("cadastrar")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<PontoDeColeta>> CadastrarPonto(PontoColetaViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _pontoService.Cadastrar(model);

            return Created($"/{model.Id}", model);
        }


        [HttpPut("alterar")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> AlterarPonto(PontoDeColeta ponto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _pontoService.Alterar(ponto);

            return Ok();
        }


        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> ExcluirPonto(int id)
        {
            await _pontoService.Excluir(id);
            return NoContent();
        }
    }
}
