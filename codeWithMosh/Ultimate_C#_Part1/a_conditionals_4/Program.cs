using System;
using System.Collections.Concurrent;

namespace a_conditionals_4
{
    class Program
    {
        /*Your job is to write a program for a speed camera. 
        Write a program that asks the user to enter the speed limit. 
        Once set, the program asks for the speed of a car. 
        If the user enters a value less than the speed limit, program should display Ok on the console. 
        If the value is above the speed limit, the program should calculate the number of demerit points. 
        For every 5km/hr above the speed limit, 1 demerit points should be incurred and displayed on the console. 
        If the number of demerit points is above 12, the program should display License Suspended.*/
        
        static void calculateDemeritPoints(int speedLimit, int speed)
        {
            var excess = speed - speedLimit;
            var numDemerits = excess / 5;
            
            if (numDemerits > 12)
            {
                Console.WriteLine("You have exceeded your demerits. Your license is suspended");
            } else
            {
                Console.WriteLine("You have received {0} demerits.", numDemerits);
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter a speed limit in kph");
            var speedLimit = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Please enter the speed of the car");
            var speed = Convert.ToInt32(Console.ReadLine());

            if (speed < speedLimit)
            {
                Console.WriteLine("Your speed is OK");
            } else
            {
                calculateDemeritPoints(speedLimit, speed);
            }
        }
    }
}
