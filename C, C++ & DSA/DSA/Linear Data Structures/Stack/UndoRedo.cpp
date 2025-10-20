#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
	stack<string> undoStack, redoStack;

	int choice;

	string Action;

	while(true) {
		cout << "1.Draw \n 2.Undo \n 3.Redo \n 4.History \n 5.Exit \n Choose : ";
		cin >> choice;

		switch(choice) {
		case 1 :
			cout << "Enter Action (Eg. Draw Line, Draw Circle) : ";
			cin.ignore();
			getline(cin, Action);
			undoStack.push(Action);

			while(!redoStack.empty()) {
				redoStack.pop();
			}

			cout << "Action Performed :" << Action << endl;
			break;

		// Case 2
		case 2 :
			if(!undoStack.empty()) {
				redoStack.push(undoStack.top());
				cout << "Undo : " << undoStack.top() << endl;
				undoStack.pop();
			} else {
				cout << "Nothing to Undo!";
			}
			break;

		case 3 :
			if(!redoStack.empty()) {
				undoStack.push(redoStack.top());
				cout << "Redo : " << redoStack.top() << endl;
				redoStack.pop();
			} else {
				cout << "Nothing to Redo!";
			}
			break;

		case 4 :
            if(undoStack.empty()) {
                cout << "undoStack is Empty!" << endl;
            } else {
                stack<string> temp = undoStack;
                while(!temp.empty()) {
                    cout << "History : \n - " << temp.top() << endl;
                    temp.pop();
                }
            }
            break;

		case 5 :
			cout << "Exited Program..." << endl;
			return 0;

		default :
			cout << "Please Enter Valid choice!" << endl;
		}
	}
}
