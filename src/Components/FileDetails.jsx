import React from "react";
import Table from "./table";

const FileDetails = () => {
    
  const budgetData=[
    {
      "Budget Header": "Development charges for land Sq.m.",
      "Total Fees (INR)": "3,000.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "3,000.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "Development charges for Building per Sq.m.",
      "Total Fees (INR)": "14,000.00",
      "Total Penalty (INR)": "1,000.00",
      "Total Fees Paid (INR)": "0.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "14,000.00",
      "Balance Penalty (INR)": "1,000.00",
      "Total Balance (INR)": "15,000.00"
    },
    {
      "Budget Header": "Regulation Charge for land",
      "Total Fees (INR)": "53,000.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "53,000.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "Security Deposit for building",
      "Total Fees (INR)": "2,56,000.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "0.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "2,56,000.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "2,56,000.00"
    },
    {
      "Budget Header": "Security Deposit for Display Board",
      "Total Fees (INR)": "10,000.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "10,000.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "10,000.00"
    },
    {
      "Budget Header": "IDC - CMWSSB(For sewered area only)",
      "Total Fees (INR)": "2,97,000.00",
      "Total Penalty (INR)": "10,000.00",
      "Total Fees Paid (INR)": "2,97,000.00",
      "Total Penalty Paid (INR)": "10,000.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "I & A Charge",
      "Total Fees (INR)": "3,90,000.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "3,90,000.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "OSR Charges",
      "Total Fees (INR)": "0.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "0.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "Premium FSI Charges",
      "Total Fees (INR)": "0.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "0.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "Flag Day Charge",
      "Total Fees (INR)": "500.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "500.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "Caution Deposit",
      "Total Fees (INR)": "0.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "0.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "Balance Scrutiny Fees",
      "Total Fees (INR)": "2,000.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "0.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "2,000.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "2,000.00"
    },
    {
      "Budget Header": "SD - STP",
      "Total Fees (INR)": "0.00",
      "Total Penalty (INR)": "0.00",
      "Total Fees Paid (INR)": "0.00",
      "Total Penalty Paid (INR)": "0.00",
      "Balance Fees (INR)": "0.00",
      "Balance Penalty (INR)": "0.00",
      "Total Balance (INR)": "0.00"
    },
    {
      "Budget Header": "Total",
      "Total Fees (INR)": "10,25,500.00",
      "Total Penalty (INR)": "11,000.00",
      "Total Fees Paid (INR)": "7,53,500.00",
      "Total Penalty Paid (INR)": "10,000.00",
      "Balance Fees (INR)": "2,72,000.00",
      "Balance Penalty (INR)": "1,000.00",
      "Total Balance (INR)": "2,83,000.00"
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
