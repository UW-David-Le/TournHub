import React from 'react';
import Button from 'react-bootstrap/Button';

const But = ({ label, onClick }) => {
  return (
    <Button className="btn" variant="primary" onClick={onClick}>{label}</Button>
  )
};

export default Button;