using System;
using System.Globalization;

namespace TaxCalculator.UI
{
    // Responsible for producing output on the coonsole
    class OutputTaxDetails
    {
        public void OutputTaxInfo(double[] taxValues, double salary)
        {
            Console.Clear();
            double Sum = 0;
            if(salary <= 250000)
            {
                Console.WriteLine(" No tax....As ur salary lies below Rs. 2,50,000\n Thank You...");
                return;
            }

            Console.WriteLine("\t Slab \t\t       Tax in Rs.\n------------------------------------------------------");
            if (taxValues[0] != 0)
            {
                Console.WriteLine(" 2,50,000 - 5,00,000 \t\t" + taxValues[0].ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
                Sum += taxValues[0];
            }

            if (taxValues[1] != 0)
            {
                Console.WriteLine(" 5,00,000 - 10,00,000 \t\t" + taxValues[1].ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
                Sum += taxValues[1];
            }

            if (taxValues[2] != 0)
            {
                Console.WriteLine(" 10,00,000 or more \t\t" + taxValues[2].ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
                Sum += taxValues[2];
            }

            Console.WriteLine("------------------------------------------------------\n Total Tax :\t\t\t" + Sum.ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
            Console.WriteLine("------------------------------------------------------");
            Console.WriteLine("Thank You...");
        }
    }
}
