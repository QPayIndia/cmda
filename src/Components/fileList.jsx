import React from "react";
import Table from "./table";

const FileList = () => {
 const data= [
    {
        "Action": "View",
        "File No": "RE/GR-II/09/07/009",
        "Developer/ Applicant Name": "Karpagam",
        "Village": "Sembarambakkam",
        "District": "Thiruvallur",
        "Local Body Name": "GCC",
        "Type of Application": "Planning Permission",
        "Proposal Type": "Layout",
        "Balance Fees (INR)": "50,000.00",
        "Balance Penalty (INR)": "2,000.00",
        "Total Balance (INR)": "70,000.00"
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
        "Balance Fees (INR)": "12,300.00",
        "Balance Penalty (INR)": "0.00",
        "Total Balance (INR)": "12,300.00"
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
        "Balance Fees (INR)": "6,000.00",
        "Balance Penalty (INR)": "0.00",
        "Total Balance (INR)": "6,000.00"
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
        "Balance Fees (INR)": "12,200.00",
        "Balance Penalty (INR)": "500.00",
        "Total Balance (INR)": "12,700.00"
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
        "Balance Fees (INR)": "43,000.00",
        "Balance Penalty (INR)": "5,000.00",
        "Total Balance (INR)": "48,000.00"
    }
]

  

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
          <button className="bg-[#0066FF]  text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Submit
          </button>
          <button className="bg-white border shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Clear
          </button>
        </div>
      </div>
      <Table data={data} />
    </div>
  );
};

export default FileList;
