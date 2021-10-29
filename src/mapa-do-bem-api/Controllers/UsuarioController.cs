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
    public class UsuarioController : ControllerBase
    {
        private readonly IUserService _service;

        public UsuarioController(IUserService service)
        {
            _service = service;
        }


        [HttpGet("{id}/meus-pontos")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> ListarTodos(string id)
        {
            return Ok(await _service.SelecionarTodosPorUsuario(id));
        }


        [HttpPost("cadastrar")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> CadastrarUsuario(UserViewModel model)
        {
            var user = await _service.Cadastrar(model);

            if (!user)
            {
                return BadRequest(new
                {
                    Message = "Dados inválidos!"
                });

            } else
            {
                return Ok();
            }
                
        }

        [HttpPost("login")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<UserLoggedViewModel>> Login(LoginViewModel loginView)
        {
            var result = await _service.Login(loginView);

            return result is not null ? Ok(result) : NotFound(new
            {
                Message = "Email ou Senha inválidos"
            });
        }

    }
}
