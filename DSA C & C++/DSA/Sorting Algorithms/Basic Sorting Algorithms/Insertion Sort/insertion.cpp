#include <iostream>
using namespace std;

void insertionSort(int arr[], int n){
	int i, j;
	
	for(i=0;i<n-1;i++){
		int key = arr[i];
		int j = i-1;
		while(j >= 0 && arr[j]>key){
			arr[j+1] = arr[j];
			--j;
		}
		arr[j+1] = key;
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
	insertionSort(arr, n);
	cout << "Sorted Array : ";
	printArray(arr, n);
}
