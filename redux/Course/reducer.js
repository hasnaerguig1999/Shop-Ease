import COURSES from "../../data/testData"

const initialeState = {
    courses: COURSES
}

const coursesReducer = (state = initialeState, action) => {
    switch (action.type) {
        case 'ADD_NEW_ITEM':
            return {
                ...state,
                courses: [...state.courses, action.payload]
            };
        default:
            return state;
    }
}

export default coursesReducer;