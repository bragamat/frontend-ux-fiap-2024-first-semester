import { useState } from "react";


// {
//  onNextPage: () => {}
//  onPreviousPage: () => {}
// }
//
//
//

export function usePaginate({ onNextPage, onPreviousPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  return { currentPage, setCurrentPage }
}
