using System;
using TaxCalculator.Infra;

namespace TaxCalculator.Business
{
    public class CalculationLogic : IBusinessLogicInterfaces
    {
        public double[] TaxCalculate(double salary, double investment)
        {
            double[] TaxValues = new double[3] {0,0,0};
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
                TaxValues[2] = (salary - 1000000) * 30 / 100;
                TaxValues[1] = 500000 * 20 / 100;
                TaxValues[0] = 250000 * 5 / 100;
            }
            else if (salary > 500000)
            {
                TaxValues[1] = (salary - 500000) * 20 / 100;
                TaxValues[0] = 250000 * 5 / 100;
            }
            else if(salary > 250000)
            {
                TaxValues[0] = (salary-250000) * 5 / 100;
            }
            return TaxValues;
        }
    }
}
