#include <stdio.h>

int main()
{
	int n;

	int fact = 1;

	printf("Enter number : ");
	scanf("%d",&n);

	if(n >= 1) {
		for(int i = 1; i <= n; i++) {
			fact *= i;
		}
		printf("Factorial of %d is %d",n, fact);
	} else {
		printf("Enter a Valid Value to Calculate Factorial!");
	}

	return 0;
}
