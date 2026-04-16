import React from "react";
import { Link } from "react-router";
import styles from "./styles.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className="container">
      <h1 className={styles.title}>not found</h1>
      <Link to="/" className={styles.btn}>
        Домой
      </Link>
    </div>
  );
};

export default NotFound;
