import React from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default ({to = '', text, className, target, onClick}) => {
  if(to && (to.indexOf('http') !== -1 || to.indexOf('https') !== -1 || to.indexOf('www') !== -1 )) {
    return (
      <NavItem onClick={onClick}>
        <a className={className} href={to} target={target}>{text}</a>
      </NavItem>
    )
  }
  return (
    <NavItem onClick={onClick}>
      <Link className={className} to={to}>{text}</Link>
    </NavItem>
  )
}