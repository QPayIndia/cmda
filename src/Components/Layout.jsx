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
import ApplicantReport from './applicant';

import MISLocalBody from './MIS/localBody';
import MISHeader from './MIS/headerwise';
import MISDistrict from './MIS/districtwiseMIS';
import MISApplicant from './MIS/applicantMIS';
import ESlip from './eSlip';

const Layout = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const hideSidebarRoutes = ['/payment', '/checkout', '/payment-page', '/payment-confirm','/e-pay'];

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
          <Route path="/gateteway-reports/transaction" element={<TransactionReport />} />
          <Route path="/mis-reports/file-list" element={<FileList />} />
          <Route path="/mis-reports/file-details" element={<FileDetails />} />
          <Route path="/user-master" element={<UserMaster />} />
          <Route path="/user-access-rights" element={<UserAccessRights />} />
          <Route path="/gateteway-reports/localbody" element={<LocalBodyReport/>} />
          <Route path="/gateteway-reports/headerwise" element={<HeaderwiseReport />} />
          <Route path="/gateteway-reports/districtwise" element={<DistrictWiseReport />} />
          <Route path="/gateteway-reports/applicant" element={<ApplicantReport />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/mis-reports/localbody" element={<MISLocalBody />} />
          <Route path="/mis-reports/headerwise" element={<MISHeader />} />
          <Route path="/mis-reports/districtwise" element={<MISDistrict />} />
          <Route path="/mis-reports/applicant" element={<MISApplicant />} />
      
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
