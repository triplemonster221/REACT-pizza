import ReactPaginate from "react-paginate";

import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/sortSlice";

// const currentPage = useSelector((state) => state.filter.page);

const Pagination = () => {
  const dispatch = useDispatch();

  const hundleCurrentPage = (numberPage) => {
    dispatch(setPage(numberPage));
  };

  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => hundleCurrentPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
