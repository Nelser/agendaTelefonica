using System.Linq;
using System.Threading.Tasks;

namespace server.Interfaces.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task AddAsync(TEntity entity);
        Task UpdateAsync(TEntity entity);
        Task DeleteAsync(TEntity entity);
        Task<IQueryable<TEntity>> ShowAllAsync();
    }
}