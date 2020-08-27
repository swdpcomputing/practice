using System;

namespace a_conditionals_1
{
    class Program
    {
        static void Main(string[] args)
        {
            /*1- Write a program and ask the user to enter a number. 
            The number should be between 1 to 10. 
            If the user enters a valid number, display "Valid" on the console. 
            Otherwise, display "Invalid".*/

            Console.WriteLine("Please enter a number betweet 1 and 10");
            var userInput = Convert.ToInt32 (Console.ReadLine());
            if (userInput > 0 && userInput < 11)
            {
                Console.WriteLine("Valid");
            } else
            {
                Console.WriteLine("Invalid");
            };
        }
    }
}
