#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main() {
    queue<string> undoQueue, redoQueue;

    int choice;
    string Action;

    while(true) {
        cout << "1.Draw \n2.Undo \n3.Redo \n4.History \n5.Exit \nChoose : ";
        cin >> choice;

        switch(choice) {
        case 1:
            cout << "Enter Action (Eg. Draw Line, Draw Circle): ";
            cin.ignore();
            getline(cin, Action);
            undoQueue.push(Action);

            // Clear redoQueue
            while(!redoQueue.empty()) {
                redoQueue.pop();
            }

            cout << "Action Performed: " << Action << endl;
            break;

        case 2:
            if(!undoQueue.empty()) {
                redoQueue.push(undoQueue.back()); // store last action
                cout << "Undo: " << undoQueue.back() << endl;

                // remove last element (trick: use a temp queue)
                queue<string> temp;
                while(undoQueue.size() > 1) {
                    temp.push(undoQueue.front());
                    undoQueue.pop();
                }
                undoQueue.pop(); // remove last
                undoQueue = temp;
            } else {
                cout << "Nothing to Undo!" << endl;
            }
            break;

        case 3:
            if(!redoQueue.empty()) {
                string lastRedo = redoQueue.back();
                undoQueue.push(lastRedo);
                cout << "Redo: " << lastRedo << endl;

                // remove last from redoQueue
                queue<string> temp;
                while(redoQueue.size() > 1) {
                    temp.push(redoQueue.front());
                    redoQueue.pop();
                }
                redoQueue.pop();
                redoQueue = temp;
            } else {
                cout << "Nothing to Redo!" << endl;
            }
            break;

        case 4:
            if(undoQueue.empty()) {
                cout << "undoQueue is Empty!" << endl;
            } else {
                queue<string> temp = undoQueue;
                cout << "History:" << endl;
                while(!temp.empty()) {
                    cout << " - " << temp.front() << endl;
                    temp.pop();
                }
            }
            break;

        case 5:
            cout << "Exited Program..." << endl;
            return 0;

        default:
            cout << "Please Enter Valid choice!" << endl;
        }
    }
}
