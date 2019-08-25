using System.Collections.Generic;
using System.Linq;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;

namespace QuickBuy.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {
        protected  readonly QuickbuyContexto QuickbuyContexto;

        public BaseRepositorio(QuickbuyContexto quickbuyContexto)
        {
            QuickbuyContexto = quickbuyContexto;
        }

        public void Adicionar(TEntity entity)
        {
            QuickbuyContexto.Set<TEntity>().Add(entity);
            QuickbuyContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            QuickbuyContexto.Set<TEntity>().Update(entity);
            QuickbuyContexto.SaveChanges();
        }
        
        public TEntity ObterPorId(int id)
        {
            return QuickbuyContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return QuickbuyContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            QuickbuyContexto.Remove(entity);
            QuickbuyContexto.SaveChanges(); 
        }

        public void Dispose()
        {
            QuickbuyContexto.Dispose();
        }
    }
}
