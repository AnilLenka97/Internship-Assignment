namespace TaxCalculator.Infra
{
    public interface IBusinessLogicInterfaces
    {
        //it is the interface which gives the structure to the business logic in this solution
        double[] TaxCalculate(double salary, double investment);
    }
}
