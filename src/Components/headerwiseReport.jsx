import React from 'react'
import Table from './table'

const HeaderwiseReport = () => {
  const data=[
    {
        "Action": "View",
        "Date": "08-03-2024",
        "Budget Header": "Advertisement Charge",
        "Applicant Name": "POTHYS GARMENTS",
        "Challan No": "CMDA/0004/2024",
        "File No": "RE/GR-II/09/07/009",
        "Transaction id": "CMDA_16098",
        "Zone": "Panchayat Union",
        "Project Name": "Planning Clearance for Pohys Building",
        "Challan Amount (INR)": "3,724.00",
        "Penalty Amount (INR)": "0.00",
        "Total Amount (INR)": "3,724.00",
        "Payment Status": "Paid",
        "Gateway": "HDFC",
        "Total Challan Amount (INR)": "30,000.00",
        "Total Paid Challan Amount (INR)": "15,500.00",
        "Total Balance Amount (INR)": "14,500.00",
        "Payment Mode": "Credit Card"
    },
    {
        "Action": "View",
        "Date": "08-03-2024",
        "Budget Header": "Scrutiny Fees",
        "Applicant Name": "DUGAR HOUSING LIMITED",
        "Challan No": "CMDA/0007/2024",
        "File No": "RE/GR-II/09/07/019",
        "Transaction id": "CMDA_16099",
        "Zone": "Municipality",
        "Project Name": "DUGAR Housing",
        "Challan Amount (INR)": "4,250.00",
        "Penalty Amount (INR)": "50.00",
        "Total Amount (INR)": "4,500.00",
        "Payment Status": "Failed",
        "Gateway": "HDFC",
        "Total Challan Amount (INR)": "25,000.00",
        "Total Paid Challan Amount (INR)": "12,500.00",
        "Total Balance Amount (INR)": "12,500.00",
        "Payment Mode": "Debit Card"
    },
    {
        "Action": "View",
        "Date": "08-03-2024",
        "Budget Header": "Registration Charge",
        "Applicant Name": "Kushee",
        "Challan No": "CMDA/0008/2024",
        "File No": "RE/GR-II/09/07/109",
        "Transaction id": "CMDA_16100",
        "Zone": "Municipality",
        "Project Name": "Layout Refusal",
        "Challan Amount (INR)": "2,856.00",
        "Penalty Amount (INR)": "0.00",
        "Total Amount (INR)": "2,856.00",
        "Payment Status": "Paid",
        "Gateway": "HDFC",
        "Total Challan Amount (INR)": "20,000.00",
        "Total Paid Challan Amount (INR)": "10,000.00",
        "Total Balance Amount (INR)": "10,000.00",
        "Payment Mode": "Credit Card"
    },
    {
        "Action": "View",
        "Date": "08-03-2024",
        "Budget Header": "Development Charge",
        "Applicant Name": "Karpagam",
        "Challan No": "CMDA/0009/2024",
        "File No": "RE/GR-II/09/07/213",
        "Transaction id": "CMDA_16101",
        "Zone": "2 Zone",
        "Project Name": "Site Approval",
        "Challan Amount (INR)": "7,000.00",
        "Penalty Amount (INR)": "800.00",
        "Total Amount (INR)": "7,800.00",
        "Payment Status": "Failed",
        "Gateway": "HDFC",
        "Total Challan Amount (INR)": "50,000.00",
        "Total Paid Challan Amount (INR)": "37,000.00",
        "Total Balance Amount (INR)": "13,000.00",
        "Payment Mode": "Net Banking"
    },
    {
        "Action": "View",
        "Date": "08-03-2024",
        "Budget Header": "Advertisement Charge",
        "Applicant Name": "Indian Builders",
        "Challan No": "CMDA/0014/2024",
        "File No": "RE/GR-II/09/07/029",
        "Transaction id": "CMDA_16108",
        "Zone": "Town Panchayat",
        "Project Name": "Reclassification",
        "Challan Amount (INR)": "3,750.00",
        "Penalty Amount (INR)": "465.00",
        "Total Amount (INR)": "4,215.00",
        "Payment Status": "Paid",
        "Gateway": "HDFC",
        "Total Challan Amount (INR)": "42,500.00",
        "Total Paid Challan Amount (INR)": "10,000.00",
        "Total Balance Amount (INR)": "32,500.00",
        "Payment Mode": "Net Banking"
    }
]

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
  { name: 'Advertisement Charges', value: 'advertisement_charges' }
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
        <label htmlFor="headerwise" className="block text-sm font-medium text-gray-700">
         Header
        </label>
        <div className="mt-1">
          <select
            id="headerwise"
            name="headerwise"
            className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
          >
            
            {dropDown?.map((item, index) => (
  <option key={index} value={item.value} className='whitespace-normal'>{item.name} </option>
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
  )
}

export default HeaderwiseReport