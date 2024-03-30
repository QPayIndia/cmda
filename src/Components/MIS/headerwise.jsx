import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
import React from "react";

const MISHeader = () => {
  const data = [
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Budget Header": "Scrutiny Fees",
      "Applicant Name": "Karpagam",
      "Challan No": "CMDA/0004/2024",
      "File No": "RE/GR-II/09/07/0019",
      "Transaction id": "CMDA_16098",
      "Zone": "Panchayat Union",
      "Project Name": "Planning Clearance for Pohys Building",
      "Status": "Not Paid",
      "Total fees (INR)": 3000.00,
      "Penal Interest (INR)": 500.00,
      "Total Balance": 3500.00
    },
    {
      "Action": "View",
      "Date": "10-03-2024",
      "Budget Header": "Scrutiny Fees",
      "Applicant Name": "Dugar Housing Limited",
      "Challan No": "CMDA/0007/2024",
      "File No": "RE/GR-II/09/07/019",
      "Transaction id": "CMDA_16099",
      "Zone": "Municipality",
      "Project Name": "DUGAR Housing",
      "Status": "Paid",
      "Total fees (INR)": 3000.00,
      "Penal Interest (INR)": 0.00,
      "Total Balance": 0.00
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Budget Header": "Scrutiny Fees",
      "Applicant Name": "Dugar Housing Limited",
      "Challan No": "CMDA/0008/2024",
      "File No": "RE/GR-II/09/07/1091",
      "Transaction id": "CMDA_16100",
      "Zone": "Municipality",
      "Project Name": "Layout Refusal",
      "Status": "Not Paid",
      "Total fees (INR)": 3000.00,
      "Penal Interest (INR)": 0.00,
      "Total Balance": 3000.00
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Budget Header": "Scrutiny Fees",
      "Applicant Name": "Karpagam",
      "Challan No": "CMDA/0009/2024",
      "File No": "RE/GR-II/09/07/213",
      "Transaction id": "CMDA_16101",
      "Zone": "2 Zone",
      "Project Name": "Site Approval",
      "Status": "Paid",
      "Total fees (INR)": 3000.00,
      "Penal Interest (INR)": 0.00,
      "Total Balance": 0.00
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Budget Header": "Scrutiny Fees",
      "Applicant Name": "Indian Builders",
      "Challan No": "CMDA/0014/2024",
      "File No": "RE/GR-II/09/07/029",
      "Transaction id": "CMDA_16108",
      "Zone": "Town Panchayat",
      "Project Name": "Reclassification",
      "Status": "Not Paid",
      "Total fees (INR)": 3000.00,
      "Penal Interest (INR)": 0.00,
      "Total Balance": 3000.00
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

const dropDown = [
    { name: 'Development charges for land per Sq.m.', value: 'development_charges_land' },
    { name: 'Development charges for Building per Sq.m.', value: 'development_charges_building' },
    { name: 'Regulation Charge for land', value: 'regulation_charge_land' },
    { name: 'Security Deposit for building', value: 'security_deposit_building' },
    { name: 'Security Deposit for Display Board', value: 'security_deposit_display_board' },
    { name: 'IDC - CMWSSB(For sewered area only)', value: 'idc_cmwssb_sewered_area' },
    { name: 'I & A Charge', value: 'i_a_charge' },
    { name: 'OSR Charges', value: 'osr_charges' },
    { name: 'Premium FSI Charges', value: 'premium_fsi_charges' },
    { name: 'Flag Day Charge', value: 'flag_day_charge' },
    { name: 'Caution Deposit', value: 'caution_deposit' },
    { name: 'Balance Scrutiny Fees', value: 'balance_scrutiny_fees' },
    { name: 'SD - STP', value: 'sd_stp' },
    { name: 'Advertisement Charges', value: 'advertisement_charges' },
    { name: 'Shelter fee', value: 'shelter_fee' }
  ];

  const totalData = [
    "Total",
    15000.00,
    500.00,
    9500.00
];

  return (

    <div className='flex flex-col gap-4'>
    <h1 className="text-xl font-medium ">Headerwise Reports</h1>
<div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
  <div className="w-full flex flex-col sm:flex-row gap-4 ">
    <div className="w-full sm:w-[50%]">
      <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
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
      <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
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
    <label htmlFor="local-body" className="block text-sm font-medium text-gray-700">
Header
    </label>
    <div className="mt-1">
      <select
        id="local-body"
        name="local-body"
        className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
      >
                  {dropDown?.map((item, index) => (
<option key={index} value={item.value} className='whitespace-normal'>{item.name} </option>
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
                <td colSpan={9}></td>
                
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

export default MISHeader;
