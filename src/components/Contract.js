import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Contract extends Component {
    constructor(props) {
        console.log('Entered Contract constructor');
        super(props);
    };

    render() {
        const { 
            devType,
            customerType, 
            devInfo,
            customerInfo,
            description,
            specs,
            paymentTerms,
            sigInfoDev,
            sigInfoCustomer
        } = this.props;
        return (
            <div id='workingDocContainer'>
                <div id='Contract-ContractTitleContainer'>
                    <h3 id='Contract-ContractHeader'><strong>AGREEMENT FOR WEB DEVELOPMENT SERVICES</strong></h3>
                </div>
                <h4><strong>I. PARTIES</strong></h4>
                <p>
                This Agreement for Web Development Services is an agreement between {devInfo.name}, whose {devType === 'business' && 'registered'} address is 
                {devInfo.street}, {devInfo.city}, {devInfo.USstate}, {devInfo.zip} (<strong>Developer</strong>),
                and {customerInfo.name}, whose {customerType === 'business' && 'registered'} address is
                {customerInfo.street}, {customerInfo.city}, {customerInfo.USstate}, {customerInfo.zip} (<strong>Customer</strong>). 
                </p>
            </div>
        );
    }
    
};

Contract.propTypes = {
    devType: PropTypes.string.isRequired,
    customerType: PropTypes.string.isRequired,
    devInfo: PropTypes.object.isRequired,
    customerInfo: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    specs: PropTypes.string.isRequired,
    paymentTerms: PropTypes.string.isRequired,
    sigInfoDev: PropTypes.object.isRequired,
    sigInfoCustomer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    devType: state.contractInfo.devType,
    customerType: state.contractInfo.customerType,
    devInfo: state.contractInfo.devInfo,
    customerInfo: state.contractInfo.customerInfo,
    description: state.contractInfo.description,
    specs: state.contractInfo.specs,
    paymentTerms: state.contractInfo.paymentTerms,
    sigInfoDev: state.contractInfo.sigInfoDev,
    sigInfoCustomer: state.contractInfo.sigInfoCustomer
});


export default connect(mapStateToProps)(Contract);

