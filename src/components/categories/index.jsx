const categoryArray = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categoryArray.map((cat, index) => (
          <li onClick={() => setActiveCategory(index)} className={activeCategory === index ? "active" : ""} key={cat}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
