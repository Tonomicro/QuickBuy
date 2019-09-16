using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickbuyContexto quickbuyContexto) : base(quickbuyContexto)
        {
        }

        public Usuario Obter(string email, string senha)
        {
            return QuickbuyContexto.Usuarios.FirstOrDefault(f => f.Email == email && f.Senha == senha);
        }

        public Usuario Obter(string email)
        {
            return QuickbuyContexto.Usuarios.FirstOrDefault(f => f.Email == email);
        }
    }
}
