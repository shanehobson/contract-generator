const pagesDefaultState = {
    currentPage: '6'
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