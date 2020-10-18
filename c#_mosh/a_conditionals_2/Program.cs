using System;

namespace a_conditionals_2
{
    class Program
    {
        /*2- Write a program which takes two numbers from the console and displays the maximum of the two.*/
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter a number between 0 and 100");
            var entry1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Please enter another number between 0 and 100");
            var entry2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine(entry1 > entry2 ? entry1 : entry2);
        }
    }
}
