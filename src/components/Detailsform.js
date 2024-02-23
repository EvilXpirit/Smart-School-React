import React from 'react';
import StaffDetails from './StaffDetails';
import PersonalDetails from './PersonalDetails';
import OtherDetails from './OtherDetails';

const DetailsForm = () => {
  return (
    <div className="all-form-container">
      <StaffDetails />
      {/* <hr /> */}
      <PersonalDetails />
      {/* <hr /> */}
      <OtherDetails />
    </div>
  );
};

export default DetailsForm;
