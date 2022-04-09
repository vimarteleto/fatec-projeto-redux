import { createStore, combineReducers } from 'redux';


const reducers = combineReducers({
    numeros: function (state, action) {

        if (action.type == 'NUM_ALTERADO') {
            return {
                ...state,
                num: action.payload
            }
        }

        return {
            num: 0
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;
