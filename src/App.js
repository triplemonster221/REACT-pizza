import { createBrowserRouter, RouterProvider } from "react-router";
import { createContext, useState } from "react";

import "./scss/app.scss";
import { Cart, Home, Layout, NotFound } from "./pages";

export const SearchContext = createContext("");

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
  const [searchValue, setValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setValue }}>
      <RouterProvider router={router} />
    </SearchContext.Provider>
  );
}

export default App;
