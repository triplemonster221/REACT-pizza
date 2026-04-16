import React from "react";
import { useEffect, useRef } from "react";
import qs from "qs";

import { Categories, MyLoader, Pagination, PizzaBlock, Sort } from "../../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setFilters } from "../../redux/slices/sortSlice";
import { sortArray } from "../../components/sort";
import { fetchPizzasArray } from "../../redux/slices/pizzaSlice";
import { RootState, useAppDispatch } from "../../redux/store";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { category, sortArray2, order, search, page } = useSelector((state: RootState) => state.filter);
  const { pizzasArray, status } = useSelector((state: RootState) => state.pizzas);

  const categoryParam = category > 0 ? `&category=${category}` : "";
  const sortBy = `?sortBy=${sortArray2.sort}`;
  const orderParams = order ? "desc" : "asc";
  const searchParam = search !== "" ? `&search=${search}` : "";

  const fetchPizzas = () => {
    dispatch(
      fetchPizzasArray({
        categoryParam,
        sortBy,
        orderParams,
        searchParam,
        page: String(page),
      }),
    );
  };

  // уже был первый рендер и теперь вшиваем данные в url
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortBy: sortArray2.sort,
        category: category,
        page: page,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sortArray2, page]);

  //если был первый рендер, сохраняем в редуксе
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortArray.find((obj) => {
        return obj.sort === params.sortBy;
      });

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );

      isSearch.current = true;
    }
  }, []);

  // Запрашиваем пиццы
  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }
    window.scroll(0, 0);
    isSearch.current = false;
  }, [category, sortArray2, order, search, page]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status !== "loading" && Array.isArray(pizzasArray)
          ? pizzasArray.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          : [...new Array(4)].map((_, i) => <MyLoader key={i} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
