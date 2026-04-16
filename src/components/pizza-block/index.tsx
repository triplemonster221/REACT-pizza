import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";
import { Link } from "react-router";
import { typesArray } from "../../data/types";
import { RootState } from "../../redux/store";
import { TPizza } from "../../types/TCartItem";

const PizzaBlock: React.FC<TPizza> = (props) => {
  const { id, category, title, types, sizes, price, rating, imageUrl, count } = props;
  const dispatch = useDispatch();
  const countCart = useSelector((state: RootState) => state.cart.items.find((item) => item.id === id));
  const addedCount = countCart ? countCart.count : 0;

  const [activeTipes, setActiveTipes] = useState(0);
  const [activeSizes, setActiveSizes] = useState(26);

  const addToCart = () => {
    const product = {
      id,
      category,
      title,
      types: typesArray[activeTipes],
      sizes: activeSizes,
      price,
      rating,
      imageUrl,
      count,
    };

    dispatch(addProduct(product));
  };

  return (
    <div className="pizza-block">
      <Link to={`pizzas/${id}`}>
        <img
          className="pizza-block__image"
          src="https://media.dodostatic.net/image/r:292x292/019c986d0e7d75e595d9b0f02bda0ed5.avif"
          alt="Pizza"
        />
      </Link>
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types &&
            types.map((_, index) => (
              <li className={activeTipes === index ? "active" : ""} onClick={() => setActiveTipes(index)} key={index}>
                {typesArray[index]}
              </li>
            ))}
        </ul>
        <ul>
          {sizes &&
            sizes.map((size) => (
              <li className={activeSizes === size ? "active" : ""} onClick={() => setActiveSizes(size)} key={size}>
                {size} см.
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button onClick={() => addToCart()} className="button button--outline button--add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount < 1 ? "" : <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
