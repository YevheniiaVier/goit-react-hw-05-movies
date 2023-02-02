import { usePagination, DOTS } from 'usePagination';
import {
  PaginationItem,
  PaginationContainer,
  ArrowLeft,
  ArrowRight,
} from './Pagination.styled';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      <PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
        <ArrowLeft />
      </PaginationItem>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <PaginationItem>&#8230;</PaginationItem>;
        }

        return (
          <PaginationItem
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <ArrowRight />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
