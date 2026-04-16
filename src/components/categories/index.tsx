import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/sortSlice";
import { RootState } from "../../redux/store";

const categoryArray = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories: React.FC = memo(() => {
  const activeCategory = useSelector((state: RootState) => state.filter.category);
  const dispatch = useDispatch();

  const hundleActiveCategory = useCallback((categotyId: number) => {
    dispatch(setCategory(categotyId));
  }, []);

  return (
    <div className="categories">
      <ul>
        {categoryArray.map((cat, index) => (
          <li onClick={() => hundleActiveCategory(index)} className={activeCategory === index ? "active" : ""} key={cat}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
