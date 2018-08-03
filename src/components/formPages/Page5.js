import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { changePage } from '../../actions/pages';

const style = theme => ({
    root: {
        minHeight: 600
    }
});

class Page5 extends Component {
    constructor(props) {
        super(props);
    }

    handlePreviousPageButtonClick = () => {
        this.props.changePage('4');
    }

    // handleNextPageButtonClick = () => {
    //     this.props.changePage('6');
    // }

    render() {
        const { classes } = this.props;
        return (
            <Paper classes={{root: classes.root}} elevation={1}>
                Page 5
                <button onClick={this.handlePreviousPageButtonClick}>Previous Page</button>
            </Paper>
        );
    }
};

Page5.propTypes = {
    classes: PropTypes.object.isRequired,
    changePage: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber))
});

export default connect(undefined, mapDispatchToProps)(withStyles(style)(Page5));

