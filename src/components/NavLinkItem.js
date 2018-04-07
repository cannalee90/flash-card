import React from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default (props) => {
  const {
    to,
    text,
    className,
    target,
  } = props;
  if(to.indexOf('http') !== -1 || to.indexOf('https') !== -1 || to.indexOf('www') !== -1 ) {
    return (
      <NavItem>
        <a className={className} href={to} target={target}>{text}</a>
      </NavItem>
    )
  }
  return (
    <NavItem>
      <Link className={className} to={to}>{text}</Link>
    </NavItem>
  )
}