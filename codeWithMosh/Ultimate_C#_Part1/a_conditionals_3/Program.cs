using System;

namespace a_conditionals_3
{
    class Program
    {
        /*3- Write a program and ask the user to enter the width and height of an image.
        Then tell if the image is landscape or portrait.*/

        static void Main(string[] args)
        {
            Console.WriteLine("Please enter the width of an image");
            var width = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Please enter the height the image");
            var height = Convert.ToInt32(Console.ReadLine());

            var pOrL = width > height ? "landscape" : "portrait";
            Console.WriteLine("Your image is {0}.", pOrL);
        }
    }
}
