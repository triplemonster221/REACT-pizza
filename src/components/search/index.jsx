import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slices/sortSlice";

const Search = () => {
  const searchValue = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <CiSearch className={styles.icon} />
        <input
          value={searchValue}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className={styles.input}
          type="text"
          placeholder="Введите значение"
        />
        {searchValue !== "" ? <IoMdClose onClick={() => dispatch(setSearch(""))} className={styles.close} /> : ""}
      </div>
    </div>
  );
};

export default Search;
