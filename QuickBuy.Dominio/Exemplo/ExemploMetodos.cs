namespace QuickBuy.Dominio.Exemplo
{
    public class ExemploMetodos
    {
        public int ValorA { get; set; }
        public int ValorB { get; set; }
        public decimal ValorCalculado { get; set; }


        public void Operacao()
        {
            ValorCalculado = ValorA + ValorB;
            ValorCalculado = ValorA - ValorB;
            ValorCalculado = ValorA / ValorB;
            ValorCalculado = ValorA * ValorB;

            ValorCalculado = Calculadora(ValorA, ValorB, "/");
        }

        public decimal Calculadora(int a, int b, string simboloDaOperacao)
        {
            decimal resultadoCalculado = 0;

            switch (simboloDaOperacao)
            {
                case "+":
                    resultadoCalculado = a + b;
                    break;
                case "-":
                    resultadoCalculado = a - b;
                    break;
                case "/":
                    resultadoCalculado = a / b;
                    break;
                case "*":
                    resultadoCalculado = a * b;
                    break;
                default:
                    
                    break;
            }
            
            return resultadoCalculado;
        }
    }

   
}
