import { createBrowserRouter, RouterProvider } from "react-router";
import "./scss/app.scss";
import { Cart, Home, Layout, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "cart", Component: Cart },
      { path: "*", Component: NotFound },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
