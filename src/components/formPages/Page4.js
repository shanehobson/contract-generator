import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { changePage } from '../../actions/pages';
import { setCustomerType } from '../../actions/contractInfo';

const styles = theme => ({
    root: {
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Page4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            customerType: '',
            nextButtonDisabled: true
        }
    }

    handleCustomerTypeChangeIndividual = () => {
        this.setState(() => ({ 
            customerType: 'individual',
            nextButtonDisabled: false
        }));
    }

    handleCustomerTypeChangeBusiness = () => {
        this.setState(() => ({ 
            customerType: 'business',
            nextButtonDisabled: false
        }));
    }

    handlePreviousPageButtonClick = () => {
        if (this.props.devType === 'individual') {
            this.props.changePage('3A');
        } else {
            this.props.changePage('3B');
        }
    }

    handleNextPageButtonClick = () => {
        if (this.state.customerType === 'individual') {
            this.props.changePage('4A');
        } else {
            this.props.changePage('4B');
        }
        this.props.setCustomerType(this.state.customerType);
    }

    render() {
        const { error, customerType, nextButtonDisabled } = this.state;
        const { classes, devType } = this.props;
        return (
            <Paper classes={{root: classes.root}} elevation={1}>
                <FormControl error={error} component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">
                        <Typography>
                        Is your client/customer an individual or a registered business entity?
                        </Typography>
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                            <Checkbox checked={customerType==='individual'} onChange={this.handleCustomerTypeChangeIndividual} value="individual" />
                            }
                            label="Individual"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={customerType==='business'} onChange={this.handleCustomerTypeChangeBusiness} value="business" />
                            }
                            label="Business"
                        />
                    </FormGroup>
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
                        disabled={nextButtonDisabled}
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
    setCustomerType: (customerType) => dispatch(setCustomerType(customerType))
});

const mapStateToProps = (state) => ({
    devType: state.contractInfo.devType,
    customerType: state.contractInfo.customerType
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page4));

//Use this if I want to display an error in the future: <FormHelperText>You can display an error</FormHelperText>