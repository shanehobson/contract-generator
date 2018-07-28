import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Header = () => (
    <div className='Header-headerContainer'>
        <Grid container direction='column' justify='space-around' alignItems='center' className='Header-gridContainer'>
            <Grid item>
                <Typography variant='display3' color='primary'>
                    Lorem Ipsum Dolor
                </Typography>
            </Grid>
        </Grid>
    </div>
  );
  
export default Header;