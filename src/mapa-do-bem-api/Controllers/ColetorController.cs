using mapa_do_bem_api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColetorController : ControllerBase
    {
        private readonly IColetorService _service;

        public ColetorController(IColetorService service)
        {
            _service = service;
        }


        [HttpGet("{id}/meus-pontos")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> ListarTodos(string id)
        {
            return Ok(await _service.SelecionarTodosPorUsuario(id));
        }

    }
}
