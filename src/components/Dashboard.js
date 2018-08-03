import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import '../styles/Dashboard.css';
import '../styles/Page1.css';
import '../styles/LayoutStyles.css';
import Page1 from './formPages/Page1';
import Page2 from './formPages/Page2';
import Page3A from './formPages/Page3A';
import Page3B from './formPages/Page3B';
import Page4 from './formPages/Page4';
import Page4A from './formPages/Page4A';
import Page4B from './formPages/Page4B';
import Page5 from './formPages/Page5';
import WorkingDocument from './WorkingDocument';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Dashboard-container'>
        <Grid container justify='center'>
          <Grid item sm={4}>
            {this.props.pageNumber == 1 && <Page1 />}
            {this.props.pageNumber == 2 && <Page2 />}
            {this.props.pageNumber == '3A' && <Page3A />}
            {this.props.pageNumber == '3B' && <Page3B />}
            {this.props.pageNumber == 4 && <Page4 />}
            {this.props.pageNumber == '4A' && <Page4A />}
            {this.props.pageNumber == '4B' && <Page4B />}
            {this.props.pageNumber == 5 && <Page5 />}
            {this.props.pageNumber == 6 && <Page6 />}
          </Grid>
          <Grid item sm={4}>
            <WorkingDocument />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pageNumber: state.pages.currentPage
});

export default connect(mapStateToProps)(Dashboard);



// <Grid container>
//         <Grid item sm={6}>
//           <div className='HomePage-container'>
//             HomePage Component placeholder text
//           </div>
//         </Grid>
//         <Grid item sm={6}>
//         </Grid>
//       </Grid>