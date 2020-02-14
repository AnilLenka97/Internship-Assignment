using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.Infra;

namespace TaxCalculator.Business
{
    public class AddClass : IAddition
    {
        public int Add(int x, int y)
        {
            return x + y;
        }
    }
}
