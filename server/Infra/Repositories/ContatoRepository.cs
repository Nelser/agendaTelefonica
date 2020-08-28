using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Entities;
using server.Interfaces.Repositories;

namespace server.Infra.Repositories
{
    public class ContatoRepository : IContatoRepository
    {
        private IRepository<Contato> _repository {get; set;}

        public ContatoRepository(IRepository<Contato> repository)
        {
            _repository = repository;
        }

        public async Task AdicionarContato(Contato contato)
        {
            await _repository.AddAsync(contato);
        }

        public async Task EditarContato(Contato contato)
        {
            await _repository.UpdateAsync(contato);
        }

        public async Task ExcluirContato(Contato contato)
        {
            await _repository.DeleteAsync(contato);
        }

        public async Task<IReadOnlyList<Contato>> MostrarContatos()
        {
            var list = await _repository.ShowAllAsync();
            return list.ToList();
        }
    }
}