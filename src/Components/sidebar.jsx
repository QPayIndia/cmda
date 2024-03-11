import { Fragment, useState , useEffect ,  memo} from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import LogoImage from "./../assets/logo.png"
import {
  ArrowPathIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  DocumentIcon,
  UserCircleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = memo(({ sidebarOpen, setSidebarOpen }) => {

  const navigationLinks = [
    { name: "User Master", href: "/user-master", icon: UserIcon, current: true },
    {
      name: "User Access Rights",
      href: "/user-access-rights",
      icon: UserCircleIcon,
      current: false,
    },
    {
      name: "File List",
      href: "/file-list",
      icon: DocumentIcon,
      current: false,
    },
    {
      name: "File Details",
      href: "/file-details",
      icon: ClipboardDocumentIcon,
      current: false,
    },
    {
      name: "Transaction Reports",
      href: "/transaction-report",
      icon: BanknotesIcon,
      current: false,
    },
    {
      name: "Local Body Reports",
      href: "/localbody-report",
      icon: BuildingOfficeIcon,
      current: false,
    },
    {
      name: "Headerwise Reports",
      href: "/headerwise-report",
      icon: BuildingOffice2Icon,
      current: false,
    },
    {
      name: "Gatewaywise Reports",
      href: "/gatewaywise-report",
      icon: ChartBarIcon,
      current: false,
    },
    { name: "Change Password", href: "#", icon: ArrowPathIcon, current: false },
  ];


  const [navigation , setNavigation]=useState(navigationLinks)

  const location = useLocation();

  useEffect(() => {
   
    const updatedNavigation = navigation?.map((item) => ({
      ...item,
      current: item.href === location.pathname,
    }));
    setNavigation(updatedNavigation);
  }, [location]);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"

                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#F9FAFB]  pb-4">
                    <div className="flex h-16 shrink-0 items-center px-6">
                    <img
                    className="h-8 w-auto"
                    src={LogoImage}
                    alt="CMDA"
                  />
                    </div>
                    <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className=" space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={classNames(
                          item.current
                            ? "bg-gray-300 text-gray-900"
                            : " text-gray-900 hover:bg-gray-300",
                          "group flex gap-x-3 items-center  px-4 py-2 text-sm leading-6 font-medium"
                        )}
                      >
                        <item.icon
                          className="h-5 w-5 shrink-0 text-gray-900"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden mt-[64px] lg:fixed l lg:inset-y-0 lg:z-10 lg:flex lg:w-[260px] lg:flex-col border-r-2 ">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#F9FAFB]  py-4">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className=" space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-300 text-gray-900"
                            : " text-gray-900 hover:bg-gray-300",
                          "group flex gap-x-3 items-center  px-4 py-2 text-sm leading-6 font-medium"
                        )}
                      >
                        <item.icon
                          className="h-5 w-5 shrink-0 text-gray-900"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
    </>
  );
});

export default Sidebar;