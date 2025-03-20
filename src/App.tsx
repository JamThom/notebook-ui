import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import theme from "./theme";
import LoginRoute from "./routes/LoginRoute/LoginRoute";
import BookRoute from "./routes/BookRoute/BookRoute";
import BooksRoute from "./routes/BooksRoute/BooksRoute";
import RegisterRoute from "./routes/RegisterRoute/RegisterRoute";
import routes from "./config/routes";
import ApiProvider from "./api/ApiProvider";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path={routes.login} element={<LoginRoute />} />
            <Route path={routes.register} element={<RegisterRoute />} />
            <Route path={routes.book} element={<BookRoute />} />
            <Route path={routes.books} element={<BooksRoute />} />
            <Route path={routes.home} element={<Navigate to={routes.books} />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </ChakraProvider>
  );
};

export default App;
