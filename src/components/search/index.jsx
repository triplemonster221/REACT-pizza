import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import styles from "./style.module.scss";
import { useContext } from "react";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setValue } = useContext(SearchContext);

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <CiSearch className={styles.icon} />
        <input
          value={searchValue}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Введите значение"
        />
        {searchValue !== "" ? <IoMdClose onClick={() => setValue("")} className={styles.close} /> : ""}
      </div>
    </div>
  );
};

export default Search;
