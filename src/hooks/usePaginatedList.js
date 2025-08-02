import { useState } from 'react';

function usePaginatedList(filteredData, sortItem) {
  let ITEMS_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const sortedData = [...filteredData].sort(
    (a, b) => a[sortItem] - b[sortItem]
  );
  const visibleData = sortedData.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = sortedData.length > visibleData.length;
  return { page, setPage, visibleData, hasMore };
}

export default usePaginatedList;
