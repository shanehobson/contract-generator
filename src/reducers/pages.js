const pagesDefaultState = {
    currentPage: '1'
};

const pagesReducer = (state = pagesDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE':
            return {
                currentPage: action.pageNumber
            };
        default:
            return state;
    }
};

export default pagesReducer;