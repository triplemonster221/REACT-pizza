import { useContext, useEffect, useState } from "react";

import { Categories, MyLoader, Pagination, PizzaBlock, Sort } from "../../components";
import { SearchContext } from "../../App";

const Home = () => {
  const { searchValue } = useContext(SearchContext);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({ name: "популярности", sort: "rating" });
  const [order, setOrder] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const category = activeCategory > 0 ? `&category=${activeCategory}` : "";
  const sortBy = `?sortBy=${activeSort.sort}`;
  const orderParams = order ? "desc" : "asc";
  const search = searchValue !== "" ? `&search=${searchValue}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://69b5a49e583f543fbd9c12e0.mockapi.io/items${sortBy}&limit=4&page=${currentPage}${category}&order=${orderParams}${search}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [activeCategory, sortBy, order, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={(activeCategoryCallBack) => setActiveCategory(activeCategoryCallBack)}
        />
        <Sort
          activeSort={activeSort}
          setActiveSort={(setActiveSortCallback) => setActiveSort(setActiveSortCallback)}
          order={order}
          setOrder={(setOrderCalback) => setOrder(setOrderCalback)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoading && Array.isArray(pizzas)
          ? pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          : [...new Array(10)].map((_, i) => <MyLoader key={i} />)}
      </div>
      <Pagination setCurrentPage={(page) => setCurrentPage(page)} />
    </div>
  );
};

export default Home;
