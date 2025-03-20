import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginRoute from "./routes/LoginRoute/LoginRoute";
import BookRoute from "./routes/BookRoute/BookRoute";
import BooksRoute from "./routes/BooksRoute/BooksRoute";
import RegisterRoute from "./routes/RegisterRoute/RegisterRoute";
import routes from "./config/routes";
import ApiProvider from "./api/ApiProvider";
import UiProvider from "./ui/Provider/Provider";
import { ModalOutput } from "./ui-hooks/useModalManager/useModalManager";

const App = () => {
  return (
    <BrowserRouter>
      <UiProvider>
        <ApiProvider>
          <ModalOutput />
          <Routes>
            <Route path={routes.login} element={<LoginRoute />} />
            <Route path={routes.register} element={<RegisterRoute />} />
            <Route path={routes.book} element={<BookRoute />} />
            <Route path={routes.books} element={<BooksRoute />} />
            <Route
              path={routes.home}
              element={<Navigate to={routes.books} />}
            />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </ApiProvider>
      </UiProvider>
    </BrowserRouter>
  );
};

export default App;
