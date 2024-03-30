import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
import React from "react";

const MISDistrict = () => {
  const data = [
    [
      "View",
      "RE/GR-II/09/07/0091",
      "Thiruvallur",
      "Sembarambakkam",
      "Karpagam",

      "GCC",
      "Planning Permission",
      "Layout",
      3000.0,
      500.0,
      3500.0,
      14000.0,
      0.0,
      14000.0,
      53000.0,
      0.0,
      53000.0,
      256000.0,
      0.0,
      256000.0,
      10000.0,
      0.0,
      10000.0,
      297000.0,
      0.0,
      297000.0,
      390000.0,
      0.0,
      390000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      500.0,
      0.0,
      500.0,
      0.0,
      0.0,
      0.0,
      2000.0,
      0.0,
      2000.0,
      0.0,
      0.0,
      0.0,
      1000.0,  0.0,  1000.0,
      1027000,
    ],
    [
      "View",
      "RE/GR-II/09/07/019",

      "Chennai",
      "Ramapuram",
      "Dugar Housing Limited",
      "Aminjikarai",
      "Completion Certificate",
      "Site Approval",
      5000.0,
      3000.0,
      0.0,
      19000.0,
      1000.0,
      20000.0,
      70000.0,
      10000.0,
      80000.0,
      300000.0,
      20000.0,
      320000.0,
      20000.0,
      1000.0,
      21000.0,
      400000.0,
      0.0,
      400000.0,
      500000.0,
      0.0,
      500000.0,
      0.0,
      0.0,
      0.0,
      1000.0,
      0.0,
      1000.0,
      500.0,
      0.0,
      500.0,
      0.0,
      0.0,
      0.0,
      2000.0,
      0.0,
      2000.0,
      3000.0,
      0.0,
      3000.0,
      2000.0,  0.0,  2000.0,
      1349500,
    ],
    [
      "View",
      "RE/GR-II/09/07/1091",

      "Kancheepuram",
      "Mundram Kattalai",
      "Kushee",
      "Tiruvottiyur",
      "Planning Clearance",
      "Reclassification",
      8000.0,
      0.0,
      8000.0,
      25000.0,
      0.0,
      25000.0,
      65000.0,
      0.0,
      65000.0,
      18000.0,
      0.0,
      18000.0,
      30000.0,
      0.0,
      30000.0,
      25000.0,
      0.0,
      25000.0,
      400000.0,
      0.0,
      400000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      4000.0,
      0.0,
      4000.0,
      2000.0,
      0.0,
      2000.0,
      3000.0,
      0.0,
      3000.0,
      1000.0,
      0.0,
      1000.0,
      581000,
    ],
    [
      "View",
      "RE/GR-II/09/07/2131",
      "Chengalpattu",
      "Hasthinapuram",
      "Karpagam",
      "Guindy",
      "Completion Certificate",
      "Building",
      10000.0,
      0.0,
      10000.0,
      35000.0,
      0.0,
      35000.0,
      75000.0,
      0.0,
      75000.0,
      22000.0,
      0.0,
      22000.0,
      40000.0,
      0.0,
      40000.0,
      30000.0,
      0.0,
      30000.0,
      700000.0,
      0.0,
      700000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      6000.0,
      0.0,
      6000.0,
      2000.0,
      0.0,
      2000.0,
      3000.0,
      0.0,
      3000.0,
      3000.0,
      0.0,
      3000.0,
      926000,
    ],
  ];

  const TotalData = [
    "Total",
    26000.0,
    3500.0,
    21500.0,
    93000.0,
    1000.0,
    94000.0,
    263000.0,
    10000.0,
    273000.0,
    596000.0,
    20000.0,
    616000.0,
    100000.0,
    1000.0,
    101000.0,
    752000.0,
    0.0,
    752000.0,
    1990000.0,
    0.0,
    1990000.0,
    0.0,
    0.0,
    0.0,
    1000.0,
    0.0,
    1000.0,
    1000.0,
    0.0,
    1000.0,
    10000.0,
    0.0,
    10000.0,
    8000.0,
    0.0,
    8000.0,
    9000.0,
    0.0,
    9000.0,
    7000.0,  0.0,  7000.0,
    3883500
  ];

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
      minimumFractionDigits: 2,
    });

    // If the original number has no decimal part, append .00
    if (formattedNumber.indexOf(".") === -1) {
      return formattedNumber + ".00";
    }

    return formattedNumber;
  }

  const dropDown = [
    { name: "Chennai", value: "chennai" },
    { name: "Thiruvallur", value: "thiruvallur" },
    { name: "Kancheepuram", value: "kancheepuram" },
    { name: "Chengalpattu", value: "chengalpattu" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">Districtwise Reports</h1>
      <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
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

        <div>
          <label
            htmlFor="local-body"
            className="block text-sm font-medium text-gray-700"
          >
           District
          </label>
          <div className="mt-1">
            <select
              id="local-body"
              name="local-body"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            >
              {dropDown?.map((item, index) => (
                <option
                  key={index}
                  value={item.value}
                  className="whitespace-normal"
                >
                  {item.name}{" "}
                </option>
              ))}
            </select>
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
            <thead className="bg-gray-50 ">
              <tr>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  Action
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  File No
                </th>
          
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  District
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  Village
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  Applicant Name
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  Local Body Name
                </th>
                

                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  Type of Application
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  Proposal Type
                </th>

                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Development charges for land Sq.m.
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Development charges for Building per Sq.m.
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Requlation Charge for land
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Security Deposit for building
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Security Deposit for Display Board
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  IDC - CMWSSB(For sewered area only)
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  I & A Charge
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  OSR Charges
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Premium FSI Charges
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Flag Day Charge
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Caution Deposit
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Balance Scrutiny Fees
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  SD - STP
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  colSpan="3"
                >
                  Shelter fee
                </th>
                <th
                  className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                  rowSpan="2"
                >
                  Total Balance (INR)
                </th>
              </tr>
              <tr>
                {[...Array(14)].map((_, index) => (
                  <React.Fragment key={index}>
                    <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
                      Total fees (INR)
                    </th>
                    <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
                      Penal Interest (INR)
                    </th>
                    <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
                      Total Balance
                    </th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data?.map((rowData, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {rowData?.map((item, itemIndex) => {
                      return (
                        <td
                          className={`px-2 py-4 text-xs ${
                            item === "View"
                              ? "text-blue-500 cursor-pointer "
                              : "text-gray-900 "
                          } ${!isNaN(item) ? "text-right" : ""}`}
                          key={itemIndex}
                        >
                          {!isNaN(item) ? formatAmountWithCommas(item) : item}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              <tr></tr>
              <tr>
                <td colSpan={7}></td>
                {TotalData?.map((data, index) => {
                  return (
                    <td
                      className={`px-2 py-4 text-xs text-gray-900 ${
                        !isNaN(data) ? "text-right" : ""
                      }`}
                      key={index}
                    >
                      {!isNaN(data) ? formatAmountWithCommas(data) : data}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MISDistrict;
