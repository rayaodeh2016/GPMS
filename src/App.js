
import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Leading_page/Header/Navbar';
import Main from './Components/Leading_page/Main/Main';
import 'aos/dist/aos.css';
import SomeProjects from './Components/Leading_page/SomeProject/index_some';
import AllProjects from './Components/Leading_page/AllProjects/SeeAllProjects/index.AllP';
import SideBar from './Components/Students/SideBar/SideBar_Student'
import ChatShell from './Components/Chat/chat';
import Super_Team_card from './Components/Supervisor/Team_Card/index';
import Super_Side from './Components/Supervisor/SuperVisor_Side/index';
import Student_Profile from './Components/Students/Student_Profile/Student_Profile';
import Super_Team from './Components/Supervisor/SuperVisor_Team_std/Supervisor_profle_std';
import CSE_supervisors from './Components/Supervisor/Supervisor_name/Super_Card_name';
import Our_Group from './Components/Students/OurGroup_Team/OurGroup';
import Std_Dashbord from './Components/Students/DashBord_Student/DashBord';
import Edit_Profile from './Components/Edit_Profile/Edit_Profile';
import Accepted_EX from './Components/Examiner/Accepte_Examination';
import Login from './Components/Leading_page/login/login';
function App() {


  return (
    <Router>
 <Login/>
    </Router>
  );
}

export default App;