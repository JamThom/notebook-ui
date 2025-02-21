import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import LoginPage from "./pages/LoginPage/LoginPage";
import BookPage from "./pages/BookPage/BookPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/books/:bookId" element={<BookPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
