import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import '../styles/Dashboard.css';
import Page1 from './Page1';
import WorkingDocument from './WorkingDocument';

class Dashboard extends Component {

  render() {
    return (
      <div className='Dashboard-container'>
        <Grid container justify='center'>
          <Grid item sm={6}>
            <Page1 />
          </Grid>
          <Grid item sm={5}>
            <WorkingDocument />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;



// <Grid container>
//         <Grid item sm={6}>
//           <div className='HomePage-container'>
//             HomePage Component placeholder text
//           </div>
//         </Grid>
//         <Grid item sm={6}>
//         </Grid>
//       </Grid>