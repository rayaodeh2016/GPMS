
import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Main from './Components/Main/Main';
import 'aos/dist/aos.css';
import SomeProjects from './Components/SomeProject/index_some';
import AllProjects from './Components/AllProjects/SeeAllProjects/index.AllP';
import SideBar from './Components/SideBar/SideBar_Student'
import ChatShell from './Components/Chat/chat';
import Super_Team_card from './Components/Team_Card/index';
import Super_Side from './Components/SideBar/SuperVisor_Side/index';
import Student_Profile from './Components/Student_Profile/Student_Profile';
import Super_Team from './Components/SuperVisor_Team_std/Supervisor_profle_std';
import CSE_supervisors from './Components/Supervisor_name/Super_Card_name';
import Our_Group from './Components/OurGroup_Team/OurGroup';
import Std_Dashbord from './Components/DashBord_Student/DashBord';
import Edit_Profile from './Components/Edit_Profile/Edit_Profile';
import A_EX from './Components/Examiner/Accepte_Examination';
function App() {
  

  return (
    <Router>
<Navbar/>
<Main/>

    </Router>
  );
}

export default App;