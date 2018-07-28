import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    root: {
        height: 600
    }
});

class Page1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Paper classes={{root: this.props.classes.root}} elevation={1}>
                test
            </Paper>
        );
    }
}

export default withStyles(style)(Page1);

