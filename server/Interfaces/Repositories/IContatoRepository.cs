using System.Collections.Generic;
using System.Threading.Tasks;
using server.Entities;

namespace server.Interfaces.Repositories
{
    public interface IContatoRepository
    {
        Task AdicionarContato(Contato contato);
        Task EditarContato(Contato contato);
        Task ExcluirContato(Contato contato);
        Task<IReadOnlyList<Contato>> MostrarContatos();
    }
}