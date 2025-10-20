#include <stdio.h>

int main()
{
    int i, n, isPrime = 1;

    printf("Enter a number : ");
    scanf("%d", &n);

    if (n < 0)
    {
        printf("Enter a Positive Number!");
        return 0;
    }

    for (i = 2; i * i <= n; i++)
    {
        if (n % i == 0)
        {
            isPrime = 0;
            break;
        }
    }

    if (isPrime)
    {
        printf("%d is Prime Number.", n);
    }
    else
    {
        printf("%d is Not a Prime Number.", n);
    }

    return 0;
}