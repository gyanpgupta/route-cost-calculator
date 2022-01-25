import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
import { connect } from 'react-redux';
export class Maps extends React.Component {
    render() {
        const mapStyles = {
            width: "100%",
            height: "80%",
        };
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 22.717884, lng: 75.833349 }}
            >

                <Marker
                    position={{
                        lat: this.props.cityData.waypoints && this.props.cityData.waypoints[0].location[1],
                        lng: this.props.cityData.waypoints && this.props.cityData.waypoints[0].location[0]
                    }} />
                <Marker
                    position={{
                        lat: this.props.cityData.waypoints && this.props.cityData.waypoints[1].location[1],
                        lng: this.props.cityData.waypoints && this.props.cityData.waypoints[1].location[0]
                    }} />
                <Marker />
            </Map >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cityData: state.cityData
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAx-Il7Iw0naSht_zCtsUrnPiwuDcyiHeM',
})(connect(mapStateToProps)(Maps));