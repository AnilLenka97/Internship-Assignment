using System;
using TaxCalculator.Infra;

namespace TaxCalculator.UI
{
    // It is resposible for input from user and validates the user inputs
    public class InputSalaryAndInvestment
    {
        public double Validate(string label)
        {
            double inputValue;
            Console.Write("Please enter your {0} : ", label);

            if (!double.TryParse(Console.ReadLine(), out inputValue))
            {
                Console.WriteLine("**Error...Please enter valid input...");
                Validate(label);
            }

            else if (inputValue < 0)
            {
                Console.WriteLine("**Error...The {0} can't be Negative...", label);
                Validate(label);
            }

            return inputValue;
        }

        public UserInputDetails GetInput()
        {
            var salary = Validate("Salary");
            var investment = Validate("80C Investment");

            if (investment > salary)
            {
                Console.WriteLine("**Error, Investment can't be greatr than Salary...Tray Again...");
                GetInput();
            }

            return new UserInputDetails { investment = investment, salary = salary };
        }
    }
}
