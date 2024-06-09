import React from "react";
import ReactPaginate from "react-paginate";
import "../../App.css";

// Pagination component to render pagination controls
function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      // Total number of pages
      pageCount={pageCount}
      // Callback function invoked when page is changed
      onPageChange={onPageChange}
      // CSS class applied to the pagination container
      containerClassName={"pagination"}
      // CSS class applied to the active page
      activeClassName={"active"}
      pageLinkClassName={"btn btn-primary ms-1"}
      previousLinkClassName={"btn btn-secondary"}
      nextLinkClassName={"btn btn-secondary ms-1"}
    />
  );
}

export default Pagination;
