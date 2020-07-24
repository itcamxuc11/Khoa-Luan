import React, { Component } from 'react'
import AutoComplete from 'react-google-autocomplete';
import key from '../../config/googlemap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default class Search extends Component {
    onSelected = (place) => {
        console.log(place.geometry.location.lat());
    }

    initMap = () => {
        map = new google.maps.Map(this.refs.map.getDOMNode(), {});
    }

    componentDidMount() {
        window.initMap = this.initMap;
        loadJS('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap')
    }

    render() {
        return (
            <div>
                <div className="home-page">
                    <h3 className="search-title">Your favorite food, delivered with Us</h3>
                    <div className="d-flex justify-content-center w-100">
                        <div className="search-box">
                            <div className="d-flex">
                                <div className="marker-icon">
                                    <img src="images/marker.png" />
                                </div>
                                <div className="fl-search">
                                    <AutoComplete onPlaceSelected={this.onSelected} apiKey={key} types={['address']} componentRestrictions={{ country: "VN" }} className="txt-search" placeholder="Địa chỉ" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn-search">Tìm</button>
                        </div>
                    </div>
                </div>
                <div ref="map"></div>
            </div>
        )
    }
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}
