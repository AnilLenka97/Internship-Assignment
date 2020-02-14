using System;
using TaxCalculator.Infra;

namespace TaxCalculator.Business
{
    // The main business logic is implemented in this section and also it instanciate the interfaces here
    public class CalculationLogic : IBusinessLogicInterfaces
    {
        public double[] TaxCalculate(double salary, double investment)
        {
            double[] taxValues = new double[3] {0,0,0};
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
                taxValues[2] = (salary - 1000000) * 30 / 100;
                taxValues[1] = 500000 * 20 / 100;
                taxValues[0] = 250000 * 5 / 100;
            }
            else if (salary > 500000)
            {
                taxValues[1] = (salary - 500000) * 20 / 100;
                taxValues[0] = 250000 * 5 / 100;
            }
            else if(salary > 250000)
            {
                taxValues[0] = (salary-250000) * 5 / 100;
            }
            return taxValues;
        }
    }
}
