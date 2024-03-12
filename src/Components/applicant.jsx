import React from "react";
import Table from "./table";

const ApplicantReport = () => {
  const data = [
    {
      Action: "View",
      Date: "08-03-2024",
      District: "Chennai",
      "Budget Header": "Advertisement Charge",
      "Applicant Name": "Dugar Housing Limited",
      "Challan No": "CMDA/0004/2024",
      "File No": "RE/GR-II/09/07/0091",
      "Transaction id": "CMDA_160981",
      Zone: "Municipality",
      "Challan Amount": 3724,
      "Penalty Amount": 0,
      "Total Amount": 3724,
      "Payment Status": "Paid",
      Gateway: "HDFC",
      "Total Challan Amount": 30000,
      "Total Paid Challan Amount": 15500,
      "Total Balance Amount": 14500,
      "Payment Mode": "Credit Card",
    },
    {
      Action: "View",
      Date: "08-03-2024",
      District: "Chennai",
      "Budget Header": "Scrutiny Fees",
      "Applicant Name": "Dugar Housing Limited",
      "Challan No": "CMDA/0007/2024",
      "File No": "RE/GR-II/09/07/019",
      "Transaction id": "CMDA_160992",
      Zone: "Municipality",
      "Challan Amount": 4250,
      "Penalty Amount": 50,
      "Total Amount": 4500,
      "Payment Status": "Failed",
      Gateway: "HDFC",
      "Total Challan Amount": 25000,
      "Total Paid Challan Amount": 12500,
      "Total Balance Amount": 12500,
      "Payment Mode": "Debit Card",
    },
    {
      Action: "View",
      Date: "08-03-2024",
      District: "Chennai",
      "Budget Header": "Registration Charge",
      "Applicant Name": "Dugar Housing Limited",
      "Challan No": "CMDA/0008/2024",
      "File No": "RE/GR-II/09/07/1091",
      "Transaction id": "CMDA_161003",
      Zone: "Municipality",
      "Challan Amount": 2856,
      "Penalty Amount": 0,
      "Total Amount": 2856,
      "Payment Status": "Paid",
      Gateway: "HDFC",
      "Total Challan Amount": 20000,
      "Total Paid Challan Amount": 10000,
      "Total Balance Amount": 10000,
      "Payment Mode": "Credit Card",
    },
    {
      Action: "View",
      Date: "08-03-2024",
      District: "Chennai",
      "Budget Header": "Development Charge",
      "Applicant Name": "Dugar Housing Limited",
      "Challan No": "CMDA/0009/2024",
      "File No": "RE/GR-II/09/07/2131",
      "Transaction id": "CMDA_161014",
      Zone: "Municipality",
      "Challan Amount": 7000,
      "Penalty Amount": 800,
      "Total Amount": 7800,
      "Payment Status": "Failed",
      Gateway: "HDFC",
      "Total Challan Amount": 50000,
      "Total Paid Challan Amount": 37000,
      "Total Balance Amount": 13000,
      "Payment Mode": "Net Banking",
    },
    {
      Action: "View",
      Date: "08-03-2024",
      District: "Chennai",
      "Budget Header": "Advertisement Charge",
      "Applicant Name": "Dugar Housing Limited",
      "Challan No": "CMDA/0014/2024",
      "File No": "RE/GR-II/09/07/0291",
      "Transaction id": "CMDA_161085",
      Zone: "Municipality",
      "Challan Amount": 3750,
      "Penalty Amount": 465,
      "Total Amount": 4215,
      "Payment Status": "Paid",
      Gateway: "HDFC",
      "Total Challan Amount": 42500,
      "Total Paid Challan Amount": 10000,
      "Total Balance Amount": 32500,
      "Payment Mode": "Debit Card",
    },
  ];

  const dropDown = [
    { name: "Dugar Housing Limited", value: "dugar housing limited" },
    { name: "Karpagam", value: "karpagam" },
    { name: "Indian Builders", value: "indian builders" },
    { name: "Kushee", value: "kushee" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">Applicant Reports</h1>
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
            htmlFor="headerwise"
            className="block text-sm font-medium text-gray-700"
          >
            Applicant
          </label>
          <div className="mt-1">
            <select
              id="headerwise"
              name="headerwise"
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
          <button className="bg-[#0066FF] text-sm  text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Submit
          </button>
          <button className="bg-white shadow-sm border text-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Clear
          </button>
        </div>
      </div>
      <Table data={data} />

    
    </div>
  );
};

export default ApplicantReport;
