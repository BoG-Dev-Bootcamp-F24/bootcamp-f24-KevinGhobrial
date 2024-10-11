import React from 'react';
import './Train.css'; 

const Train = ({ train }) => {
  return (
    <li className="train">
      {train.LINE} to {train.DESTINATION}
    </li>
  );
};

export default Train;
