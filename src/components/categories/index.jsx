import { useState } from "react";

const categoryArray = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const hundleActiveCategory = (catName) => {
    setActiveCategory(catName);
  };

  return (
    <div className="categories">
      <ul>
        {categoryArray.map((cat) => (
          <li onClick={() => hundleActiveCategory(cat)} className={activeCategory === cat ? "active" : ""} key={cat}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
