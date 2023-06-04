import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/reducers/paginationSlice";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const dispatch = useDispatch();

  const paginate = (pageNumber: number) => dispatch(setCurrentPage(pageNumber));
  return (
    <div className="pagination display-flex justify-content-center flex-wrap gap-2 mb-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          onClick={() => paginate(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};
export default Pagination;
