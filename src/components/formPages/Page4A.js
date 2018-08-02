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
import { setCustomerInfo } from '../../actions/contractInfo';

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
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Page4A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerUSstate: '',
            open: false,
            error: ''
          };
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

    handleFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }

    handleLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }

    handleStreetChange = e => {
        this.setState({ street: e.target.value });
    }

    handleCityChange = e => {
        this.setState({ city: e.target.value });
    }

    handleUSstateChange = e => {
        this.setState({ customerUSstate: e.target.value });
    }

    handleZipChange = e => {
        this.setState({ zip: e.target.value });
    }

    handlePreviousPageButtonClick = () => {
        this.props.changePage(4);
    }

    handleNextPageButtonClick = () => {
        if (this.state.firstName &&
            this.state.lastName &&
            this.state.street &&
            this.state.city &&
            this.state.customerUSstate &&
            this.state.zip) {   
            const { firstName, lastName, street, city, customerUSstate, zip } = this.state;
            this.props.setCustomerInfo({
                firstName, lastName, street, city, customerUSstate, zip
            });
            this.props.changePage(5);
        } else {
            this.setState({
                error: 'Please complete all form fields before proceeding.'
            })
        }
    }

    render() {
        const { classes, USstates } = this.props;
        const { customerUSstate, nextButtonDisabled } = this.state;

        return (
            <Paper classes={{root: classes.root}} elevation={1}>
                <div className='FormHeaderContainer'>
                    <Typography variant='title'>
                        Customer Information
                    </Typography>
                </div>
                <div className='FormHeaderContainer'>
                    <Typography variant='subheading'>
                        Please enter the following information about your client/customer. This will be the client/customer's official name and address for the contract.
                    </Typography>
                </div>
                {
                    this.state.error && (
                        <div className='FormHeaderContainer'>
                            <Typography variant='subheading' style={{ color: 'red'}}>
                               {this.state.error}
                            </Typography>
                        </div>
                    )
                }
                <FormControl component="fieldset" styles={{ margin: 20 }}>
                        <div className='FormInputContainer'>
                            <Input 
                                autoFocus={true}
                                placeholder="First Name"
                                onChange={this.handleFirstNameChange}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input 
                                placeholder="Last Name"
                                onChange={this.handleLastNameChange}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="Street Address"
                                onChange={this.handleStreetChange}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="City"
                                onChange={this.handleCityChange}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-controlled-open-select">State</InputLabel>
                            <Select
                                open={this.state.open}
                                onChange={this.handleUSstateChange}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={customerUSstate}
                                onChange={this.handleChange}
                                IconComponent={'union'}
                                inputProps={{
                                name: 'customerUSstate',
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
                                placeholder="Zip Code"
                                onChange={this.handleZipChange}
                            >
                            </Input>
                        </div>
                </FormControl>
                <div className='PageBottomDiv'>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        className={classes.button}
                        onClick={this.handlePreviousPageButtonClick}
                        >
                        <p className='ButtonText'>Previous</p>
                    </Button>  
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        disabled={false}
                        className={classes.button}
                        onClick={this.handleNextPageButtonClick}
                        >
                        <p className='ButtonText'>Next</p>
                    </Button>  
                </div>
            </Paper>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber)),
    setCustomerInfo: (customerInfo) => dispatch(setCustomerInfo(customerInfo))
});

const mapStateToProps = (state) => ({
    USstates: state.USstates
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page4A));
