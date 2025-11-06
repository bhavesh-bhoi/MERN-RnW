#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct Book
{
    int id;
    string title;
    string author;
    bool isIssued = false;
    string issuedTo = ""; // username of student who borrowed it
};

struct User
{
    string username;
    string password;
    string role; // "librarian" or "student"
};

// Predefined users
vector<User> users = {
    {"admin", "admin123", "librarian"},
    {"bhavu", "pass123", "student"},
    {"alex", "alex123", "student"}};

// In-memory book collection
vector<Book> books;

// Utility line separator
void line() { cout << "-------------------------------------------\n"; }

// Function declarations
bool login(string username, string password, string role);
void librarianMenu();
void studentMenu(string username);

// Librarian functions
void addBook();
void viewAllBooks();
void removeBook();

// Student functions
void viewAvailableBooks();
void borrowBook(string username);
void returnBook(string username);
void viewMyBooks(string username);

int main()
{
    while (true)
    {
        string username, password;
        int choice;

        cout << "=== Library Management System ===\n";
        line();
        cout << "1. Librarian Login\n2. Student Login\n3. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        string role;
        if (choice == 1)
            role = "librarian";
        else if (choice == 2)
            role = "student";
        else if (choice == 3)
        {
            cout << "Exiting...\n";
            break; // exit the while loop � program ends here
        }
        else
        {
            cout << "Invalid choice! Try again.\n";
            continue;
        }

        cout << "Enter Username: ";
        cin >> username;
        cout << "Enter Password: ";
        cin >> password;

        if (login(username, password, role))
        {
            cout << "\nLogin successful! Welcome, " << username << ".\n";
            if (role == "librarian")
                librarianMenu();
            else
                studentMenu(username);
            // After returning from menu, go back to main menu
        }
        else
        {
            cout << "Invalid credentials.\n";
        }

        // Add a friendly pause before redisplaying main menu
        cout << "\nReturning to main menu...\n\n";
    }
    return 0;
}

// Authentication
bool login(string username, string password, string role)
{
    for (auto &u : users)
        if (u.username == username && u.password == password && u.role == role)
            return true;
    return false;
}

// ---------------- Librarian Menu ----------------
void librarianMenu()
{
    int choice;
    while (true)
    {
        line();
        cout << "\n--- Librarian Menu ---\n";
        cout << "1. Add Book\n2. View All Books\n3. Remove Book\n4. Logout\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            addBook();
            break;
        case 2:
            viewAllBooks();
            break;
        case 3:
            removeBook();
            break;
        case 4:
            cout << "Logging out...\n";
            return;
        default:
            cout << "Invalid choice!\n";
        }
    }
}

void addBook()
{
    Book b;
    cout << "Enter Book ID: ";
    cin >> b.id;
    cin.ignore();
    cout << "Enter Title: ";
    getline(cin, b.title);
    cout << "Enter Author: ";
    getline(cin, b.author);
    books.push_back(b);
    cout << "Book added successfully!\n";
}

void viewAllBooks()
{
    line();
    if (books.empty())
    {
        cout << "No books in library.\n";
        return;
    }
    cout << "--- All Books ---\n";
    for (auto &b : books)
    {
        cout << "ID: " << b.id << " | " << b.title << " by " << b.author;
        cout << " | Status: " << (b.isIssued ? "Issued to " + b.issuedTo : "Available") << endl;
    }
}

void removeBook()
{
    int id;
    cout << "Enter Book ID to remove: ";
    cin >> id;
    for (size_t i = 0; i < books.size(); ++i)
    {
        if (books[i].id == id)
        {
            books.erase(books.begin() + i);
            cout << "Book removed successfully!\n";
            return;
        }
    }
    cout << "Book not found.\n";
}

// ---------------- Student Menu ----------------
void studentMenu(string username)
{
    int choice;
    while (true)
    {
        line();
        cout << "\n--- Student Menu ---\n";
        cout << "1. View Available Books\n2. Borrow Book\n3. Return Book\n4. View My Borrowed Books\n5. Logout\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            viewAvailableBooks();
            break;
        case 2:
            borrowBook(username);
            break;
        case 3:
            returnBook(username);
            break;
        case 4:
            viewMyBooks(username);
            break;
        case 5:
            cout << "Logging out...\n";
            return;
        default:
            cout << "Invalid choice!\n";
        }
    }
}

void viewAvailableBooks()
{
    line();
    cout << "--- Available Books ---\n";
    bool found = false;
    for (auto &b : books)
    {
        if (!b.isIssued)
        {
            cout << "ID: " << b.id << " | " << b.title << " by " << b.author << endl;
            found = true;
        }
    }
    if (!found)
        cout << "No available books.\n";
}

void borrowBook(string username)
{
    int id;
    cout << "Enter Book ID to borrow: ";
    cin >> id;
    for (auto &b : books)
    {
        if (b.id == id)
        {
            if (b.isIssued)
            {
                cout << "Sorry, this book is already issued to " << b.issuedTo << ".\n";
                return;
            }
            b.isIssued = true;
            b.issuedTo = username;
            cout << "You borrowed \"" << b.title << "\" successfully!\n";
            return;
        }
    }
    cout << "Book not found.\n";
}

void returnBook(string username)
{
    int id;
    cout << "Enter Book ID to return: ";
    cin >> id;
    for (auto &b : books)
    {
        if (b.id == id)
        {
            if (b.isIssued && b.issuedTo == username)
            {
                b.isIssued = false;
                b.issuedTo = "";
                cout << "Book returned successfully!\n";
                return;
            }
            else if (b.isIssued && b.issuedTo != username)
            {
                cout << "You cannot return this book. It was borrowed by " << b.issuedTo << ".\n";
                return;
            }
            else
            {
                cout << "This book is not issued currently.\n";
                return;
            }
        }
    }
    cout << "Book not found.\n";
}

void viewMyBooks(string username)
{
    line();
    cout << "--- Your Borrowed Books ---\n";
    bool found = false;
    for (auto &b : books)
    {
        if (b.issuedTo == username)
        {
            cout << "ID: " << b.id << " | " << b.title << " by " << b.author << endl;
            found = true;
        }
    }
    if (!found)
        cout << "You have not borrowed any books.\n";
}
