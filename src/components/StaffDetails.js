import React, { useState } from 'react';

const StaffDetails = () => {
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [designation, setDesignation] = useState('');
  const [trainedAsLevel, setTrainedAsLevel] = useState('');
  const [staffType, setStaffType] = useState('');
  const [qualificationType, setQualificationType] = useState('');
  const [ctetQualified, setCtetQualified] = useState('');
  const [staffDepartment, setStaffDepartment] = useState('');
  const [educationQualification, setEducationQualification] = useState('');
  const [employmentCategory, setEmploymentCategory] = useState('');
  const [accessLevel, setAccessLevel] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'employmentStatus':
        setEmploymentStatus(value);
        break;
      case 'designation':
        setDesignation(value);
        break;
      case 'trainedAsLevel':
        setTrainedAsLevel(value);
        break;
      case 'staffType':
        setStaffType(value);
        break;
      case 'qualificationType':
        setQualificationType(value);
        break;
      case 'ctetQualified':
        setCtetQualified(value);
        break;
      case 'staffDepartment':
        setStaffDepartment(value);
        break;
      case 'educationQualification':
        setEducationQualification(value);
        break;
      case 'employmentCategory':
        setEmploymentCategory(value);
        break;
      case 'accessLevel':
        setAccessLevel(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <section className="top">
        {/* Header section */}
      </section>
      <section className="forms">
        <h5 className="text-center">BRANCH: JUNIOR COLLEGE</h5>
        <div className="form-container">
          <h5 className="headings p-2">Staff Details</h5>
          <form>
            <div className="details-grid">
              <div className="fields">
                <label htmlFor="employmentStatus" className="f1">Employment Status:</label>
                <select id="employmentStatus" name="employmentStatus" value={employmentStatus} onChange={handleInputChange}>
                  <option value="">-Select Employment Status-</option>
                  <option value="temporary">Temporary</option>
                  <option value="permanent">Permanent</option>
                </select>
              </div>
              <div className="fields">
                <label htmlFor="staffType" className="f1">Staff Type:</label> <br></br>
                <input type="radio" id="teaching" name="staffType" value="Teaching" checked={staffType === 'Teaching'} onChange={handleInputChange} /><label htmlFor="teaching">Teaching</label>
                <input type="radio" id="nonTeaching" name="staffType" value="Non Teaching" checked={staffType === 'Non Teaching'} onChange={handleInputChange} /><label htmlFor="nonTeaching">Non Teaching</label>
                <input type="radio" id="transport" name="staffType" value="Transport" checked={staffType === 'Transport'} onChange={handleInputChange} /><label htmlFor="transport">Transport</label>
              </div>
              <div className="fields">
                <label htmlFor="staffDepartment" className="f1">Staff Department:</label>
                <select id="staffDepartment" name="staffDepartment" value={staffDepartment} onChange={handleInputChange}>
                  <option value="">-Select Department-</option>
                  <option value="cse">CSE</option>
                  <option value="mech">Mech</option>
                  <option value="civil">Civil</option>
                  <option value="e&tc">E&TC</option>
                  <option value="ele">Electrical</option>
                </select>
              </div>
              <div className="fields">
                <label htmlFor="employmentCategory" className="f1">Employment Category:</label>
                <select id="employmentCategory" name="employmentCategory" value={employmentCategory} onChange={handleInputChange}>
                  <option value="">-Select Category-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="fields">
                <label htmlFor="designation" className="f1">Designation:</label>
                <select id="designation" name="designation" value={designation} onChange={handleInputChange}>
                  <option value="">-Select Designation-</option>
                  <option value="dep1">Dep1</option>
                  <option value="dep2">Dep2</option>
                  <option value="dep3">Dep3</option>
                </select>
              </div>
              <div className="fields">
                <label htmlFor="trainedAsLevel" className="f1">Trained As:</label>
                <select id="trainedAsLevel" name="trainedAsLevel" value={trainedAsLevel} onChange={handleInputChange}>
                  <option value="">-Select Level-</option>
                  <option value="level1">Level 1</option>
                  <option value="level2">Level 2</option>
                  <option value="level3">Level 3</option>
                </select>
              </div>
              <div className="fields">
                <label htmlFor="qualificationType" className="f1">Qualification Type:</label>
                <select id="qualificationType" name="qualificationType" value={qualificationType} onChange={handleInputChange}>
                  <option value="">-Select Qualification-</option>
                  <option value="qual1">Qualification 1</option>
                  <option value="qual2">Qualification 2</option>
                  <option value="qual3">Qualification 3</option>
                </select>
              </div>
              <div className="fields">
                <label htmlFor="ctetQualified" className="f1">CTET Qualified:</label> <br></br>
                <input type="radio" id="ctetYes" name="ctetQualified" value="Yes" checked={ctetQualified === 'Yes'} onChange={handleInputChange} /><label htmlFor="ctetYes">Yes</label>
                <input type="radio" id="ctetNo" name="ctetQualified" value="No" checked={ctetQualified === 'No'} onChange={handleInputChange} /><label htmlFor="ctetNo">No</label>
              </div>
              <div className="fields">
                <label htmlFor="educationQualification" className="f1">Education Qualification:</label>
                <select id="educationQualification" name="educationQualification" value={educationQualification} onChange={handleInputChange}>
                  <option value="">-Select Qualification-</option>
                  <option value="Qual1">Qualification 1</option>
                  <option value="Qual2">Qualification 2</option>
                  <option value="Qual3">Qualification 3</option>
                </select>
              </div>
              <div className="fields">
                <label htmlFor="accessLevel" className="f1">Access Level:</label>
                <select id="accessLevel" name="accessLevel" value={accessLevel} onChange={handleInputChange}>
                  <option value="">-Select Access Level-</option>
                  <option value="lev1">Level 1</option>
                  <option value="lev2">Level 2</option>
                  <option value="lev3">Level 3</option>
                </select>
              </div>
            </div>
            {/* <button className="btn" style={{ backgroundColor: 'orangered', color: 'white', width: '15%' }}>Save & Continue</button> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default StaffDetails;
