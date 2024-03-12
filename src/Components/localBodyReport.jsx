import React from 'react'
import Table from './table'

const LocalBodyReport = () => {
 const data= [
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Local Body": "GCC",
      "Applicant Name": "POTHYS GARMENTS",
      "Challan No": "CMDA/0004/2024",
      "File No": "RE/GR-II/09/07/009",
      "Transaction id": "CMDA_16098",
      "Budget Header": "Advertisement Charge",
      "Project Name": "Planning Clearance for Pohys Building",
      "Challan Amount (INR)": 3724.00,
      "Penalty Amount (INR)": 0.00,
      "Total Amount (INR)": 3724.00,
      "Payment Status": "Paid",
      "Gateway": "HDFC",
      "Total Challan Amount (INR)": 30000.00,
      "Total Paid Challan Amount (INR)": 15500.00,
      "Total Balance Amount (INR)": 14500.00,
      "Payment Mode": "Credit Card"
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Local Body": "Aminjikarai",
      "Applicant Name": "DUGAR HOUSING LIMITED",
      "Challan No": "CMDA/0007/2024",
      "File No": "RE/GR-II/09/07/019",
      "Transaction id": "CMDA_16099",
      "Budget Header": "Scrutiny Fees",
      "Project Name": "DUGAR Housing",
      "Challan Amount (INR)": 4250.00,
      "Penalty Amount (INR)": 50.00,
      "Total Amount (INR)": 4500.00,
      "Payment Status": "Failed",
      "Gateway": "HDFC",
      "Total Challan Amount (INR)": 25000.00,
      "Total Paid Challan Amount (INR)": 12500.00,
      "Total Balance Amount (INR)": 12500.00,
      "Payment Mode": "Debit Card"
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Local Body": "Tiruvottiyur",
      "Applicant Name": "Kushee",
      "Challan No": "CMDA/0008/2024",
      "File No": "RE/GR-II/09/07/109",
      "Transaction id": "CMDA_16100",
      "Budget Header": "Registration Charge",
      "Project Name": "Layout Refusal",
      "Challan Amount (INR)": 2856.00,
      "Penalty Amount (INR)": 0.00,
      "Total Amount (INR)": 2856.00,
      "Payment Status": "Paid",
      "Gateway": "HDFC",
      "Total Challan Amount (INR)": 20000.00,
      "Total Paid Challan Amount (INR)": 10000.00,
      "Total Balance Amount (INR)": 10000.00,
      "Payment Mode": "Credit Card"
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Local Body": "Guindy",
      "Applicant Name": "Karpagam",
      "Challan No": "CMDA/0009/2024",
      "File No": "RE/GR-II/09/07/213",
      "Transaction id": "CMDA_16101",
      "Budget Header": "Development Charge",
      "Project Name": "Site Approval",
      "Challan Amount (INR)": 7000.00,
      "Penalty Amount (INR)": 800.00,
      "Total Amount (INR)": 7800.00,
      "Payment Status": "Failed",
      "Gateway": "HDFC",
      "Total Challan Amount (INR)": 50000.00,
      "Total Paid Challan Amount (INR)": 37000.00,
      "Total Balance Amount (INR)": 13000.00,
      "Payment Mode": "Net Banking"
    },
    {
      "Action": "View",
      "Date": "08-03-2024",
      "Local Body": "Sholinganallur",
      "Applicant Name": "Indian Builders",
      "Challan No": "CMDA/0014/2024",
      "File No": "RE/GR-II/09/07/029",
      "Transaction id": "CMDA_16108",
      "Budget Header": "Advertisement Charge",
      "Project Name": "Reclassification",
      "Challan Amount (INR)": 3750.00,
      "Penalty Amount (INR)": 465.00,
      "Total Amount (INR)": 4215.00,
      "Payment Status": "Paid",
      "Gateway": "HDFC",
      "Total Challan Amount (INR)": 42500.00,
      "Total Paid Challan Amount (INR)": 10000.00,
      "Total Balance Amount (INR)": 32500.00,
      "Payment Mode": "Debit Card"
    }
  ]
  
  
  const dropDown = [
    { name: 'GCC', value: 'gcc' },
    { name: 'Karalappakkam', value: 'karalappakkam' },
    { name: 'Avadi', value: 'avadi' },
    { name: 'Arakkambakkam', value: 'arakkambakkam' },
    { name: 'Alathur', value: 'alathur' },
    { name: 'Vellacheri', value: 'vellacheri' }
  ];

  return (
    <div className='flex flex-col gap-4'>
        <h1 className="text-xl font-medium ">Local Body Reports</h1>
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
   Local body
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
    <Table data={data} />
    </div>
  )
}

export default LocalBodyReport