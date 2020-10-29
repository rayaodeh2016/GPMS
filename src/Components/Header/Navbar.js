import React from 'react';

import { useEffect, useState } from 'react';
import { Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {

  const [Table_Value, setitems] = useState([
   
    { "id": 1, "href": "#slider", "icon": "fas fa-home", "text": "Home" },
    { "id": 2, "href": "#overview", "icon": "fas fa-search", "text": " Overview" },
    { "id": 3, "href": "#our", "icon": "fas fa-users", "text": "About Us" },
    { "id": 4, "href": "#project", "icon": "far fa-lightbulb", "text": "Projects" },
    { "id": 5, "href": "#contact", "icon": "fas fa-envelope-open-text", "text": "Contact Us " },
    { "id": 6, "href": "/login", "icon": "fas fa-sign-in-alt", "text": "Sign in" },
  ])

  const TableList = Table_Value.map(Value => {
    return (
      <li><a key={Value.id} href={Value.href}><i className={Value.icon}></i><span> {Value.text}</span></a> </li>

    )
  });
  return (
    <div >
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo"> GPMS <i class="fas fa-graduation-cap" style={{ paddingLeft: "10px" }}></i>
        </div>
        <ul className="links">
          {TableList}
        </ul>
        <Label for="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </Label>


      </nav>
    </div>


  )
}

export default NavBar;