import React, { Component, useState } from 'react'

import 'react-responsive-modal/styles.css';

import '../AllProjects/Style/Allprojects.css';

import Tablep from './Table_Somep';
function BasicTable() {
  const H1_S = { textAlign: 'center', paddingBottom: "30px" }
  return (
    <div style={{ paddingTop: "150px" }}>
      <h1 className="card-title" style={H1_S}> Projects <i class="far fa-lightbulb"></i> </h1>
      <Tablep />
    </div>
  );
}
export default BasicTable;

