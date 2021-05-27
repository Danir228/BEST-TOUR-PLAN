import React from "react";

import "./map.scss";

import map from "./images/map.svg";

const Map = () => {
    return (
        <div className="map">
            <img className="map__image" src={map} alt="map" />
            <div className="map__right_button">
               <strong className="map__plus">+</strong>
               <strong className="map__minus"> _</strong>
            </div>
            <div className="map__left_button">
                <strong className="map__left_item">Sattlite</strong>
                <strong className="map__left_item">Aerial</strong>
                <strong className="map__left_item">Street View</strong>
            </div>
        </div>
    )
}

export default Map;