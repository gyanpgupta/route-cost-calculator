import axios from "axios";
import { setLatLon, setData } from "../Actions/actions";

export const getLatLon = (city) => async (dispatch, getState) => {
    const city1 = city.start === '' ? city.end : city.start
    const city2 = city.end === '' ? city.start : city.end
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=b841d1ce2644a8991e7d8bea9907255e`);
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=b841d1ce2644a8991e7d8bea9907255e`);
        dispatch(setLatLon([response.data.coord, res.data.coord]));

    } catch (err) {
        console.log(err);
    }
}

export const getData = (lat, driving) => async (dispatch, getState) => {
    try {
        const response = await axios.get(`http://router.project-osrm.org/route/v1/${driving}/${lat[0].lon},${lat[0].lat};${lat[1].lon},${lat[1].lat}?overview=false`);
        dispatch(setData(response.data));

    } catch (err) {
        console.log(err);
    }
}