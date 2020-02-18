namespace TaxCalculator.Infra
{
    // Parent Class of InputSalaryAndInvestmentDerived Class
    public class InputSalaryAndInvestment
    {
        public double salary = 0;
        public double investment = 0;
        // virtual meethod to override in child classes
        public virtual void GetInput()
        {
        }
    }

    //it is the interface which gives the structure to the business logic in this solution
    public interface IBusinessLogicInterfaces
    {
        double[] TaxCalculate(InputSalaryAndInvestment temp);
    }

}
