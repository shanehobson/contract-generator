const contractInfoDefaultState = {
    
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
                    firstName: action.devInfo.firstName,
                    lastName: action.devInfo.lastName,
                    street: action.devInfo.street,
                    city: action.devInfo.city,
                    USstate: action.devInfo.devUSstate,
                    zip: action.devInfo.zip,
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
                firstName: action.customerInfo.firstName,
                lastName: action.customerInfo.lastName,
                street: action.customerInfo.street,
                city: action.customerInfo.city,
                USstate: action.customerInfo.customerUSstate,
                zip: action.customerInfo.zip,
            }
        };
        default:
            return state;
    }
};

export default contractInfoReducer;