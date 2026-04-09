import { useEffect, useState } from "react";
import Categories from "./components/categories";
import Header from "./components/header";
import PizzaBlock from "./components/pizza-block";
import Sort from "./components/sort";
import "./scss/app.scss";
import MyLoader from "./components/skeleton";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    fetch("https://69b5a49e583f543fbd9c12e0.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setIsLoading(!isLoading);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {!isLoading
              ? pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
              : [...new Array(10)].map((_, i) => <MyLoader key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
