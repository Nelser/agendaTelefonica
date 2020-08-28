using Microsoft.EntityFrameworkCore;
using server.Interfaces.Repositories;
using System.Linq;
using System.Threading.Tasks;

namespace server.Infra.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class 
    {
        private DbContext _context;
        private DbSet<TEntity> _dbset;

        public Repository(DbContext context)
        {
            _context = context;
            _dbset = context.Set<TEntity>();
        }

        public async Task AddAsync(TEntity entity)
        {
            await _context.AddAsync(entity);
        }

        public async Task DeleteAsync(TEntity entity)
        {
            _context.Remove(entity);
            await UpdateAsync(entity);
        }

        public async Task UpdateAsync(TEntity entity)
        {
            await Task.Run(() => _context.Update(entity));
        }

        public async Task<IQueryable<TEntity>> ShowAllAsync()
        {
            return await Task.Run(() => _dbset.AsQueryable());
        }
    }
}