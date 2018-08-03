const pagesDefaultState = {
    currentPage: '4B'
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