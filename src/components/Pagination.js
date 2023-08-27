import React from "react";

function Pagination(props) {
    const { pageNum, onNext, onPrev } = props;
    return (
      <nav aria-label="Page navigation m-2">
      <ul className="pagination justify-content-center">
        <li className="page-item "><span className="page-link"   onClick={onPrev}>Previous</span></li>
        <li className="page-item"><span className="page-link">{pageNum}</span></li>
        <li className="page-item"><span className="page-link"  onClick={onNext}>Next</span></li>
      </ul>
    </nav>
    );
  }

export default Pagination;
