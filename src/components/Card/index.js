import React from 'react'

import "./index.css";

const Card = ({ icon, footer, header, body }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <div className="card-right-side">
          <div className="card-header">{header}</div>
          <div className="card-body">{body}</div>
        </div>
        <div className="card-footer">{footer}</div>
      </div>
    </div>
  );
};

export default Card;
