# Notebook App

This project is a React application that serves as a notebook app, allowing users to log in, view a list of books, and edit the content of individual books. It utilizes Chakra UI for styling and React Query for data fetching.

## Features

- User authentication with a login page.
- Display a list of books fetched from an API.
- View and edit the content of individual books.

## Project Structure

```
notebook-app
├── public
│   ├── index.html        # Main HTML file
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── components        # Reusable components
│   │   ├── Book.tsx     # Component for displaying and editing a book
│   │   ├── BookList.tsx  # Component for listing all books
│   │   └── Login.tsx     # Component for user login
│   ├── pages             # Page components
│   │   ├── BookPage.tsx  # Page for viewing and editing a specific book
│   │   ├── BooksPage.tsx # Page for displaying the list of books
│   │   └── LoginPage.tsx # Page for user login
│   ├── api               # API interaction
│   │   └── booksApi.ts   # Functions for fetching books
│   ├── App.tsx           # Main application component with routing
│   ├── index.tsx         # Entry point for the React application
│   └── theme.ts          # Chakra UI theme configuration
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd notebook-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Navigate to the login page to authenticate.
- Once logged in, you can view the list of books.
- Click on a book to view and edit its content.

## Technologies Used

- React
- Chakra UI
- React Query
- React Router
- TypeScript

## License

This project is licensed under the MIT License.