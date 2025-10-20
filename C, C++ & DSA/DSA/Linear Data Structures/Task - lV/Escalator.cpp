#include <iostream>
using namespace std;

class Stack {
private:
    int *arr;
    int cap;
    int topIndex;

public:
    // Constructor
    Stack(int size) {
        cap = size;
        arr = new int[cap];
        topIndex = -1;
    }

    // Destructor
    ~Stack() {
        delete[] arr;
    }

    // Push an element
    void push(int value) {
        if (isFull()) {
            cout << "Stack Overflow! Cannot push " << value << "." << endl;
            return;
        }
        arr[++topIndex] = value;
        cout << "Pushed " << value << " into stack." << endl;
    }

    // Pop an element
    void pop() {
        if (isEmpty()) {
            cout << "Stack Underflow! Nothing to pop." << endl;
            return;
        }
        cout << "Popped " << arr[topIndex--] << " from stack." << endl;
    }

    // Return top element
    int top() {
        if (isEmpty()) {
            cout << "Stack is empty. No top element." << endl;
            return -1;
        }
        return arr[topIndex];
    }

    // Check if stack is empty
    bool isEmpty() {
        return (topIndex == -1);
    }

    // Check if stack is full
    bool isFull() {
        return (topIndex == cap - 1);
    }

    // Display stack
    void display() {
        if (isEmpty()) {
            cout << "Stack is empty." << endl;
            return;
        }
        cout << "Stack (top to bottom): ";
        for (int i = topIndex; i >= 0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    int size;
    cout << "Enter stack size: ";
    cin >> size;

    Stack s(size);
    int choice, value;
    
	// Menu
    do {
        cout << "\n==== Stack Menu ====" << endl;
        cout << "1. Push an element" << endl;
        cout << "2. Pop an element" << endl;
        cout << "3. Display top element" << endl;
        cout << "4. Check if stack is empty" << endl;
        cout << "5. Check if stack is full" << endl;
        cout << "6. Display stack" << endl;
        cout << "0. Exit" << endl;
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value: ";
                cin >> value;
                s.push(value);
                break;
            case 2:
                s.pop();
                break;
            case 3:
                cout << "Top element: " << s.top() << endl;
                break;
            case 4:
                cout << (s.isEmpty() ? "Stack is empty." : "Stack is not empty.") << endl;
                break;
            case 5:
                cout << (s.isFull() ? "Stack is full." : "Stack is not full.") << endl;
                break;
            case 6:
                s.display();
                break;
            case 0:
                cout << "Exiting program..." << endl;
                break;
            default:
                cout << "Invalid choice, try again." << endl;
        }
    } while (choice != 0);

    return 0;
}

