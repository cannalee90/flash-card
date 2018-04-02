import React from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default (props) => {
  const {
    to,
    text,
    className,
   } = props;
  return (
    <NavItem>
      <Link className={className} to={to}>{text}</Link>
    </NavItem>
  )
}