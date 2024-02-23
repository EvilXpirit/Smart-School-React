import React, { useState } from 'react';

const Dropdown = ({ label, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={handleClick}>{label}</button>
      {isOpen && (
        <ul>
          <li>
            <a href={link}>Option 1</a>
            <a href={link}>Option 2</a>
          </li>
          {/* Add more dropdown options here */}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
