import ReactPaginate from "react-paginate";

import styles from "./style.module.scss";

const Pagination = ({ setCurrentPage }) => {
  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
