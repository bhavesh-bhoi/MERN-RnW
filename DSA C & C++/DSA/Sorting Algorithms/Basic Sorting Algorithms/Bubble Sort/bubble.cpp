#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n){
	int i, j;
	
	for(i=0;i<n-1;i++){
		for(j=0;j<n-1-i;j++){
			if(arr[j] > arr[j+1]) {
				int temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
}

void printArray(int arr[], int n){
	int i;
	for(i=0;i<n;i++){
		cout << arr[i] << " ";
	}
	cout << endl;
}

int main() {
	int arr[] = {55, 23, 06, 13, 01, 200, 543, 19};
	int n = sizeof(arr)/sizeof(arr[0]);
	cout << "Origional Array : ";
	printArray(arr, n);
	bubbleSort(arr, n);
	cout << "Sorted Array : ";
	printArray(arr, n);
}
