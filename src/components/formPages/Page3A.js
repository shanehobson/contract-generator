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
import { setDevInfo } from '../../actions/contractInfo';

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

class Page3A extends Component {
    constructor(props) {
        console.log('Entered 3A constructor');
        super(props);
        this.state = {
            open: false,
            error: '',
            firstName: this.props.devInfo.firstName ? this.props.devInfo.firstName : '',
            lastName: this.props.devInfo.lastName ? this.props.devInfo.lastName : '',
            street: this.props.devInfo.street ? this.props.devInfo.street : '',
            city: this.props.devInfo.city ? this.props.devInfo.city : '',
            city: this.props.devInfo.devUSstate ? this.props.devInfo.devUSstate : '',
            zip: this.props.devInfo.zip ? this.props.devInfo.zip : '',
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
        this.setState({ devUSstate: e.target.value });
    }

    handleZipChange = e => {
        this.setState({ zip: e.target.value });
    }

    handlePreviousPageButtonClick = () => {
        this.props.changePage(2);
    }

    handleNextPageButtonClick = () => {
        if (this.state.firstName &&
            this.state.lastName &&
            this.state.street &&
            this.state.city &&
            this.state.devUSstate &&
            this.state.zip) {   
            const { firstName, lastName, street, city, devUSstate, zip } = this.state;
            this.props.setDevInfo({
                firstName, lastName, street, city, devUSstate, zip
            });
            this.props.changePage(4);
        } else {
            this.setState({
                error: 'Please complete all form fields before proceeding.'
            })
        }
    }

    render() {
        const { classes, USstates } = this.props;
        const { firstName, lastName, street, city, devUSstate, zip, nextButtonDisabled } = this.state;
        
        return (
            <Paper classes={{root: classes.root}} elevation={1}>
                <div>{this.props.devInfo.firstName}</div>
                <div>{this.props.devInfo.lastName}</div>
                <div className='FormHeaderContainer'>
                    <Typography variant='title'>
                        Developer Information
                    </Typography>
                </div>
                <div className='FormHeaderContainer'>
                    <Typography variant='subheading'>
                        Please enter the following information about you, the Developer. This will be your official name and address for the contract.
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
                                placeholder={'First Name'}
                                onChange={this.handleFirstNameChange}
                                value={this.state.firstName}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input 
                                placeholder="Last Name"
                                onChange={this.handleLastNameChange}
                                value={this.state.lastName}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="Street Address"
                                onChange={this.handleStreetChange}
                                value={this.state.street}
                            >
                            </Input>
                        </div>
                        <div className='FormInputContainer'>
                            <Input
                                placeholder="City"
                                onChange={this.handleCityChange}
                                value={this.state.city}
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
                                value={devUSstate || ''}
                                onChange={this.handleChange}
                                IconComponent={'union'}
                                inputProps={{
                                name: 'devUSstate',
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
                                value={this.state.zip}
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
}

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageNumber) => dispatch(changePage(pageNumber)),
    setDevInfo: (devInfo) => dispatch(setDevInfo(devInfo))
});

const mapStateToProps = (state) => ({
    USstates: state.USstates,
    devInfo: state.contractInfo.devInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page3A));



//<FormControl component="fieldset" styles={{ margin: 20 }}>