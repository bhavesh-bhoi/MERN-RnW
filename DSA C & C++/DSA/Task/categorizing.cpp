#include <iostream>
#include <vector>
using namespace std;

// Sorting Algorithms

// Selection Sort
void selectionSort(vector<int> &arr)
{
    int n = arr.size();
    for (int i = 0; i < n - 1; i++)
    {
        int minIndex = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]);
    }
}

// Merge function
void merge(vector<int> &arr, int left, int mid, int right)
{
    int n1 = mid - left + 1;
    int n2 = right - mid;

    vector<int> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k++] = L[i++];
        }
        else
        {
            arr[k++] = R[j++];
        }
    }

    while (i < n1)
        arr[k++] = L[i++];
    while (j < n2)
        arr[k++] = R[j++];
}

// Merge Sort
void mergeSort(vector<int> &arr, int left, int right)
{
    if (left < right)
    {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

// Searching Algorithms

// Linear Search
int linearSearch(const vector<int> &arr, int key)
{
    for (int i = 0; i < arr.size(); i++)
    {
        if (arr[i] == key)
            return i;
    }
    return -1;
}

// Binary Search
int binarySearch(const vector<int> &arr, int key)
{
    int left = 0, right = arr.size() - 1;
    while (left <= right)
    {
        int mid = (left + right) / 2;
        if (arr[mid] == key)
            return mid;
        else if (arr[mid] < key)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}

// Function to print array
void printArray(const vector<int> &arr)
{
    for (int num : arr)
        cout << num << " ";
    cout << endl;
}

// Function to input array
vector<int> inputArray()
{
    int n;
    cout << "Enter number of elements: ";
    cin >> n;
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    return arr;
}

// Main Menu

int main()
{
    int choice;
    do
    {
        // Display menu
        cout << "\n---- Algorithm Testing Menu ----\n";
        cout << "1. Selection Sort\n";
        cout << "2. Merge Sort\n";
        cout << "3. Linear Search\n";
        cout << "4. Binary Search\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        // Handle user choice
        switch (choice)
        {

        // Selection Sort
        case 1:
        {
            vector<int> arr = inputArray();
            selectionSort(arr);
            cout << "Sorted Array (Selection Sort): ";
            printArray(arr);
            break;
        }

        // Merge Sort
        case 2:
        {
            vector<int> arr = inputArray();
            mergeSort(arr, 0, arr.size() - 1);
            cout << "Sorted Array (Merge Sort): ";
            printArray(arr);
            break;
        }

        // Linear Search
        case 3:
        {
            vector<int> arr = inputArray();
            int key;
            cout << "Enter element to search: ";
            cin >> key;
            int result = linearSearch(arr, key);
            if (result != -1)
                cout << "Element found at index " << result << endl;
            else
                cout << "Element not found." << endl;
            break;
        }

        // Binary Search
        case 4:
        {
            vector<int> arr = inputArray();
            // Binary Search requires sorted array
            mergeSort(arr, 0, arr.size() - 1);
            cout << "Array has been sorted for Binary Search: ";
            printArray(arr);

            int key;
            cout << "Enter element to search: ";
            cin >> key;
            int result = binarySearch(arr, key);
            if (result != -1)
                cout << "Element found at index " << result << endl;
            else
                cout << "Element not found." << endl;
            break;
        }

        // Exit
        case 5:
            cout << "Exiting program. Happy Programming! Goodbye!\n";
            break;

        // Invalid choice
        default:
            cout << "Invalid choice.\n";
        }
    } while (choice != 5);

    return 0;
}