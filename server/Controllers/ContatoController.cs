using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.DTO;
using server.Entities;
using server.Interfaces.Repositories;
using server.Interfaces.UnitOfWork;

namespace server.Controllers
{
    [ApiController]
    [Route("api/")]
    public class ContatoController : ControllerBase
    {
        private IContatoRepository _repository;
        private IUnitOfWork _uow;
        
        public ContatoController(IContatoRepository repository, IUnitOfWork uow)
        {
            _repository = repository;
            _uow = uow;
        }

        [HttpGet]
        public async Task<IList> MostrarContatos()
        {
            var query = await _repository.MostrarContatos();
            return query.ToList();
        }

        [HttpPost("add")]
        public async Task<IActionResult> CriarContato([FromBody] ContatoDTO dto)
        {
            Contato contato = new Contato(dto.Nome, dto.Numero, dto.Email);
            await _repository.AdicionarContato(contato);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("edit/{id}")]
        public async Task<IActionResult> EditarContato([FromRoute] int id, [FromBody] ContatoDTO dto)
        {
            Contato contato = new Contato(id, dto.Nome, dto.Numero, dto.Email);
            await _repository.EditarContato(contato);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> ExcluirContato([FromRoute] int id)
        {
            Contato contato = new Contato(id);
            await _repository.ExcluirContato(contato);
            await _uow.SaveChangesAsync();
            return Ok();
        }
    }
}