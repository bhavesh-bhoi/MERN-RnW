// #include <iostream>
// using namespace std;

// void insertionSort(int arr[], int n){
// 	int i, j;
	
// 	for(i=0;i<n-1;i++){
// 		int key = arr[i];
// 		int j = i-1;
// 		while(j >= 0 && arr[j]>key){
// 			arr[j+1] = arr[j];
// 			--j;
// 		}
// 		arr[j+1] = key;
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
// 	insertionSort(arr, n);
// 	cout << "Sorted Array : ";
// 	printArray(arr, n);
// }

#include <iostream>
using namespace std;

void insertionSort(int arr[], int n){ // O(n^2)
    for(int i=1; i<n; i++){
        int curr = arr[i];
        int prev = i-1;
        
        while(prev >= 0 && arr[prev] > curr){
            arr[prev+1] = arr[prev];
            prev--;
        }
        
        arr[prev+1] = curr; // placing current element in it's correct position
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
    
    insertionSort(arr, n);
    printArray(arr, n);
}