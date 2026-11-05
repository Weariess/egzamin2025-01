using System;

namespace Egzamin
{
    public class Table
    {
        private int[] numbers;
        private int count;

        public Table(int size)
        {
            count = size;
            numbers = new int[size];
            Random random = new Random();

            for (int i = 0; i < size; i++)
            {
                numbers[i] = random.Next(1, 1001);
            }
        }

        /***********************************************
        nazwa metody: FindFirst
        opis metody: Szuka pierwszej liczby z tablicy
        parametry: value - pierwsza liczba
        zwracany typ i opis: zwraca pierwszą liczbę z tablicy (int)
        autor: <numer zdającego>
        ***********************************************/

        public int FindFirst(int value)
        {
            for (int i = 0; i < count; i++)
            {
                if (numbers[i] == value)
                {
                    return i;
                }
            }
            return -1;
        }

        /***********************************************
        nazwa metody: DisplayAndCountOdd
        opis metody: Szuka liczb nie parzystych i je liczy
        parametry: brak
        zwracany typ i opis: zwraca liczbę liczb nieparzystych (int)
        autor: <numer zdającego>
        ***********************************************/
        public int DisplayAndCountOdd()
        {
            int oddCount = 0;
            Console.Write("Liczby nieparzyste w tablicy: ");
            for (int i = 0; i < count; i++)
            {
                if (numbers[i] % 2 != 0)
                {
                    Console.Write(numbers[i] + " ");
                    oddCount++;
                }
            }
            Console.WriteLine();
            return oddCount;
        }

        /***********************************************
        nazwa metody: CalculateAverage
        opis metody: Oblicza średnią
        parametry: brak
        zwracany typ i opis: zwraca średnią (double)
        autor: <numer zdającego>
        ***********************************************/
        public double CalculateAverage()
        {
            if (count == 0) return 0.0;

            long sum = 0;
            for (int i = 0; i < count; i++)
            {
                sum += numbers[i];
            }
            return (double)sum / count;
        }

        /***********************************************
        nazwa metody: DisplayAll
        opis metody: Wyświetla zawartość tablicyt
        parametry: brak
        zwracany typ i opis: brak
        autor: <numer zdającego>
        ***********************************************/
        public void DisplayAll()
        {
            Console.WriteLine("Zawartość tablicy:");
            for (int i = 0; i < count; i++)
            {
                Console.Write(i + 1 + ": ");
                Console.WriteLine(numbers[i]);


            }
            Console.WriteLine();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Tablica\n");

            Table array = new Table(15);
            array.DisplayAll();

            Console.WriteLine("\nMetoda wyszukiwania");
            int searchValue = 500;
            int index = array.FindFirst(searchValue);
            if (index != -1)
            {
                Console.WriteLine($"Wartość {searchValue} znaleziona na indeksie: {index}");
            }
            else
            {
                
            }

            int oddTotal = array.DisplayAndCountOdd();
            Console.WriteLine($"\nLiczba elementów nieparzystych: {oddTotal}");

            double avg = array.CalculateAverage();
            Console.WriteLine($"\nŚrednia: {avg:F2}");
        }
    }
}