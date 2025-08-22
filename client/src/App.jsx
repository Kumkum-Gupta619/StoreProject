import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./component/layout/AppLayout";
import NotFoundPage from "./component/NotFoundPage";
import Home from "./component/pages/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import StoreList from "./component/pages/Stores";
import StoreDetails from "./component/StoreDetails";

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
      {
        path: "/stores/:id",
        element: <StoreDetails />
      }

    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
