import React from "react";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { Link, useParams } from "react-router";
import { typesArray } from "../../data/types";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";
import { TPizza } from "../../types/TCartItem";

const SinglePizza: React.FC = () => {
  const [data, setData] = useState<TPizza>();
  const [activeSizes, setActiveSizes] = useState(26);
  const [activeTypes, setActiveTypes] = useState(0);
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    async function getSinglePizza() {
      try {
        const res = await axios.get(`https://69b5a49e583f543fbd9c12e0.mockapi.io/items/${id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getSinglePizza();
  }, []);

  if (!data) {
    return (
      <div className={styles.emptyContaier}>
        <h1>Идет загрузка...</h1>
      </div>
    );
  }

  const addToCart = () => {
    const product = {
      id: data.id,
      title: data.title,
      types: typesArray[activeTypes],
      sizes: activeSizes,
      price: data.price,
      rating: data.rating,
      imageUrl: data.imageUrl,
      category: data.category,
      count: data.count,
    };
    dispatch(addProduct(product));
  };

  return (
    <div className="container">
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={data.imageUrl} alt="" />
        </div>
        <div className={styles.right}>
          <p className={styles.descp}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis itaque odio dolores magnam, provident quia cumque rerum
            perferendis, numquam veritatis dignissimos similique esse voluptatum. Ipsum placeat commodi dicta sapiente est! Dignissimos nisi
            assumenda quia odio architecto, harum ducimus. Iste quasi, iusto unde, deleniti distinctio vel voluptatibus placeat quia sed
            harum commodi ducimus consectetur! Molestias, aliquid. Earum ex ad sequi quo! Aperiam est illo, ea quis repellat incidunt ab
            nemo similique reprehenderit necessitatibus illum, quisquam, pariatur eaque enim minima ut exercitationem optio temporibus
            facilis sit. Saepe molestias illum hic aut sint.
          </p>
          <div className="pizza-block__selector">
            <ul>
              {typesArray.map((type, index) => (
                <li onClick={() => setActiveTypes(index)} key={type} className={activeTypes === index ? "active" : ""}>
                  {type}
                </li>
              ))}
            </ul>
            <ul>
              {data.sizes.map((size) => (
                <li onClick={() => setActiveSizes(size)} className={activeSizes === size ? "active" : ""} key={size}>
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightBottom}>
            <button onClick={() => addToCart()} className={styles.addToCart}>
              Добавить в корзину
            </button>
            <h4 className={styles.price}>{data.price} руб.</h4>
          </div>
        </div>
      </div>

      <Link to="/">
        <span className={styles.btn}>Вернуться в каталог</span>
      </Link>
    </div>
  );
};

export default SinglePizza;
