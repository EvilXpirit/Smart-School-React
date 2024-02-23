import React, { useState } from 'react';

const OtherDetails = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
  const [emergencyContactNo, setEmergencyContactNo] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [emailId, setEmailId] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [correspondingAddress, setCorrespondingAddress] = useState('');
  const [religion, setReligion] = useState('');
  const [lastName, setLastName] = useState('');
  const [accessLevel, setAccessLevel] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
        case 'firstName':
            setFirstName(value);
            break;
            case 'middleName':
                setMiddleName(value);
                break;
              case 'lastName':
                setLastName(value);
                break;

                case 'mobileNo':
                    setMobileNo(value);
                    break;
                  case 'emergencyContactNo':
                    setEmergencyContactNo(value);
                    break;
                  case 'gender':
                    setGender(value);
                    break;
                  case 'dateOfBirth':
                    setDateOfBirth(value);
                    break;
                  case 'emailId':
                    setEmailId(value);
                    break;
                  case 'permanentAddress':
                    setPermanentAddress(value);
                    break;
                  case 'correspondingAddress':
                    setCorrespondingAddress(value);
                    break;
                  case 'religion':
                    setReligion(value);
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
        <div className="form-container">
          <h5 className="headings p-2">Other Details</h5>
          <form>
            <div className="details-grid">
              <div className="fields">
              <label htmlFor="firstName" className="f1">Adhar No: *</label> <br></br>
              <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleInputChange} className="form-control" />
              </div>
              <div className="fields">
              <label htmlFor="middleName" className="f1">PAN No: *</label> <br></br>
              <input type="text" id="middleName" name="middleName" value={middleName} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="fields"> 
              <label htmlFor="dateOfBirth" className="f1">Date of Joining:</label> <br></br>
              <input type="date" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={handleInputChange} className="form-control" />
            </div>
              <div className="fields">
              <label htmlFor="mobileNo" className="f1">Staff Reference Code:</label> <br></br>
              <input type="text" id="mobileNo" name="mobileNo" value={mobileNo} onChange={handleInputChange} className="form-control" maxLength="10" />
            </div>
              <div className="fields">
              <label className="f1">Salary Pay Type:</label> <br></br>
              <div className="fields radio-group">
                <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleInputChange} /><label htmlFor="male">Consolidate</label>
                <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleInputChange} /><label htmlFor="female">PAY</label>
                <input type="radio" id="other" name="gender" value="other" checked={gender === 'other'} onChange={handleInputChange} /><label htmlFor="other">Other</label>
              </div>
              </div>
              <div className="fields">
              <label htmlFor="emailId" className="f1">Government ID/ Resident No:</label> <br></br>
              <input type="email" id="emailId" name="emailId" value={emailId} onChange={handleInputChange} className="form-control" />
            </div>
              <div className="fields">
              <label htmlFor="religion" className="f1">Citizenship:</label>
              <select id="religion" name="religion" value={religion} onChange={handleInputChange} className="form-select">
                <option value="Indian">Indian</option>
                <option value="Citizen2">Japanese</option>
                <option value="Citizen3">African</option>
              </select>
            </div>
            </div>
            <button className="submit" style={{ backgroundColor: 'orangered', color: 'white', width: '15%' }}>Save & Continue</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OtherDetails;
