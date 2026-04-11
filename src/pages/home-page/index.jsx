import { useEffect, useState } from "react";

import { Categories, MyLoader, Pagination, PizzaBlock, Sort } from "../../components";
import { useSelector } from "react-redux";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  // const [currentPage, setCurrentPage] = useState(1);

  const activeCategory = useSelector((state) => state.filter.category);
  const activeSort = useSelector((state) => state.filter.sortArray);
  const activeOrder = useSelector((state) => state.filter.order);
  const searchValue = useSelector((state) => state.filter.search);
  const currentPage = useSelector((state) => state.filter.page);

  const category = activeCategory > 0 ? `&category=${activeCategory}` : "";
  const sortBy = `?sortBy=${activeSort.sort}`;
  const orderParams = activeOrder ? "desc" : "asc";
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
  }, [activeCategory, activeSort, activeOrder, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoading && Array.isArray(pizzas)
          ? pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          : [...new Array(10)].map((_, i) => <MyLoader key={i} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
