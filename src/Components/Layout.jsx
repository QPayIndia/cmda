import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './sidebar';
import FileDetails from './FileDetails';
import Checkout from './checkout';
import PaymentPage from './paymentPage';
import PaymentConfirm from './payment-confirm';
import TransactionReport from './transactionReport';
import UserMaster from './userMaster';
import UserAccessRights from './userAccessRights';
import ZonewiseReport from './zonewiseReport';
import HeaderwiseReport from './headerwiseReport';
import GatewaywiseReport from './gatewaywiseReport';
import FileList from './fileList';

const Layout = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const hideSidebarRoutes = ['/payment', '/checkout', '/payment-page', '/payment-confirm'];

  // Function to check if the current location matches any of the routes that should hide the sidebar
  const shouldHideSidebar = () => {
    return hideSidebarRoutes.includes(location.pathname);
  };

  return (
    <div className="flex lg:gap-4">
      {!shouldHideSidebar() && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
      <div className={` ${shouldHideSidebar() ? 'pt-[78px]' : 'w-full overflow-hidden lg:pl-[260px] pt-[78px] py-4 px-4'}`}>
        <Routes>
        <Route path="/" element={<UserMaster />} />
          <Route path="/transaction-report" element={<TransactionReport />} />
          <Route path="/file-list" element={<FileList />} />
          <Route path="/file-details" element={<FileDetails />} />
          <Route path="/user-master" element={<UserMaster />} />
          <Route path="/user-access-rights" element={<UserAccessRights />} />
          <Route path="/localbody-report" element={<ZonewiseReport />} />
          <Route path="/headerwise-report" element={<HeaderwiseReport />} />
          <Route path="/gatewaywise-report" element={<GatewaywiseReport />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
