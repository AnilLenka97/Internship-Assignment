using TaxCalculator.Business;

namespace TaxCalculator.UI
{
    class Program
    {
        // it is the main program where the program starts
        static void Main(string[] args)
        {
            // for input from user
            var input = new InputSalaryAndInvestment();
            input.getInput();
            //for calculation of tax
            var calculation = new CalculationLogic();
            var TaxDetails = calculation.TaxCalculate(input.salary, input.investment);
            //for output to the user
            var output = new OutputTaxDetails();
            output.OutputTaxInfo(TaxDetails);
        }
    }
}
