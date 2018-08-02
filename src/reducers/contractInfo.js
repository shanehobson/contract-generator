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
        default:
            return state;
    }
};

export default contractInfoReducer;