import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./scss/app.scss";
import { Cart, Home, Layout, NotFound, SinglePizza } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "cart", Component: Cart },
      { path: "pizzas/:id", Component: SinglePizza },
      { path: "*", Component: NotFound },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
