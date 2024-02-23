import React, { useState } from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
// import RegistrationForm from './components/RegistrationForm';
import './components/css/header.css';
import './components/css/navbar.css';
import './components/css/registrationform.css';
import './components/css/DetailsForm.css';
import DetailsForm from './components/Detailsform';
import Home from './components/dashboard/home';
// import Sidebar from './components/dashboard/sidebar';
import './components/dashboard/dashboard.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    // Add more fields as needed
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }

  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="App">
      <Header 
        underImplementation={true} 
        trackProcessLink="https://..." 
        getHelpLink="https://..." 
        notificationIcon="path/to/notification.svg"
        searchIcon="path/to/search.svg" 
        menuIcon="path/to/menu.svg" 
        loginIcon="path/to/login.svg" 
      />
  <Navbar onDashboardButtonClick={toggleDashboard} />
      {showDashboard && <Home />}
      <main>
        <DetailsForm />
        <hr />
      </main>
    </div>
  );
}

export default App;
