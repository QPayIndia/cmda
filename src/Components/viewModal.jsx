import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function SingleReport({ open, setOpen, data }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-85 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 w-screen overflow-hidden ">
          <div className="flex min-h-full items-end justify-center sm:p-4 text-center sm:items-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-y-auto styleScroll sm:rounded-lg bg-white  text-left shadow-xl transition-all sm:my-8 w-full h-screen sm:h-auto sm:max-h-[90vh] sm:max-w-[600px] ">
                <div className="sticky top-0 z-10 bg-white border-b">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900 flex justify-between p-4 sm:px-6 sm:py-4"
                  >
                    Report Details
                    <XMarkIcon
                      onClick={() => setOpen(false)}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </Dialog.Title>
                </div>
                <div className="  px-4 pb-4 pt-5 sm:p-6">
                {data && (
  <table className="mx-auto w-full pb-4">
    <tbody className="bg-white divide-y divide-gray-200">
      {Object.entries(data)?.map(([key, value]) => (
        // Check if the value does not contain "View"
        value !== "View" && (
          <tr key={key}>
            <td className="px-2 py-4 text-sm text-gray-900 whitespace-normal">
              {key}
            </td>
            <td className="px-2 py-4 text-sm text-gray-900 whitespace-normal">
              {value}
            </td>
          </tr>
        )
      ))}
    </tbody>
  </table>
)}

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
