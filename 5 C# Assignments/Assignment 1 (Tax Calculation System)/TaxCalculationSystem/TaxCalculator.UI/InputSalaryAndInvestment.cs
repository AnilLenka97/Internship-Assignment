using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxCalculator.UI
{
    class InputSalaryAndInvestment
    {
        public void getInput()
        {
            SalaryInput : Console.WriteLine("Enter Your Salary in Rupees : ");
            double Salary;
            if(!double.TryParse(Console.ReadLine(), out Salary))
            {
                Console.WriteLine("**Error...Please enter valid input...");
                goto SalaryInput;
            }

        InvestmentInput: Console.WriteLine("Enter Your 80C Investment in Rupees : ");
            double Investment;
            if (!double.TryParse(Console.ReadLine(), out Investment))
            {
                Console.WriteLine("**Error...Please enter valid input...");
                goto InvestmentInput;
            }
            
        }
    }
}
