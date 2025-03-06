import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import LoginPage from "./pages/LoginPage/LoginPage";
import BookPage from "./pages/BookPage/BookPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import routes from "./config/routes";
import ApiProvider from "./api/ApiProvider";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.register} element={<RegisterPage />} />
            <Route path={routes.book} element={<BookPage />} />
            <Route path={routes.books} element={<BooksPage />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </ChakraProvider>
  );
};

export default App;
