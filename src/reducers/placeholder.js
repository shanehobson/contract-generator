const defaultReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CHANGE_SPINNER_COLOR':
            return {
                defaultValue: 1
            };
        default:
            return state;
    }
};

export default defaultReducer;