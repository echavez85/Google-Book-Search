import React from 'react';
import './style.css';

function Delete(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default Delete;