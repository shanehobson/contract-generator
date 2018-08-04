import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { changePage } from '../../actions/pages';

const style = theme => ({
    root: {
        height: 720
    }
});

class Page6 extends Component {
    constructor(props) {
        super(props);
    }

    handlePreviousPageButtonClick = () => {
        this.props.changePage(5);
    }

    // handleNextPageButtonClick = () => {
    //     this.props.changePage(6);
    // }

    render() {
        return (
            <Paper classes={{root: this.props.classes.root}} elevation={1}>
                Page 6
                <button onClick={this.handlePreviousPageButtonClick}>Previous Page</button>
            </Paper>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber))
});

export default connect(undefined, mapDispatchToProps)(withStyles(style)(Page6));

