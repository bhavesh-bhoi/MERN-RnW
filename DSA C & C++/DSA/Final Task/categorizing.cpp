#include <iostream>
using namespace std;

// Linked List

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;
public:
    LinkedList() : head(nullptr) {}

    void insertAtEnd(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next) temp = temp->next;
        temp->next = newNode;
    }

    void insertAtBeginning(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }

    void deleteByValue(int val) {
        if (!head) return;
        if (head->data == val) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }
        Node* temp = head;
        while (temp->next && temp->next->data != val)
            temp = temp->next;
        if (temp->next) {
            Node* del = temp->next;
            temp->next = temp->next->next;
            delete del;
        } else cout << "Value not found!\n";
    }

    void display() {
        if (!head) {
            cout << "List is empty.\n";
            return;
        }
        Node* temp = head;
        cout << "Linked List: ";
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL\n";
    }
};

// Merge Sort Implementation

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2)
        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];

    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

// Quick Sort Implementation

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Binary Search Implementation

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key)
            return mid;
        else if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

// Utility Functions

void displayArray(int arr[], int n) {
    cout << "Array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << "\n";
}

// Main Menu

int main() {
    LinkedList list;
    int choice;

    do {
        cout << "\n---------- MAIN MENU ----------\n";
        cout << "1. Linked List Operations\n";
        cout << "2. Sorting Algorithms (Merge/Quick)\n";
        cout << "3. Binary Search\n";
        cout << "4. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {

        // Linked List Menu
        case 1: {
            int subChoice, val;
            do {
                cout << "\n--- Linked List Menu ---\n";
                cout << "1. Insert at Beginning\n";
                cout << "2. Insert at End\n";
                cout << "3. Delete by Value\n";
                cout << "4. Display\n";
                cout << "5. Back to Main Menu\n";
                cout << "Enter choice: ";
                cin >> subChoice;

                switch (subChoice) {
                case 1:
                    cout << "Enter value: "; cin >> val;
                    list.insertAtBeginning(val);
                    break;
                case 2:
                    cout << "Enter value: "; cin >> val;
                    list.insertAtEnd(val);
                    break;
                case 3:
                    cout << "Enter value to delete: "; cin >> val;
                    list.deleteByValue(val);
                    break;
                case 4:
                    list.display();
                    break;
                }
            } while (subChoice != 5);
            break;
        }

        // Sorting Algorithms Menu
        case 2: {
            int n;
            cout << "Enter number of elements: ";
            cin >> n;
            int arr[n];
            cout << "Enter elements: ";
            for (int i = 0; i < n; i++) cin >> arr[i];

            cout << "\n1. Merge Sort\n2. Quick Sort\nEnter choice: ";
            int sortChoice; cin >> sortChoice;
            if (sortChoice == 1) mergeSort(arr, 0, n - 1);
            else quickSort(arr, 0, n - 1);

            cout << "Sorted Array:\n";
            displayArray(arr, n);
            break;
        }

        // Binary Search Menu
        case 3: {
            int n, key;
            cout << "Enter number of elements (sorted array): ";
            cin >> n;
            int arr[n];
            cout << "Enter elements (sorted): ";
            for (int i = 0; i < n; i++) cin >> arr[i];
            cout << "Enter value to search: ";
            cin >> key;

            int result = binarySearch(arr, n, key);
            if (result != -1)
                cout << "Element found at index: " << result << endl;
            else
                cout << "Element not found.\n";
            break;
        }

        // Exit
        case 4:
            cout << "Exiting program. Goodbye!\n";
            break;
        default:
            cout << "Invalid choice. Try again.\n";
        }
    } while (choice != 4);

    return 0;
}