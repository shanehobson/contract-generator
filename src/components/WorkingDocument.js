import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    root: {
        minHeight: 600,
        marginLeft: 10
    }
});

class WorkingDocument extends Component {
    constructor(props) {
        console.log('Entered WorkingDocument constructor')
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

WorkingDocument.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(style)(WorkingDocument);
