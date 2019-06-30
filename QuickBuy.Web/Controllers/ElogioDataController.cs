using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[controller]")]
    public class ElogioDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Linda", "Gostosa", "Tesao", "Doida"
        };

        [HttpGet("[action]")]
        public IEnumerable<Elogios> ElogiosMetodo()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Elogios
            {
                Descricao = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class Elogios
        {
            public string Descricao { get; set; }
        }
    }
}
