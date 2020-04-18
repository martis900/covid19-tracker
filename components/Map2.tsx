//@ts-nocheck

import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { API } from '../pages/index'
const Map = dynamic(
    () => import('react-leaflet/lib/Map'),
    { ssr: false }
)
const Marker = dynamic(
    () => import('react-leaflet/lib/Marker'),
    { ssr: false }
)
const Popup = dynamic(
    () => import('react-leaflet/lib/Popup'),
    { ssr: false }
)
const TileLayer = dynamic(
    () => import('react-leaflet/lib/TileLayer'),
    { ssr: false }
)
const Circle = dynamic(
    () => import('react-leaflet/lib/Circle'),
    { ssr: false }
)
const Rectangle = dynamic(
    () => import('react-leaflet/lib/Rectangle'),
    { ssr: false }
)
const FeatureGroup = dynamic(
    () => import('react-leaflet/lib/FeatureGroup'),
    { ssr: false }
)
const LayerGroup = dynamic(
    () => import('react-leaflet/lib/LayerGroup'),
    { ssr: false }
)

const center = [51.505, -0.09]
const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
]

const MyPopupMarker = ({ displayName, long, lat }: API) => (
    <Marker position={[lat, long]}>
        <Popup>{displayName}</Popup>
    </Marker>
)

const MyMarkersList = ({ markers }: { markers: API }) => {
    return markers.areas.map((item: API) => (
        <MyPopupMarker key={item.displayName} {...item} />
    ))
}

export default class SimpleExample extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 1
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div style={{ height: '100%', width: '100vh' }}>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'

                    />


                    <MyMarkersList markers={this.props.data} />

                </Map>
            </div>
        );
    }
}
