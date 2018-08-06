import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import doc from '../documents/contract';


const style = theme => ({
    root: {
        height: 720,
        marginLeft: 10
    },
    docContainer: {
        height: 720,
        overflow: 'scroll'
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
                <div style={{ height: 720, overflow: 'scroll', padding: 20 }}>
                    {doc}
                </div>
            </Paper>
        );
    }
}

WorkingDocument.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(style)(WorkingDocument);
