// #include <iostream>
// using namespace std;

// void bubbleSort(int arr[], int n){
// 	int i, j;
	
// 	for(i=0;i<n-1;i++){
// 		for(j=0;j<n-1-i;j++){
// 			if(arr[j] > arr[j+1]) {
// 				int temp = arr[j];
// 				arr[j] = arr[j+1];
// 				arr[j+1] = temp;
// 			}
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
// 	bubbleSort(arr, n);
// 	cout << "Sorted Array : ";
// 	printArray(arr, n);
// }


#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n){ // Time Complexity 0(n^2) : n log n
    for(int i = 0; i < n-1; i++){ // runs 1*n times
        bool isSwap = false;
        for(int j = 0; j < n - i - 1; j++){ // runs n*n times
            if(arr[j] > arr[j+1]){
                swap(arr[j], arr[j+1]);
                isSwap = true;
            }
        }
        if(!isSwap) {
            return;
        } // if no swap occurs, the array is already sorted
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
    
    bubbleSort(arr, n);
    printArray(arr, n);
}