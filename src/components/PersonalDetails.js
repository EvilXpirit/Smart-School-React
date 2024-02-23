import React, { useState } from 'react';

const PersonalDetails = () => {
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
          <h5 className="headings p-2">Personal Details</h5>
          <form>
            <div className="details-grid">
              <div className="fields">
              <label htmlFor="firstName" className="f1">First Name:</label> <br></br>
              <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleInputChange} className="form-control" />
              </div>
              <div className="fields">
              <label htmlFor="middleName" className="f1">Middle Name:</label> <br></br>
              <input type="text" id="middleName" name="middleName" value={middleName} onChange={handleInputChange} className="form-control" />
            </div>
              <div className="fields">
              <label htmlFor="lastName" className="f1">Last Name:</label> <br></br>
              <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleInputChange} className="form-control" />
            </div>
              <div className="fields">
              <label htmlFor="mobileNo" className="f1">Mobile No:</label> <br></br>
              <input type="text" id="mobileNo" name="mobileNo" value={mobileNo} onChange={handleInputChange} className="form-control" maxLength="10" />
            </div>
              <div className="fields">
              <label htmlFor="emergencyContactNo" className="f1">Emergency Contact No:</label> <br></br>
              <input type="text" id="emergencyContactNo" name="emergencyContactNo" value={emergencyContactNo} onChange={handleInputChange} className="form-control" maxLength="10" />
            </div>
              <div className="fields">
              <label className="f1">Gender:</label> <br></br>
              <div className="fields radio-group">
                <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleInputChange} /><label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleInputChange} /><label htmlFor="female">Female</label>
                <input type="radio" id="other" name="gender" value="other" checked={gender === 'other'} onChange={handleInputChange} /><label htmlFor="other">Other</label>
              </div>
            </div>
              <div className="fields"> 
              <label htmlFor="dateOfBirth" className="f1">Date of Birth:</label> <br></br>
              <input type="date" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={handleInputChange} className="form-control" />
            </div>
              <div className="fields">
              <label htmlFor="emailId" className="f1">Email Id:</label> <br></br>
              <input type="email" id="emailId" name="emailId" value={emailId} onChange={handleInputChange} className="form-control" />
            </div>
              <div className="fields">
              <label htmlFor="permanentAddress" className="f1">Permanent Address:</label> <br></br>
              <input type="text" id="permanentAddress" name="permanentAddress" value={permanentAddress} onChange={handleInputChange} className="form-control" />
            </div>
              <div className="fields">
              <label htmlFor="correspondingAddress" className="f1">Corresponding Address:</label> <br></br>
              <input type="text" id="correspondingAddress" name="correspondingAddress" value={correspondingAddress} onChange={handleInputChange} className="form-control" />
            </div>
              <div className="fields">
              <label htmlFor="religion" className="f1">Religion:</label>
              <select id="religion" name="religion" value={religion} onChange={handleInputChange} className="form-select">
                <option value="hindu">Hindu</option>
                <option value="religion2">Religion 2</option>
                <option value="religion3">Religion 3</option>
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

export default PersonalDetails;
