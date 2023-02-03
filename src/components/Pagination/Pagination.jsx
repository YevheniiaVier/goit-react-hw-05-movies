// import shortid from 'shortid';
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
    siblingCount = 1,
    currentPage,
    totalPagesCount,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPagesCount,
  });

  console.log(currentPage);

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
      <PaginationItem
        className={currentPage === 1 && 'disabled'}
        onClick={onPrevious}
      >
        <ArrowLeft key={'left'} />
      </PaginationItem>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <PaginationItem>&#8230;</PaginationItem>;
        }

        return (
          <PaginationItem
            className={pageNumber === currentPage && 'selected'}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        className={currentPage === lastPage && 'disabled'}
        onClick={onNext}
      >
        <ArrowRight key={'right'} />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
