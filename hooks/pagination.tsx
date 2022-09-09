import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

 interface Props {
    currentPage: number;
    totalPages: number;
    handleNextPage: (page: number) => void;
    handlePrevPage: (page: number) => void;
  }
  
const Pagination:React.FC <Props>= ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="pagination-button-wrapper" style={{ padding: '1em', width: '50%', margin: 'auto' }}>
      <Button
        variant="primary"
        className="pagination-button"
        aria-label="Goto previous page"
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}
      >
       <BsFillCaretLeftFill />
      </Button>

      <span className="pagination-page-info" style={{}}>
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="primary"
        className="pagination-button"
        aria-label="Goto next page"
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPages}
      >
       <BsFillCaretRightFill />
      </Button>
    </div>
  );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePrevPage: PropTypes.func.isRequired,
    handleNextPage: PropTypes.func.isRequired,
  };

export default Pagination