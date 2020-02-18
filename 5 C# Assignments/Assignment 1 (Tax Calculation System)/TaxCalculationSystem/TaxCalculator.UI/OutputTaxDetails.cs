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
            if(salary <= 250000)
            {
                Console.WriteLine(" No tax....As ur salary lies below Rs. 2,50,000\n Thank You...");
                return;
            }

            Console.WriteLine(" Slab Details : \n------------------------------------------------------");
            Console.WriteLine(" Slab 1               2,50,000 - 5,00,000");
            Console.WriteLine(" Slab 2               5,00,000 - 10,00,000");
            Console.WriteLine(" Slab 3               10,00,000 or more...\n------------------------------------------------------\n");

            Console.WriteLine("  Slab \t\t       Tax in Rs.\n------------------------------------------------------");
            var counter = 0;
            foreach(var value in taxValues)
            {
                try
                {
                    counter++;
                    if (counter == taxValues.Length)
                        Console.WriteLine("------------------------------------------------------\n Total Tax :\t\t" + value.ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
                    else if(value != 0)
                        Console.WriteLine(" Slab {0} \t\t{1}", counter, value.ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            } 
            Console.WriteLine("------------------------------------------------------");
            Console.WriteLine(" Thank You...");
        }
    }
}
