import {
  Link,
  useLocation,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import React, { useState } from "react";
import LogoImage from "./../assets/cmda.png";
import PaySuccess from "./paySuccess";

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [description, setDescription] = useState("");
  const location = useLocation();

  // Parse the query string from the location object
  const searchParams = new URLSearchParams(location.search);

  // Get the value of the paymentOption parameter
  const paymentOption = searchParams.get("paymentOption");

  console.log("pay", paymentOption);

  const navigate = useNavigate();

  const paymentHandler = async (e) => {
    if (paymentOption == "e-Payment Request Slip") {
      navigate("/e-pay");
    } else {
      e.target.disabled = true;
      const amount = 372400;
      const currency = "INR";
      const receiptId = "qwerty";
      const response = await fetch(
        "https://razorpay-backend-cmda.vercel.app/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId,
          }),
        }
      );
      const order = await response.json();
      console.log(order);

      var options = {
        key: "rzp_test_zBtIOprScPFrij", // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: "Chennai Metropolitan Development Authority", //your business name
        description: "Test Transaction",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/79/Chennai_Metropolitan_Development_Authority_Logo.jpg",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          const body = {
            ...response,
          };

          const validateRes = await fetch(
            "https://razorpay-backend-cmda.vercel.app/order/validate",
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const jsonRes = await validateRes.json();
          console.log(jsonRes);
          if (jsonRes?.msg == "success") {
            setShowModal(true);
            setMessage("success");
          } else {
            setShowModal(true);
            setMessage("failed");
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: "VigneshKumar", //your customer's name
          email: "mvigneshkumarbvn@gmail.com",
          contact: "9361427350", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#0066ff",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
      });

      rzp1.open();
      e.preventDefault();
      e.target.disabled = false;
    }
  };
  return (
    <div className="flex flex-col w-full md:max-w-[800px] mx-auto  py-4 px-4 ">
      <div className="flex min-h-full flex-1 flex-col justify-center  py-4 sm:px-6 lg:px-8">
        <div className="bg-primary pb-6  text-lg font-medium text-gray-900   rounded-t-lg">
          Checkout Confirmation
        </div>
        <div className="sm:bg-white sm:px-6 sm:py-6  sm:border border-gray-300 sm:rounded-lg  w-full ">
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

            <div className="flex flex-col sm:flex-row gap-2 justify-between  ">
              <h4 className="block text-sm font-medium text-gray-700">
                Payment Option :
              </h4>
              <p className="block text-base font-normal text-gray-700 w-[50%]">
                {paymentOption}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 self-center">
          <button
            onClick={(e) => paymentHandler(e)}
            className="bg-[#0066FF] cursor-pointer flex justify-center w-[150px] text-white font-medium shadow-sm py-1.5 px-4 rounded"
          >
            Pay
          </button>
        </div>
      </div>
      <PaySuccess
        open={showModal}
        setOpen={setShowModal}
        message={message}
        description={description}
      />
    </div>
  );
};

export default Checkout;
