const INITIAL_STATE = {
    value: 'INITIAL_STATE'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'VALUED_CHANGED':
            return { value: action.payload }
            break;
        default:
            return state
            break;

    }
}