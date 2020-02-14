using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.Business;

namespace TaxCalculator.UI
{
    class Program
    {
        static void Main(string[] args)
        {
            var testClass = new AddClass();
            var Input = new InputSalaryAndInvestment();
            Input.getInput();
            Console.WriteLine(testClass.Add(20, 30));
        }
    }
}
