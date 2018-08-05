import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
        minHeight: 720,
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
        console.log('Entered 4A constructor');
        super(props);

        this.state = {
            open: false,
            error: '',
            name: this.props.customerInfo.name ? this.props.customerInfo.name : '',
            street: this.props.customerInfo.street ? this.props.customerInfo.street : '',
            city: this.props.customerInfo.city ? this.props.customerInfo.city : '',
            customerUSstate: this.props.customerInfo.customerUSstate ? this.props.customerInfo.customerUSstate : '',
            zip: this.props.customerInfo.zip ? this.props.customerInfo.zip : '',
        };
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    };

    handleStreetChange = e => {
        this.setState({ street: e.target.value });
    };

    handleCityChange = e => {
        this.setState({ city: e.target.value });
    };

    handleUSstateChange = e => {
        this.setState({ customerUSstate: e.target.value });
    };

    handleZipChange = e => {
        this.setState({ zip: e.target.value });
    };

    handlePreviousPageButtonClick = () => {
        this.props.changePage('4');
    };

    handleNextPageButtonClick = () => {
        if (this.state.name &&
            this.state.street &&
            this.state.city &&
            this.state.customerUSstate &&
            this.state.zip) {   
            const { name, street, city, customerUSstate, zip } = this.state;
            this.props.setCustomerInfo({
                name, street, city, customerUSstate, zip
            });
            this.props.changePage('5');
        } else {
            this.setState({
                error: 'Please complete all form fields before proceeding.'
            })
        }
    };

    render() {
        const { classes, USstates } = this.props;
        const { name, street, city, customerUSstate, zip, nextButtonDisabled } = this.state;

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
                <div>
                        <div className='FormInputContainer'>
                            <Input 
                                autoFocus={true}
                                placeholder="Full Name"
                                onChange={this.handleNameChange}
                                value={name}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="Street Address"
                                onChange={this.handleStreetChange}
                                value={street}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="City"
                                onChange={this.handleCityChange}
                                value={city}
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
                                value={zip}
                            >
                            </Input>
                        </div>
                </div>
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
};

Page4A.propTypes = {
    classes: PropTypes.object.isRequired,
    changePage: PropTypes.func.isRequired,
    setCustomerInfo: PropTypes.func.isRequired,
    USstates: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber)),
    setCustomerInfo: (customerInfo) => dispatch(setCustomerInfo(customerInfo))
});

const mapStateToProps = (state) => ({
    USstates: state.USstates,
    customerInfo: state.contractInfo.customerInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page4A));
