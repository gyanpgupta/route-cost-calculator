import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Inputdata } from "../Actions/actions";
import { useState, useEffect } from "react";
import { getData, getLatLon } from '../Services/api';

const Calculator = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('Van');
    const [radio, setRadio] = useState('manually');
    let [distance, setDistance] = useState(0);
    const latitude = useSelector(state => state.latlon);
    const cityData = useSelector(state => state.cityData);

    useEffect(() => {
        dispatch(getData(latitude, value));
    }, [latitude]);
    const data = useSelector(state => state.data);

    const onValueChange = (e) => {
        if (Number(e.target.value)) {
            setDistance(e.target.value)
        }
        else {
            dispatch(Inputdata({ ...data, [e.target.name]: e.target.value }));
        }
    }

    const addData = () => {
        dispatch(getLatLon(data))
        // dispatch(getLatLon(data))
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    const onChangeValue = (e) => {
        console.log(e.target.value)
        setRadio(e.target.value);
    }
    return (
        <div>
            <input type="radio" name="radio" value="manually" onChange={(e) => onChangeValue(e)} />{' '}
            <label >Keep distance manually</label><br />
            <input type="radio" name="radio" value="auto" onChange={(e) => onChangeValue(e)} />{' '}
            <label >Distance by city</label><br /><br />

            <form onSubmit={() => addData()}>
                {radio === 'manually' ?
                    <div>
                        Distance: <input type="number" placeholder="distance" onChange={(e) => onValueChange(e)} />
                    </div>
                    :
                    <>
                        Origin: <input name="start" type="text" placeholder="origin" onChange={(e) => onValueChange(e)} /><br /><br />
                        Destination<input name="end" type="text" placeholder="destination" onChange={(e) => onValueChange(e)} /><br /><br />
                        <Button variant="primary" onClick={() => addData()}>Find</Button><br />
                    </>
                }

            </form><br />
            <p>Source of transportation</p>
            <select onChange={(e) => handleChange(e)}>
                <option value="Van">Van fees 0.25€/km</option>
                <option value="Truck">Truck fees 0.50€/km</option>
                <option value="car">Car fees 0.70€/km</option>
                <option value="bike">Bike fees 0.90€/km</option>
            </select><br /><br />
            {
                radio === 'manually'
                    ? value === 'Van'
                        ? `Total cost ${distance * 0.25} €/km` : value === 'Truck' ? `Total cost ${distance * 0.50} €/km` : value === 'car' ? `Total cost ${distance * 0.70} €/km` : value === 'bike' ? `Total cost ${distance * 0.90} €/km` : ''
                    :
                    cityData == '' ? '' :
                        value === 'Van' ?
                            <div>Total cost: {(Math.round(cityData.routes[0].distance) / 1000).toFixed(1) * 0.25} €/km</div>
                            : value === 'Truck' ?
                                <div>Total cost: {(Math.round(cityData.routes[0].distance) / 1000).toFixed(1) * 0.50} €/km</div>
                                : value === 'car' ?
                                    <div>Total cost: {(Math.round(cityData.routes[0].distance) / 1000).toFixed(1) * 0.70} €/km</div>
                                    : value === 'bike' ?
                                        <div>Total cost: {(Math.round(cityData.routes[0].distance) / 1000).toFixed(1) * 0.90} €/km</div> : ""


            }

        </div>
    )
}
export default Calculator;
