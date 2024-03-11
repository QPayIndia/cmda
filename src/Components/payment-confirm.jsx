import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaymentConfirm = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col w-full md:max-w-[800px] mx-auto py-4 px-4 ">
      <div className="flex min-h-full flex-1 flex-col justify-center  py-4 sm:px-6 lg:px-8">
      <div className="bg-primary pb-6 text-gray-900   text-lg font-medium rounded-t-lg">
            Payment Confirmation
          </div>

        <div className="sm:bg-white sm:px-6 sm:py-6 sm:border border-gray-300 sm:rounded-lg  w-full ">
         
          <div className="flex flex-col gap-4 sm:gap-2">
            <div className="flex flex-col sm:flex-row gap-2  justify-between ">
              <h4 className="block text-sm font-medium text-gray-700">
                Application No :
              </h4>
              <p className="block text-base font-normal text-gray-700 w-[50%] ">
                TEMP/CMDA/0224/2023
              </p>
            </div>

            <div className="flex  flex-col sm:flex-row gap-2 justify-between ">
              <h4 className="block text-sm font-medium text-gray-700">
                Challan No :
              </h4>
              <p className="block text-base font-normal text-gray-700 w-[50%]">
                CMDA/PP/ch/0224/2023
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-between  ">
              <h4 className="block text-sm font-medium text-gray-700">
                Transaction Ref. No. :
              </h4>
              <p className="block text-base font-normal text-gray-700 w-[50%]">
                CMDA_16098
              </p>
            </div>

            <div className="flex flex-col sm:flex-row  gap-2 justify-between  ">
              <h4 className="block text-sm font-medium text-gray-700">
                Amount :
              </h4>
              <p className="block text-base font-normal text-gray-700 w-[50%]">
                3,724.00
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-between  ">
              <h4 className="block text-sm font-medium text-gray-700">
                Penalty Amount :
              </h4>
              <p className="block text-base font-normal text-gray-700 w-[50%]">
                0.00
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-between  ">
              <h4 className="block text-sm font-medium text-gray-700">
                Payment Gateway :
              </h4>
              <p className="block text-base font-normal text-gray-700 w-[50%]">
                HDFC
              </p>
            </div>

            <div className="flex flex-col sm:flex-row  gap-2 justify-between  ">
              <h4 className="block text-sm font-medium text-gray-700">
                Status :
              </h4>
              <p className="block text-base font-normal text-gray-700 w-[50%]">
                Paid
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 self-center">
          <Link
            to={"/payment"}
            className="bg-white border shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
          
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirm;
