import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { changePage } from '../../actions/pages';

const style = theme => ({
    root: {
        minHeight: 720
    },
    button: {
        margin: theme.spacing.unit
    }
});

class Page9 extends Component {
    constructor(props) {
        console.log('Entered 9 constructor');
        super(props);
    };

    handleNextPageButtonClick = () => {
        this.props.changePage('2');
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper classes={{root: this.props.classes.root}} elevation={1}>
                <div className='Page1TopDiv'>
                    <Typography variant='title'>
                         Placeholder page
                    </Typography>
                </div>           
            </Paper>
        );
    }
};

Page9.propTypes = {
    classes: PropTypes.object.isRequired,
    changePage: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber))
});

export default connect(undefined, mapDispatchToProps)(withStyles(style)(Page9));

