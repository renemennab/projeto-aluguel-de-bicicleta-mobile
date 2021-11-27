using mapa_do_bem_api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoadorController : ControllerBase
    {
        private readonly IDoadorService _service;

        public DoadorController(IDoadorService service)
        {
            _service = service;
        }

        [HttpGet("{id}/pontos-favoritos")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> ListarPontosFavoritos(string id)
        {
            return Ok(await _service.ListarPontosFavoritos(id));
        }

        [HttpPost("{id}/add-favorito/{pontoId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> AddPontoFavorito(string id, int pontoId)
        {
            await _service.AddPontoFavorito(id, pontoId);
            return Ok();
        }

        [HttpDelete("{id}/remove-favorito/{pontoId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> RemovePontoFavorito(string id, int pontoId)
        {
            await _service.RemoverPontoFavorito(id, pontoId);
            return Ok();
        }
    }
}
