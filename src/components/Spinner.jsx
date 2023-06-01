import React from 'react';

function Spinner() {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <i className="fa-solid fa-spinner fa-spin" style={{ color: "#ffffff" }}></i>
      </div>
    </div>
  );
}

export default Spinner;
