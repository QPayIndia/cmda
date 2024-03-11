import React from "react";
import Table from "./table";

const TransactionReport = () => {
  const data = [
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0004/2024",
      "File No": "RE/GR-II/09/07/009",
      "Transaction id": "CMDA_16098",
      "Amount (INR)": "3,724.00",
      "Payment Status": "Paid",
      "Payment Mode": "e-Payment Request Slip"
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0007/2024",
      "File No": "RE/GR-II/09/07/019",
      "Transaction id": "CMDA_16099",
      "Amount (INR)": "4,500.00",
      "Payment Status": "Paid",
      "Payment Mode": "Debit Card"
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0008/2024",
      "File No": "RE/GR-II/09/07/109",
      "Transaction id": "CMDA_16100",
      "Amount (INR)": "2,856.00",
      "Payment Status": "Paid",
      "Payment Mode": "Credit Card"
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0009/2024",
      "File No": "RE/GR-II/09/07/213",
      "Transaction id": "CMDA_16101",
      "Amount (INR)": "7,800.00",
      "Payment Status": "Failed",
      "Payment Mode": "Net Banking"
    },
    {
      "Action": "View",
      "Date": "09-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0014/2024",
      "File No": "RE/GR-II/09/07/029",
      "Transaction id": "CMDA_16108",
      "Amount (INR)": "4,215.00",
      "Payment Status": "Paid",
      "Payment Mode": "Debit Card"
    },
    {
      "Action": "View",
      "Date": "09-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0008/2024",
      "File No": "RE/GR-II/09/07/109",
      "Transaction id": "CMDA_16100",
      "Amount (INR)": "2,856.00",
      "Payment Status": "Paid",
      "Payment Mode": "Credit Card"
    },
    {
      "Action": "View",
      "Date": "09-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0009/2024",
      "File No": "RE/GR-II/09/07/213",
      "Transaction id": "CMDA_16101",
      "Amount (INR)": "7,800.00",
      "Payment Status": "Failed",
      "Payment Mode": "Net Banking"
    },
    {
      "Action": "View",
      "Date": "09-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0014/2024",
      "File No": "RE/GR-II/09/07/029",
      "Transaction id": "CMDA_16108",
      "Amount (INR)": "4,215.00",
      "Payment Status": "Paid",
      "Payment Mode": "Debit Card"
    },
    {
      "Action": "View",
      "Date": "09-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0008/2024",
      "File No": "RE/GR-II/09/07/109",
      "Transaction id": "CMDA_16100",
      "Amount (INR)": "2,856.00",
      "Payment Status": "Paid",
      "Payment Mode": "Credit Card"
    },
    {
      "Action": "View",
      "Date": "09-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0009/2024",
      "File No": "RE/GR-II/09/07/213",
      "Transaction id": "CMDA_16101",
      "Amount (INR)": "7,800.00",
      "Payment Status": "Failed",
      "Payment Mode": "Net Banking"
    },
    {
      "Action": "View",
      "Date": "09-03-2024",
      "Gateway": "HDFC",
      "Challan No": "CMDA/0014/2024",
      "File No": "RE/GR-II/09/07/029",
      "Transaction id": "CMDA_16108",
      "Amount (INR)": "4,215.00",
      "Payment Status": "Paid",
      "Payment Mode": "Debit Card"
    }
  ];
  
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">Transaction Reports</h1>
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
            htmlFor="payment-gateway"
            className="block text-sm font-medium text-gray-700"
          >
            Payment Gateway
          </label>
          <div className="mt-1">
            <select
              id="payment-gateway"
              name="payment-gateway"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            >
              <option value="">All gateway</option>
              <option value="option1">HDFC</option>
              <option value="option2">HDFC</option>
              <option value="option3">HDFC</option>
              {/* Add more dummy options as needed */}
            </select>
          </div>
        </div>

        <div className=" flex gap-4">
          <button className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Submit
          </button>
          <button className="bg-white border text-sm border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Clear
          </button>
        </div>
      </div>
      <Table data={data} />
    </div>
  );
};

export default TransactionReport;
