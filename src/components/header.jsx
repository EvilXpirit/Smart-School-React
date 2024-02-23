import React from 'react';
import notificationIcon from './icons/bell.png';
import searchIcon from './icons/search.png';
import HomeIcon from './icons/home.png';
import gridIcon from './icons/grid.png';


const Header = ({
    underImplementation,
    trackProcessLink,
    HomeIcon: home,
    notificationIcon: notification, 
    searchIcon: customSearchIcon, 
    gridIcon: grid,
  }) => {
    return (
      <header className="header">
        <h1>SMART SCHOOL</h1>
        <div className="header-right">
          {underImplementation && (
            <button className="btn">Under Implementation Track Progress</button>
          )}
          <div><button className="help">Get Help</button></div>
          {/* <Dropdown className = "drop" label="Get Help" link={getHelpLink}>
            {/* Add dropdown options here */}
          {/* </Dropdown> */} 
          <div class="link">
          <a href={trackProcessLink}>AY: 2023-2024</a>
          </div>
          <span className="header-icons">
            <img className='home' src={HomeIcon} alt="Home" />
            <img src={notificationIcon} alt="Notification" />
            <img src={searchIcon} alt="Search" />
            <img src={gridIcon} alt="Grid" />
          </span>
        </div>
      </header>
    );
  };
  
  export default Header;
  