#include <iostream>
using namespace std;

struct Node{
    int data;
    Node* next;
};

void insertAtEnd(Node* &head,int value) {
    Node* newNode = new Node();
    newNode -> data = value;
    newNode -> next = nullptr;

    if(head == nullptr){
        head = newNode;
    } else {
        Node* temp = head;
        while(temp -> next != nullptr){
            temp = temp -> next;
        }
        temp -> next = newNode;
    }
}

void dispList(Node* head){
    Node* temp = head;

    while(temp != nullptr){
        cout << temp -> data << "->";
        temp = temp -> next;
    }
    cout << "NULL" << endl;
}

int main(){
    Node* head = nullptr;

    insertAtEnd(head, 10);
    insertAtEnd(head, 20);
    insertAtEnd(head, 30);
    insertAtEnd(head, 40);

    dispList(head);
    
    return 0;
}