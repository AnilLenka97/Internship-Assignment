using TaxCalculator.Infra;

namespace TaxCalculator.Business
{
    // The main business logic is implemented in this section and also it instanciate the interfaces here
    public class CalculationLogic : IBusinessLogicInterfaces
    {
        public double[] TaxCalculate(UserInputDetails inputVal)
        {
            var salary = inputVal.salary;
            var investment = inputVal.investment;
            double[] taxValues = new double[4] {0,0,0,0};
            if (investment > 150000)
            {
                salary -= 150000;
            }
            else
            {
                salary -= investment;
            }

            if (salary > 1000000)
            {
                taxValues[2] = (salary - 1000000) * 0.3; // (30 / 100), 30% income-tax slab calculation
                taxValues[1] = 100000; // (500000 * 20 / 100), 20% income-tax slab calculation
                taxValues[0] = 12500; // (250000 * 5 / 100), 5% income-tax slab calculation
            }
            else if (salary > 500000)
            {
                taxValues[1] = (salary - 500000) * 0.2; // (20 / 100), 20% income-tax calculation
                taxValues[0] = 12500; // (250000 * 5 / 100), 5% income-tax slab calculation
            }
            else if(salary > 250000)
            {
                taxValues[0] = (salary - 250000) * 0.05; // (5 / 100), 5% income-tax slab calculation
            }
            taxValues[3] = taxValues[0] + taxValues[1] + taxValues[2];
            return taxValues;
        }
    }
}
