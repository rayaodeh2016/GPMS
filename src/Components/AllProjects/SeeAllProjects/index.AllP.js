import React, { Component, useState } from 'react'

import 'react-responsive-modal/styles.css';

import '../Style/Allprojects.css';

import Tablep from './All_Projects';

function BasicTable() {
  const H_s = { textAlign: 'center', paddingTop: '130px' }
  return (
    <div>
      <h1 className="card-title" style={H_s}> All Projects <i class="far fa-lightbulb"></i> </h1>
      <div>
        <Tablep/>
      </div>
    </div>
  );
}

export default BasicTable;

