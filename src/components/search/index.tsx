import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import React from "react";
import { debounce } from "lodash";

import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/sortSlice";
import { useCallback, useRef, useState } from "react";

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const hundleDebounce = useCallback(
    debounce((e: string) => {
      dispatch(setSearch(e));
    }, 550),
    [],
  );

  const hundleClearInput = () => {
    dispatch(setSearch(""));
    setValue("");
    inputRef.current?.focus();
  };

  const hundleInput = (e: string) => {
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
