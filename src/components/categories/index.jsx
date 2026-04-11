import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/sortSlice";

const categoryArray = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = () => {
  const activeCategory = useSelector((state) => state.filter.category);
  const dispatch = useDispatch();

  const hundleActiveCategory = (categotyId) => {
    dispatch(setCategory(categotyId));
  };

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
};

export default Categories;
