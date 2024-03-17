import React from "react";
import Table from "./table";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";

const FileList = () => {
  const data=[
    {
      "Action": "View",
      "File No": "RE/GR-II/09/07/009",
      "Developer/ Applicant Name": "Karpagam",
      "Village": "Sembarambakkam",
      "District": "Thiruvallur",
      "Local Body Name": "GCC",
      "Type of Application": "Planning Permission",
      "Proposal Type": "Layout",
      "Total Fees (INR)": 50000,
      "Total Penalty (INR)": 2000,
      "Total Fees Paid (INR)": 40000,
      "Total Penalty Paid (INR)": 0,
      "Balance Fees (INR)": 10000,
      "Balance Penalty (INR)": 2000,
      "Balance to be paid(INR)": 12000
    },
    {
      "Action": "View",
      "File No": "RE/GR-II/09/07/019",
      "Developer/ Applicant Name": "DUGAR HOUSING LIMITED",
      "Village": "Ramapuram",
      "District": "Chennai",
      "Local Body Name": "Aminjikarai",
      "Type of Application": "Completion Certificate",
      "Proposal Type": "Site Approva;",
      "Total Fees (INR)": 12300,
      "Total Penalty (INR)": 0,
      "Total Fees Paid (INR)": 12300,
      "Total Penalty Paid (INR)": 0,
      "Balance Fees (INR)": 0,
      "Balance Penalty (INR)": 0,
      "Balance to be paid(INR)": 0
    },
    {
      "Action": "View",
      "File No": "RE/GR-II/09/07/109",
      "Developer/ Applicant Name": "Kushee",
      "Village": "Mundram Kattalai",
      "District": "Kancheepuram",
      "Local Body Name": "Tiruvottiyur",
      "Type of Application": "Planning Clearance",
      "Proposal Type": "Reclassification",
      "Total Fees (INR)": 6000,
      "Total Penalty (INR)": 0,
      "Total Fees Paid (INR)": 4000,
      "Total Penalty Paid (INR)": 0,
      "Balance Fees (INR)": 2000,
      "Balance Penalty (INR)": 0,
      "Balance to be paid(INR)": 2000
    },
    {
      "Action": "View",
      "File No": "RE/GR-II/09/07/213",
      "Developer/ Applicant Name": "Karpagam",
      "Village": "Hasthinapuram",
      "District": "Chengalpattu",
      "Local Body Name": "Guindy",
      "Type of Application": "Completion Certificate",
      "Proposal Type": "Building",
      "Total Fees (INR)": 12200,
      "Total Penalty (INR)": 500,
      "Total Fees Paid (INR)": 12200,
      "Total Penalty Paid (INR)": 500,
      "Balance Fees (INR)": 0,
      "Balance Penalty (INR)": 0,
      "Balance to be paid(INR)": 0
    },
    {
      "Action": "View",
      "File No": "RE/GR-II/09/07/029",
      "Developer/ Applicant Name": "Indian Builders",
      "Village": "Thiruneermalai",
      "District": "Chengalpattu",
      "Local Body Name": "Sholinganallur",
      "Type of Application": "Planning Clearance",
      "Proposal Type": "Sub Devision",
      "Total Fees (INR)": 43000,
      "Total Penalty (INR)": 5000,
      "Total Fees Paid (INR)": 43000,
      "Total Penalty Paid (INR)": 5000,
      "Balance Fees (INR)": 0,
      "Balance Penalty (INR)": 0,
      "Balance to be paid(INR)": 0
    }
  ]
  
  
  function formatAmountWithCommas(amount) {
    // Convert the number to a floating-point number
    const number = parseFloat(amount);

    // If the number is not a valid number, return it as is
    if (isNaN(number)) {
        return amount;
    }

    // Format the number with thousand separators
    const formattedNumber = number.toLocaleString("en-IN", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });

    // If the original number has no decimal part, append .00
    if (formattedNumber.indexOf('.') === -1) {
        return formattedNumber + '.00';
    }

    return formattedNumber;
}

const totalData = [
  "Total",
  123500,
  7500,
  111500,
  5500,
  12000,
  2000,
  14000
];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">File List</h1>
  
      <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
        <p>File Submission Date</p>
        <div className="w-full flex flex-col sm:flex-row gap-4 ">
          <div className="w-full sm:w-[50%]">
            <label
              htmlFor="from-date"
              className="block text-sm font-medium text-gray-700"
            >
              From Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                id="from-date"
                name="from-date"
                className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%]">
            <label
              htmlFor="to-date"
              className="block text-sm font-medium text-gray-700"
            >
              To Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                id="to-date"
                name="to-date"
                className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
              />
            </div>
          </div>
        </div>

        <div className=" flex gap-4">
          <button className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Submit
          </button>
          <button className="bg-white border text-sm shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Clear
          </button>
        </div>
      </div>
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
              {Object.keys(data[0]).map((key, index) => (
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
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(item).map(([key, value], cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-2 py-4 text-xs ${
                      value === "View"
                        ? "text-blue-500 cursor-pointer "
                        : "text-gray-900 "
                    } ${!isNaN(value) ? "text-right" : ""}`}
        
                   
                  >
                    {!isNaN(value) ? formatAmountWithCommas(value) : value}
                  </td>

                ))}
             
              </tr>

            ))}
            <tr>  
                <td colSpan={7}></td>
                
                {totalData?.map((item,index)=>{

                return <td key={index}    className={`px-2 py-4 text-xs  ${!isNaN(item) ? "text-right" : ""}`}>{!isNaN(item) ? formatAmountWithCommas(item) : item}</td>
               })}</tr>
          </tbody>
        </table>
    </div>
    

    </div>
    </div>
  );
};

export default FileList;
