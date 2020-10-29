
import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Main from './Components/Main/Main';
import 'aos/dist/aos.css';
import SomeProjects from './Components/SomeProject/index_some';
import AllProjects from './Components/AllProjects/SeeAllProjects/index.AllP';
import SideBar from './Components/SideBar/SideBar_Student'
import ChatShell from './Components/Chat/chat';
import { Label } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import Superv from './Components/Supervisor/index';
import Super_Side from './Components/SideBar/SuperVisor/index';




function App() {


  return (
    <div>
      <Router>
  <Navbar/>
  <Main/>

      </Router>
    </div>
  );
}

export default App;