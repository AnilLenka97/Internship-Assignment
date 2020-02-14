using System;

namespace TaxCalculator.UI
{
    public class InputSalaryAndInvestment
    {
        public double Salary = 0;
        public double Investment = 0;

        public void getInput()
        {
      
        SalaryInput : Console.Write("Enter Your Salary in Rupees : ");
            if(!double.TryParse(Console.ReadLine(), out Salary))
            {
                Console.WriteLine("**Error...Please enter valid input...");
                goto SalaryInput;
            }
            else if(Salary < 0)
            {
                Console.WriteLine("**Error...Salary can't be Negative...Try Again...");
                goto SalaryInput;
            }

        InvestmentInput: Console.Write("Enter Your 80C Investment in Rupees : ");
            if (!double.TryParse(Console.ReadLine(), out Investment))
            {
                Console.WriteLine("**Error...Please enter valid input...");
                goto InvestmentInput;
            }
            else if (Investment < 0)
            {
                Console.WriteLine("**Error...80C Investment can't be Negative...Try Again...");
                goto InvestmentInput;
            }

            if(Investment > Salary)
            {
                Console.WriteLine("**Error, Investment can't be greatr than Salary...Tray Again...");
                goto SalaryInput;
            }
        }
    }
}
