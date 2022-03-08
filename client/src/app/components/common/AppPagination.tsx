import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { MetaData } from "../../models/pagination";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, totalItems, totalPages, itemsPerPage } = metaData;
  const [pageNumber, setPageNumber] = useState(currentPage);

  function handlePageChange(page: number) {
    setPageNumber(page);
    onPageChange(page);
  }

  return (
    <div className=" border-x-2 border-x-inherit px-10 text-inherit w-auto h-auto">
      {metaData && metaData.totalPages > 1 && (
        <div className="flex flex-row justify-between items-center">
          <p className="font-Oswald font-thin text-xl">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {(currentPage - 1) * itemsPerPage > totalItems
              ? totalItems
              : currentPage * itemsPerPage}{" "}
            of {totalItems} items
          </p>
          <ReactPaginate
            className="flex flex-row items-center gap-x-3 py-2 px-5 w-auto "
            forcePage={pageNumber - 1}
            pageClassName="font-thin"
            activeClassName="font-normal"
            pageLinkClassName={"p-2 font-Oswald  text-inherit text-xl"}
            breakLabel="..."
            nextLabel={<ChevronRightIcon className="h-6 w-6" />}
            onPageChange={({ selected }) => {
              console.log(selected);

              handlePageChange(selected);
            }}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            previousLabel={<ChevronLeftIcon className="h-6 w-6" />}
          />
        </div>
      )}
    </div>
  );
}
