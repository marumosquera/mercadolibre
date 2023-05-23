import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../styles/Pagination.scss";

export const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination-list">
        {currentPage > 1 && (
          <a onClick={() => paginate(currentPage - 1)}>
            <IoIosArrowBack />
          </a>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {console.log("num", currentPage === number)}
            <a
              onClick={() => paginate(number)}
              className={`${
                currentPage === number ? "active-page" : "inactive-page"
              }`}
            >
              {number}
            </a>
          </li>
        ))}
        {currentPage < totalProducts / productsPerPage && (
          <a onClick={() => paginate(currentPage + 1)}>
            <IoIosArrowForward />
          </a>
        )}
      </ul>
    </nav>
  );
};
