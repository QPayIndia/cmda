import React from "react";
import Table from "./table";

const FileDetails = () => {
    
  const budgetData=[
    {
      "Budget Header": "Development charges for land Sq.m.",
      "Total Fees (INR)": 3000.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 3000.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "Development charges for Building per Sq.m.",
      "Total Fees (INR)": 14000.00,
      "Total Penalty (INR)": 1000.00,
      "Total Fees Paid (INR)": 0.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 14000.00,
      "Balance Penalty (INR)": 1000.00,
      "Total Balance (INR)": 15000.00
    },
    {
      "Budget Header": "Requlation Charge for land",
      "Total Fees (INR)": 53000.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 53000.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "Security Deposit for building",
      "Total Fees (INR)": 256000.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 0.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 256000.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 256000.00
    },
    {
      "Budget Header": "Security Deposit for Display Board",
      "Total Fees (INR)": 10000.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 10000.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 10000.00
    },
    {
      "Budget Header": "IDC - CMWSSB(For sewered area only)",
      "Total Fees (INR)": 297000.00,
      "Total Penalty (INR)": 10000.00,
      "Total Fees Paid (INR)": 297000.00,
      "Total Penalty Paid (INR)": 10000.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "I & A Charge",
      "Total Fees (INR)": 390000.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 390000.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "OSR Charges",
      "Total Fees (INR)": 0.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 0.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "Premium FSI Charges",
      "Total Fees (INR)": 0.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 0.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "Flag Day Charge",
      "Total Fees (INR)": 500.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 500.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "Caution Deposit",
      "Total Fees (INR)": 0.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 0.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "Balance Scrutiny Fees",
      "Total Fees (INR)": 2000.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 0.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 2000.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 2000.00
    },
    {
      "Budget Header": "SD - STP",
      "Total Fees (INR)": 0.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 0.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "Shelter fee",
      "Total Fees (INR)": 0.00,
      "Total Penalty (INR)": 0.00,
      "Total Fees Paid (INR)": 0.00,
      "Total Penalty Paid (INR)": 0.00,
      "Balance Fees (INR)": 0.00,
      "Balance Penalty (INR)": 0.00,
      "Total Balance (INR)": 0.00
    },
    {
      "Budget Header": "Total",
      "Total Fees (INR)": 1025500.00,
      "Total Penalty (INR)": 11000.00,
      "Total Fees Paid (INR)": 753500.00,
      "Total Penalty Paid (INR)": 10000.00,
      "Balance Fees (INR)": 272000.00,
      "Balance Penalty (INR)": 1000.00,
      "Total Balance (INR)": 283000.00
    }
  ]
  
  
        const data = {
            "Developer Applicant Name": "Kushee",
            "File Number": "TEMP/CMDA/1311/2022",
            "Date of Submission": "28-06-2023",
            "Site Address": "11, Bheema Nagar",
           "District": "Chennai",
            "Taluk": "Ambattur",
            "Village": "Athipattu (GCC LB)",
            "Local Body Name": "GCC",
            "Type of Application": "Planning Permission",
            "Proposal Type": "Building",
           "Type of Building": "NHRB"
          };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">FileDetails</h1>
      <div className="w-full md:w-[500px] text-left mx-auto  px-4  pt-4 pb-6 rounded-md  flex flex-col sm:flex-row  gap-4 self-baseline">
        <div className="w-full sm:w-[250px]">
          <label
            htmlFor="file-number"
            className="block text-sm font-medium text-gray-700"
          >
            File Number
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="file-number"
              name="file-number"
              placeholder="TEMP/CMDA/0224/2023"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            />
          </div>
        </div>

        <div className=" self-center sm:self-end">
          <button className="bg-[#0066FF] h-fit  text-white font-medium shadow-sm py-1.5 px-4 rounded">
          Get Data
          </button>
        </div>
      </div>

      <table className="mx-auto w-full sm:w-[600px] pb-4">
      <tbody className="bg-white divide-y divide-gray-200">
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className="px-2 py-4 text-xs text-gray-900">{key}</td>
            <td className="px-2 py-4 text-xs text-gray-900">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
   
      <Table data={budgetData} pagination={false} alignedRight={"0"}/>
    </div>
  );
};

export default FileDetails;
