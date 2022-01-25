import { DATA, SET_LAT, SET_DATA } from '../Actions/actions';
const initialState = {
    data: {
        start: '',
        end: '',
    },
    latlon: [],
    cityData: []
}
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case DATA:
            return {
                ...state,
                data: action.payload,
            }
        case SET_LAT:
            console.log(action.payload)
            return {
                ...state,
                latlon: action.payload,
            }
        case SET_DATA:
            console.log(action.payload)
            return {
                ...state,
                cityData: action.payload,
            }
        default:
            return state;
    }
}
export default reducers;