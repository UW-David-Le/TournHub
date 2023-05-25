import React from 'react';
import Button from 'react-bootstrap/Button';

const But = ({ label, onClick, color }) => {
  return (
    <Button className="btn" variant={color} onClick={onClick}>{label}</Button>
  )
};

export default But;