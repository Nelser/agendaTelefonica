using System.Threading.Tasks;

namespace server.Interfaces.UnitOfWork
{
    public interface IUnitOfWork
    {   
        Task<int> SaveChangesAsync();
    }
}