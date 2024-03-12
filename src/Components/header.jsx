import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoImage from "./../assets/cmda.png"
import { Link, useLocation } from 'react-router-dom'
import BankLogo from "./../assets/bank.png"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({sidebarOpen, setSidebarOpen}) {

  const location = useLocation();
  const hideLogoRoutes = ['/payment', '/checkout', '/payment-page', '/payment-confirm'];
  const [hideLogo, setHideLogo] = useState(false);

  // Function to check if the current location matches any of the routes that should hide the sidebar
  const shouldHideLogo = () => {
    return hideLogoRoutes.includes(location.pathname);
  };

  useEffect(() => {
    // Update hideLogo state based on the current location
    setHideLogo(shouldHideLogo());
  }, [location]);
     
  return (
    <Disclosure as="nav" className="bg-[#0066ff] h-[64px] fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

              <div className="flex  items-center gap-4 justify-start">
             { !hideLogo && <Bars3Icon onClick={()=>setSidebarOpen(!sidebarOpen)} className='lg:hidden w-6 h-6 text-white'  />}
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={LogoImage}
                    alt="CMDA"
                  />
                </div>
              </div>

             {!hideLogo &&  <div className="flex  flex-col  items-center">
                  <img
                    className="h-5 w-auto"
                    src={BankLogo}
                    alt="HDFC"
                  />
                  <p className='hidden sm:block text-white text-sm font-normal'>Transaction Dashboard</p>
                </div> }

              <div className="flex items-center pr-2 static inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none ">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://mvigneshkumar-portfolio.web.app/static/media/avatar.ceef04522eb64de21ac7.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right text-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
             
              <p className='block px-4 py-2 text-sm text-gray-700'>
                Welcome! Vigneshkumar M
              </p>
              <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"/change-password"}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Change password
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"/user-master"}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

  
        </>
      )}
    </Disclosure>
  )
}
