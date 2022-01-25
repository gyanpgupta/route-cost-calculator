export const DATA = "DATA";
export const SET_LAT = "SET_LAT";
export const SET_DATA = "SET_DATA";

export const Inputdata = (payload) => ({ type: DATA, payload: payload });
export const setLatLon = (payload) => ({ type: SET_LAT, payload: payload });
export const setData = (payload) => ({ type: SET_DATA, payload: payload });


