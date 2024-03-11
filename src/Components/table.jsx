import React, { useState } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
import SingleReport from "./viewModal";

const Table = ({ data, pagination = true , alignedRight }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(pagination ? 5 : data.length);
  const[showModal, setShowModal]=useState(false)
  const [singleData, setSingleData]=useState(null)

  // Calculate indexes for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const nextPage = () => {
    if (indexOfLastRow < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle click on 'View'
  const onViewClick = (fileDetails) => {
setSingleData(fileDetails)
setShowModal(true)
  };


  //Comma separation Amount Function

function formatAmountWithCommas(amount) {
    // Convert the number to a string and split it into parts
    const parts = String(amount).split('.');
    
    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{2})+(?!\d))/g, ',');

    // If there's no decimal part, add .00
    if (parts.length === 1) {
        return parts[0] + '.00';
    } else {
        // If there's a decimal part, ensure it's formatted with two digits
        parts[1] = parts[1].padEnd(2, '0').slice(0, 2);
        return parts.join('.');
    }
}

const isAmountOrBalanceKey = (key) => {
  return /Amount|balance/i.test(key);
};

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      <div className="ml-auto flex gap-4">
        <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <PrinterIcon className="w-4 h-4 " />
          Print
        </button>
        <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <ArrowDownTrayIcon className="w-4 h-4" />
          Export
        </button>
      </div>
      <div className="w-full overflow-y-auto styleScroll pb-2">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(currentRows[0]).map((key, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {currentRows.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(item).map(([key, value], cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-2 py-4 text-xs ${
                      value === "View"
                        ? "text-blue-500 cursor-pointer "
                        : "text-gray-900 "
                    }${cellIndex > alignedRight ? "text-right" : "text-left"} ${isAmountOrBalanceKey(key) ? "text-right" : ""}`}
        
                    onClick={() => {
                      if (value === "View") onViewClick(item);
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div>
          <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white py-4"
            aria-label="Pagination"
          >
            <div className="block">
              <p className="text-left text-xs text-gray-700">
                Showing <span className="font-medium">{currentPage}</span> of{" "}
                <span className="font-medium">
                  {Math.ceil(data.length / rowsPerPage)}
                </span>{" "}
                pages
              </p>
            </div>
            <div className="flex  justify-between sm:justify-end">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={indexOfLastRow >= data.length}
                className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      )}


      <SingleReport  open={showModal} setOpen={setShowModal} data={singleData}/>
    </div>
  );
};

export default Table;
