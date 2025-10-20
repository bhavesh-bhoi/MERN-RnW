#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int> arr, int target)
{
    int left = 0, right = arr.size() - 1;

    while (left <= right)
    {
        int mid = (left + right) / 2;

        if (arr[mid] == target)
        {
            return mid;
        }
        else if (arr[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    return -1;
}

int main()
{
    vector<int> arr = {11, 12, 13, 14, 15, 16};
    cout << "Array : ";

    for (int x : arr)
    {
        cout << x << " ";
    }

    int target;
    cout << "Enter the number to search : ";
    cin >> target;

    int result = binarySearch(arr, target);
    if (result != -1)
    {
        cout << "Found " << target << " at index " << result << endl;
    }
    else
    {
        cout << target << " not found" << endl;
    }

    return 0;
}