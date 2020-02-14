using System;
using System.Globalization;

namespace TaxCalculator.UI
{
    // Responsible for producing output on the coonsole
    class OutputTaxDetails
    {
        public void OutputTaxInfo(double[] Data)
        {
            Console.Clear();
            double Sum = 0;
            Console.WriteLine("\t Slab \t\t      Tax in Rs.\n------------------------------------------------------");
            if (Data[0] != 0)
            {
                Console.WriteLine(" 2,50,000 - 5,00,000 \t\t" + Data[0].ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
                Sum += Data[0];
            }

            if (Data[1] != 0)
            {
                Console.WriteLine(" 5,00,000 - 10,00,000 \t\t" + Data[1].ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
                Sum += Data[1];
            }

            if (Data[2] != 0)
            {
                Console.WriteLine(" 10,00,000 or more \t\t" + Data[2].ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
                Sum += Data[2];
            }

            Console.WriteLine("------------------------------------------------------\n Total Tax :\t\t\t" + Sum.ToString("#,#.##", CultureInfo.CreateSpecificCulture("hi-IN")));
            Console.WriteLine("------------------------------------------------------");
            Console.WriteLine("Thank You...");
        }
    }
}
