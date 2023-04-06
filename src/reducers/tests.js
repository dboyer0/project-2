import { TEST_TOGGLE } from "../actions/tests";

const initState = {
    isVisible: false
};

const tests = (state = initState, action) => {

    const {
        isVisible
    } = action
    
    switch(action.type){
        case TEST_TOGGLE:
            return {
                isVisible: !isVisible
            }
        default:
            return state;
    }
}

export default tests;