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

        //// GET api/<PontoController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // TODO: Mudar tipo retorno RepositorioBase
        // POST api/<PontoController>
        [HttpPost("cadastrar")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task CadastrarPonto(PontoColetaViewModel model, string coletorId)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest(ModelState);

            await _pontoService.Cadastrar(model, coletorId);

            //return Created($"{ponto.Id}", ponto);
        }

        //// PUT api/<PontoController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<PontoController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
