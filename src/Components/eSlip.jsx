import { PrinterIcon } from "@heroicons/react/24/outline";
import React from "react";

const ESlip = () => {
  function getCurrentDateTime() {
    const currentDate = new Date();

    // Get date components
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, "0");
    const year = currentDate.getFullYear();

    // Get time components
    let hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    // Determine AM/PM
    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format

    // Construct the formatted date string
    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${amOrPm}`;

    return formattedDate;
  }

  const main = [
    {
      "Beneficiary Name": "CMDA",
      "Account No.": "XXXMI1XAVE63N9RX",
      "IFSC Code": "HDFC0000113",
      Bank: "HDFC Bank",
      Amount: "₹ 3,724.00",
      "Customer Email ID": "doshibuilders@gmail.com",
      "Customer Mobile No": "4894533784",
      "Merchant Order Id": "order_NV5kb8r7PTTqpD",
    },
  ];

  const words = [
    "1.) This challan can be used only for electronic funds transfer to provided account no. from HDFC Bank and Other Banks through intra bank Funds Transfer or RTGS / NEFT / IMPS.",
    "2.) It is remitter's responsibility to remit the funds to correct account no. with correct amount as provided above. In case of any mismatch in account no or amount, the transaction will be rejected and funds will be refunded.",
    "3.) This challan is valid for only one transaction hence Remitter has to generate new challan for every payment.",
  ];

  const Bank = ["Amount (Rs.)", " Debit A/C No.", " UTR No."];

  return (
    <div className=" overflow-y-auto styleScroll pb-12 pt-4 w-full md:max-w-[800px] flex flex-col mx-auto px-4 sm:px-0 ">
      <div className="bg-primary pb-6  text-lg font-medium text-gray-900   rounded-t-lg">
        e-Payment Request Slip
      </div>
      <table className="w-full divide-y divide-gray-200">
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td
              colSpan="2"
              className="px-2 py-4 text-xs text-gray-900 cursor-pointer  "
            >
              <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <p> For RTGS/NEFT/IMPS/Funds Transfer</p>
                <p>Date: {getCurrentDateTime()}</p>
              </div>
            </td>
          </tr>

          {main?.map((item, index) =>
            Object.entries(item).map(([key, value]) => (
              <tr key={key}>
                <td className="px-2 font-semibold py-4 w-[40%] text-xs text-gray-900 cursor-pointer whitespace-normal">
                  {key}
                </td>
                <td className="px-2 py-4 text-xs text-gray-900 cursor-pointer whitespace-normal">
                  {value}
                </td>
              </tr>
            ))
          )}
          <tr>
            <td
              colSpan="2"
              className="px-2 py-4 font-semibold text-xs text-gray-900 cursor-pointer whitespace-normal"
            >
              Disclaimer :
            </td>
          </tr>
          {words?.map((item, index) => (
            <tr>
              <td
                key={index}
                colSpan="2"
                className="px-2 py-4  text-xs text-gray-900 cursor-pointer whitespace-normal"
              >
                {item}
              </td>
            </tr>
          ))}
          <tr>
            <td
              colSpan="2"
              className="relative px-2 font-semibold py-4 text-xs h-[100px] text-gray-900 cursor-pointer "
            >
              <div className="absolute bottom-4 right-4">
                Signature of Depositor
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="px-2 py-4 text-center  text-xs text-gray-900 cursor-pointer whitespace-normal"
            >
              (FOR BANK USE ONLY)
            </td>
          </tr>
          {Bank?.map((item, index) => (
            <tr>
              <td
                key={index}
                colSpan="2"
                className="px-2 py-4  text-xs font-semibold text-gray-900 cursor-pointer whitespace-normal"
              >
                {item}
              </td>
            </tr>
          ))}
          <tr>
            <td
              colSpan="2"
              className="relative px-2 py-4 text-xs font-semibold h-[100px] text-gray-900 cursor-pointer "
            >
              <div className="absolute bottom-4 right-4">
                Authorised Signatory
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="relative px-2 py-4 text-xs font-semibold h-[100px] text-gray-900 cursor-pointer "
            >
              <div className="absolute bottom-4 right-4">Branch Stamp</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full flex flex-col gap-4 mt-8">
        <div className=" mx-auto flex gap-4">
          <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
            <PrinterIcon className="w-4 h-4 " />
            Print
          </button>
          <button
            className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            onClick={() => window.history.back()}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESlip;
