using System;
using TaxCalculator.Business;

namespace TaxCalculator.UI
{
    class Program
    {
        // it is the main program where the program starts
        static void Main(string[] args)
        {
            while(true)
            {
                // for input from user
                var inputObj = new InputSalaryAndInvestmentDerived();
                inputObj.GetInput();

                //for calculation of tax
                var calculation = new CalculationLogic();
                var TaxDetails = calculation.TaxCalculate(inputObj);

                //for output to the user
                var output = new OutputTaxDetails();
                output.OutputTaxInfo(TaxDetails, inputObj.salary);

                //Asking the user to calculate again or exit...
         reAskUser: Console.Write("\nFor Calculate Again, enter (Y/y) or to exit, enter (N/n) : ");
                var inputChoice = Console.ReadKey().KeyChar;
                Console.WriteLine();
                if (inputChoice == 'N' || inputChoice == 'n')
                {
                    break;
                }
                else if (inputChoice == 'Y' || inputChoice == 'y')
                {
                    Console.Clear();
                    continue;
                }
                else
                {
                    Console.WriteLine("Please Enter a valid Input...");
                    goto reAskUser;
                }
            }
        }
    }
}
