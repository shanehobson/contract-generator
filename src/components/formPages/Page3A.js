import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { changePage } from '../../actions/pages';

const styles = theme => ({
    root: {
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing.unit * 2,
    },
    PageFormInput: {
        margin: 20
    }
});

class Page3A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            open: false,
          };
    }

    handlePreviousPageButtonClick = () => {
        this.props.changePage(2);
    }

    handleNextPageButtonClick = () => {
        this.props.changePage(4);
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleClose = () => {
    this.setState({ open: false });
    };
    
    handleOpen = () => {
    this.setState({ open: true });
    };

    render() {
        const { classes, USstates } = this.props;
        console.log(USstates);
        return (
            <Paper classes={{root: classes.root}} elevation={1}>
                <div className='FormHeaderContainer'>
                    <Typography variant='title'>
                        Developer Information
                    </Typography>
                </div>
                <div className='FormHeaderContainer'>
                    <Typography variant='subheading'>
                        Please enter the following information about you, the developer. This will be your official name and address for the contract.
                    </Typography>
                </div>
                <FormControl component="fieldset" styles={{ margin: 20 }}>
                        <div className='FormInputContainer'>
                            <Input 
                                autoFocus={true}
                                placeholder="First Name"
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input 
                                autoFocus={true}
                                placeholder="Last Name"
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="Street Address">
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="City">
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-controlled-open-select">State</InputLabel>
                            <Select
                                open={this.state.open}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={this.state.age}
                                onChange={this.handleChange}
                                IconComponent={'union'}
                                inputProps={{
                                name: 'states',
                                id: 'controlled-open-select',
                                }}
                            >
                            {
                                USstates.USstates.map(USstate => (
                                    <MenuItem key={USstate.abbreviation} value={USstate.abbreviation}>{USstate.name}</MenuItem>
                                ))
                            
                            }
                            </Select>
                            </FormControl>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="Zip Code">
                            </Input>
                        </div>
                </FormControl>
            </Paper>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber))
});

const mapStateToProps = (state) => ({
    USstates: state.USstates
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page3A));

// <InputLabel>
// <Typography variant='subheading'>
//     Developer's Full Name
// </Typography>
// </InputLabel>

//debugging alex

