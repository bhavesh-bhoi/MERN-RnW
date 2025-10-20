#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int> arr, int target){
    for(int i = 0; i < static_cast<int>(arr.size()); i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

void printArray(int arr[], int n) {
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {12, 31, 35, 8, 32, 17};
    int target = 32;

    // Show the array
    for (int val : arr) {
        cout << val << " ";
    }
    cout << endl;

    // Linear search
    int idx = linearSearch(arr, target);
    if (idx != -1) {
        cout << "Found " << target << " at index " << idx << endl;
    } else {
        cout << target << " not found" << endl;
    }

    return 0;
}
