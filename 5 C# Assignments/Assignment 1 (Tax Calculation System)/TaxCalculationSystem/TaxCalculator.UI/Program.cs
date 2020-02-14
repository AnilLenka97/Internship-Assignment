using TaxCalculator.Business;

namespace TaxCalculator.UI
{
    class Program
    {
        static void Main(string[] args)
        {
            var Input = new InputSalaryAndInvestment();
            Input.getInput();
            
            var Calculation = new CalculationLogic();
            var TaxDetails = Calculation.TaxCalculate(Input.Salary, Input.Investment);

            var Output = new OutputTaxDetails();
            Output.OutputTaxInfo(TaxDetails);
        }
    }
}
