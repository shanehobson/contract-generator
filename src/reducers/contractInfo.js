const contractInfoDefaultState = {
    
};

const contractInfoReducer = (state = contractInfoDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_DEV_TYPE':
            return {
                ...state,
                devType: action.devType
            };
        default:
            return state;
    }
};

export default contractInfoReducer;