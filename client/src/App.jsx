import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./component/layout/AppLayout";
import NotFoundPage from "./component/NotFoundPage";
import Home from "./component/pages/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import StoreList from "./component/pages/Stores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/stores",
        element: <StoreList />,
      },

    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
