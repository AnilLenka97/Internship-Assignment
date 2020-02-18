namespace TaxCalculator.Infra
{
    // Commom Class for Passing Objects
    public class UserInputDetails
    {
        public double salary = 0;
        public double investment = 0;
    }

    //it is the interface which gives the structure to the business logic in this solution
    public interface IBusinessLogicInterfaces
    {
        double[] TaxCalculate(UserInputDetails temp);
    }

}
