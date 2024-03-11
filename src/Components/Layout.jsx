import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './sidebar';
import FileDetails from './FileDetails';
import TransactionReport from './transactionReport';
import UserMaster from './userMaster';
import UserAccessRights from './userAccessRights';
import HeaderwiseReport from './headerwiseReport';
import FileList from './fileList';
import LocalBodyReport from './localBodyReport';
import DistrictWiseReport from './districtwiseReport';
import ChangePassword from './changePassword';

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
          <Route path="/localbody-report" element={<LocalBodyReport/>} />
          <Route path="/headerwise-report" element={<HeaderwiseReport />} />
          <Route path="/districtwise-report" element={<DistrictWiseReport />} />
          <Route path="/change-password" element={<ChangePasswords />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
