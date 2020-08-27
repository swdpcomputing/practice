import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Paginate = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) {
    return null;
  } // No pages component if all items on one page
  const pages = _.range(1, pagesCount + 1); // Lodash - Create range of numbers

  return (
    <nav
      className="mt-2"
      style={{ cursor: "pointer" }}
    >
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            onClick={() => onPageChange(page)}
          >
            <button className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

//Typechecking with PropTypes
Paginate.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
//PropTypes
export default Paginate;
