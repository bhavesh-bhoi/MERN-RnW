// #include <iostream>
// using namespace std;

// void selectionSort(int arr[], int n){
// 	int i, j;
	
// 	for(i=0;i<n-1;i++){
// 		int minIndex = i;
// 		int j = i-1;
// 		for(int j=i+1;j<n;j++){
// 			if(arr[j] < arr[minIndex]){
// 				minIndex = j;
// 			}
// 		}
// 		if(minIndex != i){
// 			swap(arr[i],arr[minIndex]);
// 		}
// 	}
// }

// void printArray(int arr[], int n){
// 	int i;
// 	for(i=0;i<n;i++){
// 		cout << arr[i] << " ";
// 	}
// 	cout << endl;
// }

// int main() {
// 	int arr[] = {55, 23, 06, 13, 01, 200, 543, 19};
// 	int n = sizeof(arr)/sizeof(arr[0]);
// 	cout << "Origional Array : ";
// 	printArray(arr, n);
// 	selectionSort(arr, n);
// 	cout << "Sorted Array : ";
// 	printArray(arr, n);
// }

#include <iostream>
using namespace std;

void selectionSort(int arr[], int n){
    for(int i=0; i < n-1; i++){
        int smallestIndex = i; // Unsorted part of starting index
        for(int j=i+1; j<n; j++){
            if(arr[j] < arr[smallestIndex]){
                smallestIndex = j;
            }
        }
        swap(arr[i], arr[smallestIndex]);
    }
}

void printArray(int arr[], int n){
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int n = 8;
    int arr[] = {23, 67, 45, 2, 51, 9, 1, 72};
    
    selectionSort(arr, n);
    printArray(arr, n);
}