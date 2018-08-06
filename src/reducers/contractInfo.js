const contractInfoDefaultState = {
    devType: '',
    customerType: '',
    devInfo: {
        name: '',
        street: '',
        city: '',
        USstate: '',
        zip: ''
    },
    customerInfo: {
        name: '',
        street: '',
        city: '',
        USstate: '',
        zip: '',
    },
    description: '',
    specs: '',
    paymentTerms: '',
    sigInfoDev: {
        sigName: '',
        sigTitle: ''
    },
    sigInfoCustomer: {
        sigName: '',
        sigTitle: ''
    }
};

const contractInfoReducer = (state = contractInfoDefaultState, action) => {
    switch(action.type) {
        case 'SET_DEV_TYPE':
            return {
                ...state,
                devType: action.devType
            };
        case 'SET_DEV_INFO':
            return {
                ...state,
                devInfo: {
                    name: action.devInfo.name,
                    street: action.devInfo.street,
                    city: action.devInfo.city,
                    USstate: action.devInfo.devUSstate,
                    zip: action.devInfo.zip
                }
            };
        case 'SET_CUSTOMER_TYPE':
            return {
                ...state,
                customerType: action.customerType
            };
        case 'SET_CUSTOMER_INFO':
            return {
                ...state,
                customerInfo: {
                    name: action.customerInfo.name,
                    street: action.customerInfo.street,
                    city: action.customerInfo.city,
                    USstate: action.customerInfo.customerUSstate,
                    zip: action.customerInfo.zip,
            }
            };
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.description
            };
        case 'SET_SPECS':
            return {
                ...state,
                specs: action.specs
            };
        case 'SET_PAYMENT_TERMS':
            return {
                ...state,
                paymentTerms: action.paymentTerms
            };
        case 'SET_SIG_INFO_DEV':
            return {
                ...state,
                sigInfoDev: {
                    sigName: action.sigName,
                    sigTitle: action.sigTitle
                }            
            };
        case 'SET_SIG_INFO_CUSTOMER':
            return {
                ...state,
                sigInfoCustomer: {
                    sigName: action.sigName,
                    sigTitle: action.sigTitle
                }            
            };
        default:
            return state;
    }
};

export default contractInfoReducer;