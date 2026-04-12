import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { debounce } from "lodash";

import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slices/sortSlice";
import { useCallback, useRef, useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const searchValue = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const hundleDebounce = useCallback(
    debounce((e) => {
      dispatch(setSearch(e));
    }, 550),
    [],
  );

  const hundleClearInput = () => {
    dispatch(setSearch(""));
    inputRef.current.focus();
  };

  const hundleInput = (e) => {
    setValue(e);
    hundleDebounce(e);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <CiSearch className={styles.icon} />
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => hundleInput(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Введите значение"
        />
        {value !== "" ? <IoMdClose onClick={() => hundleClearInput()} className={styles.close} /> : ""}
      </div>
    </div>
  );
};

export default Search;
