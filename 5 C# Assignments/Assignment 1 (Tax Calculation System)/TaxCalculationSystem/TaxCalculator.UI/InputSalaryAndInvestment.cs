using System;

namespace TaxCalculator.UI
{
    // It is resposible for input from user and validates the user inputs
    public class InputSalaryAndInvestment
    {
        public double salary = 0;
        public double investment = 0;

        public void getInput()
        {
      
        SalaryInput : Console.Write("Enter Your Salary in Rupees : ");
            if(!double.TryParse(Console.ReadLine(), out salary))
            {
                Console.WriteLine("**Error...Please enter valid input...");
                goto SalaryInput;
            }
            else if(salary < 0)
            {
                Console.WriteLine("**Error...Salary can't be Negative...Try Again...");
                goto SalaryInput;
            }

        InvestmentInput: Console.Write("Enter Your 80C Investment in Rupees : ");
            if (!double.TryParse(Console.ReadLine(), out investment))
            {
                Console.WriteLine("**Error...Please enter valid input...");
                goto InvestmentInput;
            }
            else if (investment < 0)
            {
                Console.WriteLine("**Error...80C Investment can't be Negative...Try Again...");
                goto InvestmentInput;
            }

            if(investment > salary)
            {
                Console.WriteLine("**Error, Investment can't be greatr than Salary...Tray Again...");
                goto SalaryInput;
            }
        }
    }
}
