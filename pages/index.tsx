//@ts-ignore

import React, { useState, useMemo, useEffect, useRef } from 'react'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout'
import Link from 'next/link'
import dayjs from 'dayjs'
import DeckGL, { TileLayer, BitmapLayer } from "deck.gl";
import ReactMapGL, { Marker, Popup, StaticMap, Source, Layer, FlyToInterpolator } from 'react-map-gl';
import { getPopulation } from '../assests/countries'

import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line } from 'recharts'

import Chart from '../components/Chart'
import codes from '../assests/codes'

const tileServer = 'https://c.tile.openstreetmap.org/';


export const INITIAL_VIEW_STATE = {
    latitude: 47.65,
    longitude: 7,
    zoom: 4.5,
    maxZoom: 20,
    bearing: 0
};

interface API {
    id: string;
    displayName: string;
    areas: API[];
    totalConfirmed: number;
    totalDeaths: number;
    totalRecovered: number;
    totalRecoveredDelta: number;
    totalDeathsDelta: number;
    totalConfirmedDelta: number;
    lastUpdated: Date;
    lat?: number;
    long?: number;
}

interface IHistoryData {
    hospitalizedWithSymptoms: number;
    intensiveTherapy: number;
    totalHospitalized: number;
    homeInsulation: number;
    totalCurrentlyPositive: number;
    newCurrentlyPositive: number;
    dischargedHealed: number;
    deceased: number;
    totalCases: number;
    tamponi: number;
    sourceUrl: string;
    lastUpdatedAtSource: Date;
    lastUpdatedAtApify: Date;
    readMe: string;
}

interface IProps {
    data: API
    history: any
}

const radius = (opa) => {
    let op = (opa) / 200

    if (op > 100) {
        op = 100
    }
    if (op < 20) {
        op *= 3
    }
    return op
}

const opacity = (opa) => {
    let op = (opa) / 200
    if (op < 0.3) {
        op = 0.3
    }
    return op
}

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFydGlzOTAwIiwiYSI6ImNrMTZtazN4ODBhNGUzbW1yc245dG9nZzYifQ.T2ImKPTOuImP5pW11SXoWg';

function HomePage({ data }: IProps) {
    const [viewport, setViewport]: any = useState({
        width: 400,
        height: 400,
        latitude: 50,
        longitude: 0,
        zoom: 1,
        visibilityConstraints: 1,
    });
    const [type, setType] = useState<'Infected' | 'Deaths' | 'Recovered'>("Infected")

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Layout>
                <div style={{ color: 'white', flexDirection: 'row', display: 'flex', height: '100%' }}>
                    <div style={{ display: 'flex', position: 'relative', height: 'calc(100vh - 112px)', flexDirection: 'column' }}>
                        <h3 style={{ color: 'white', fontFamily: 'Poppins', marginBottom: 0 }}>Coronavirus COVID-19</h3>
                        <h5 style={{ color: 'grey', fontFamily: 'Poppins', marginTop: 0 }}>Global Cases</h5>

                        <DeckGL
                            initialViewState={{
                                longitude: -74.006,
                                latitude: 40.7128,
                                zoom: 12
                            }}
                            width={400}
                            height={400}
                            layers={() => {
                                const { autoHighlight = true, highlightColor = [60, 60, 60, 40] } = this.props;

                                return [
                                    new TileLayer({
                                        pickable: true,
                                        onHover: this._onHover,
                                        autoHighlight,
                                        highlightColor,
                                        opacity: 1,
                                        // https://wiki.openstreetmap.org/wiki/Zoom_levels
                                        minZoom: 0,
                                        maxZoom: 19,

                                        renderSubLayers: props => {
                                            const { x, y, z, bbox } = props.tile;
                                            const { west, south, east, north } = bbox;

                                            return new BitmapLayer(props, {
                                                image: `${tileServer}/${z}/${x}/${y}.png`,
                                                bounds: [west, south, east, north]
                                            });
                                        }
                                    })
                                ];
                            }}
                            controller={true}
                        >
                            {() => {
                                const { x, y, hoveredObject } = this.state;
                                const { sourceLayer, tile } = hoveredObject || {};
                                return (
                                    sourceLayer &&
                                    tile && (
                                        <div className="tooltip" style={{ left: x, top: y }}>
                                            tile: x: {tile.x}, y: {tile.y}, z: {tile.z}
                                        </div>
                                    )
                                );
                            }}
                        </DeckGL>
                    </div>
                </div>
            </Layout>
            {
                useMemo(() => {
                    return <div style={{ height: 'calc(100vh - 41px)', width: '100%', padding: 20, display: 'flex', flexDirection: 'column', background: 'rgb(34,37,41)' }}>
                        <h3 style={{ color: 'white', fontFamily: 'Poppins' }}>Cases Info</h3>

                        <span style={{ justifyContent: 'space-around', width: '100%', display: 'flex' }}>
                            <button onClick={() => setType("Infected")}>Infected</button>
                            <button onClick={() => setType("Deaths")}>Deaths</button>
                            <button onClick={() => setType("Recovered")}>Recovered</button>
                        </span>

                        <ul style={{ margin: 0, paddingLeft: 30, paddingRight: 30, height: '100%', overflowY: 'scroll', scrollBehavior: 'smooth', display: 'flex', flexDirection: 'column' }}>
                            <List data={data} type={type} handleAnimate={(long, lat) => setViewport({ ...viewport, latitude: lat, longitude: long, zoom: 4, transitionInterpolator: new FlyToInterpolator(), })} />
                        </ul>
                    </div>
                }, [data, type])
            }
        </div >
    )
}

function Map({ data, viewport, setViewport }: { data: API, viewport: any, setViewport: any }) {

    const [showPopup, setShowPopup]: any = useState<{ visible: boolean, region?: API, country?: boolean | string }>({ visible: false })


    return (
        <>
            {showPopup.visible === true && <LocationDetails showPopup={showPopup} />}
            <ReactMapGL
                {...viewport}
                width="80vw"
                reuseMaps={false}
                height='calc(100vh - 205px)'
                onViewportChange={setViewport}
                mapStyle={{
                    "version": 8,
                    "sources": {
                        "raster-tiles": {
                            "type": "raster",
                            'tiles': [
                                `https://c.tile.openstreetmap.org/${1}/${2}/${3}.png`
                            ],
                            "tileSize": 256
                        }
                    },
                    "layers": [{
                        "id": "test",
                        "type": "raster",
                        "source": "raster-tiles",
                        "minzoom": 0,
                        "maxzoom": 22
                    }]
                }}
                onClick={(e) => {
                    if (e?.features?.[0]?.properties?.title) {
                        if (data.areas.filter(item => item.displayName === e?.features?.[0]?.properties?.title).length > 0) {
                            setShowPopup({ visible: true, region: data.areas.filter(item => item.displayName === e?.features?.[0]?.properties?.title)[0], country: true })
                        }
                        else {
                            const index: number = data.areas.findIndex(item => item.areas.filter(item2 => item2.displayName === e?.features?.[0]?.properties?.title).length > 0)
                            setShowPopup({ visible: true, region: data.areas[index].areas.filter(item => item.displayName === e?.features?.[0]?.properties?.title)[0], country: data.areas[index].displayName })
                        }
                    }
                    else if (showPopup.visible === true) {
                        setShowPopup({ visible: false, location: null })
                    }
                }}
            >
                <Source id='Countries' type='geojson' data={{
                    'type': 'FeatureCollection',
                    cluster: true,
                    'features': useMemo(() => {
                        return data.areas.reduce((sum, val: API) => {
                            const obj = {
                                type: 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [
                                        val.long,
                                        val.lat
                                    ]
                                },
                                'properties': {
                                    'title': val.displayName,
                                    'icon': 'monument',
                                    'total': val.totalConfirmed
                                }
                            }
                            sum = !!sum ? [...sum, obj] : [obj]
                            return sum
                        }, [])
                    }, [data])
                }}>
                    <Layer
                        {...{
                            'id': 'points',
                            'type': 'circle',
                            'source': 'points',
                            paint: {
                                'circle-radius': [
                                    'interpolate', ['linear'],
                                    ['get', 'total'],
                                    1000, 5,
                                    5000, 10,
                                    10000, 15,
                                    50000, 20,
                                    100000, 25,
                                    500000, 30,
                                    10000000, 35
                                ],
                                'circle-color': 'red',
                                'circle-opacity': [
                                    'interpolate', ['linear'],
                                    ['get', 'total'],
                                    1000, .5,
                                    10000, .6,
                                    100000, 0.8,
                                    500000, 1
                                ]
                            }
                        }}
                    />
                </Source>

                <Source id='Cities' type='geojson' data={{
                    'type': 'FeatureCollection',
                    cluster: true,
                    'features': useMemo(() => {
                        return data.areas.reduce((sum, val: API) => {
                            val.areas.map((item: API) => {
                                const obj = {
                                    type: 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [
                                            item.long,
                                            item.lat
                                        ]
                                    },
                                    'properties': {
                                        'title': item.displayName,
                                        'icon': 'monument',
                                        total: item.totalConfirmed
                                    }
                                }
                                sum = !!sum ? [...sum, obj] : [obj]
                            })
                            return sum
                        }, [])
                    }, [data])
                }}>
                    <Layer
                        {...{
                            'id': 'points2',
                            'type': 'circle',
                            'source': 'points',
                            paint: {
                                'circle-radius': [
                                    'interpolate', ['linear'],
                                    ['get', 'total'],
                                    50, 4,
                                    100, 5,
                                    500, 6,
                                    1000, 7,
                                    5000, 8,
                                    10000, 9
                                ],
                                'circle-color': 'red',
                                'circle-opacity': 0.5
                            }
                        }}
                    />
                </Source>

                {showPopup.visible && <Popup
                    latitude={showPopup.region.lat}
                    longitude={showPopup.region.long}
                    closeButton={true}
                    offsetTop={-10}
                    offsetLeft={10}
                    closeOnClick={false}
                    onClose={() => setShowPopup({ visible: false, location: null })}
                    anchor="bottom"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', padding: 5 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ borderRadius: '50%', width: 20, height: 20, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={`https://www.countryflags.io/${codes(showPopup.country === true ? showPopup.region.displayName : showPopup.country) || 'us'}/shiny/64.png`} alt="123" style={{ width: '160%', height: '160%', objectFit: 'cover', borderRadius: '50%' }} />
                            </div>
                            <h3 style={{ color: 'black', paddingLeft: 10 }}>{showPopup.region.displayName}</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: -30, marginBottom: -20 }}>
                            <h2 style={{ color: 'red' }}>{showPopup.region.totalConfirmed.toLocaleString('en-US')}</h2>
                            <h2 style={{ color: 'black', paddingLeft: 10 }}>INFECTED</h2>
                        </div>
                    </div>
                </Popup>}
                {/* {useMemo(() => <RenderCountries data={data} showPopup={showPopup} setShowPopup={setShowPopup} />, [data])} */}
                {/* {useMemo(() => <RenderCities data={data} showPopup={showPopup} setShowPopup={setShowPopup} />, [data])} */}
            </ReactMapGL>
        </>
    )
}

function List({ data, type, handleAnimate }: any) {

    function sorted() {
        if (type === "Infected") {
            return data.areas.sort((a: API, b: API) => b.totalConfirmed - a.totalConfirmed);
        }
        else if (type === "Deaths") {
            return data.areas.sort((a: API, b: API) => b.totalDeaths - a.totalDeaths);
        }
        else if (type === "Recovered") {
            return data.areas.sort((a: API, b: API) => b.totalRecovered - a.totalRecovered);
        }
    }

    if (sorted.length > 0) return null
    return sorted().map((area: API) => (
        <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ borderRadius: '50%', width: 20, height: 20, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleAnimate(area.long, area.lat)}>
                <img src={`https://www.countryflags.io/${codes(area.displayName) || 'us'}/shiny/64.png`} alt="123" style={{ width: '160%', height: '160%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <h5 style={{ paddingLeft: 15, color: 'grey', margin: '0 auto 0 0' }}>{area.displayName}</h5>
            <h5 style={{ color: 'white' }}>{type === "Infected" ? area.totalConfirmed?.toLocaleString('en-US') : type === "Recovered" ? area.totalRecovered?.toLocaleString('en-US') : type === "Deaths" && area.totalDeaths?.toLocaleString('en-US')}</h5>
        </li>
    ))
}

const LocationDetails = ({ showPopup }: any) => {
    return (
        <div style={{
            width: 400,
            height: 200,
            position: 'absolute',
            top: 25,
            left: 25,
            backgroundColor: 'white',
            zIndex: 99999999,
            padding: 15,
            borderRadius: 8
        }}>
            {showPopup.country === true
                ?
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ borderRadius: '50%', width: 20, height: 20, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={`https://www.countryflags.io/${codes(showPopup.country === true ? showPopup.region.displayName : showPopup.country) || 'us'}/shiny/64.png`} alt="123" style={{ width: '160%', height: '160%', objectFit: 'cover', borderRadius: '50%' }} />
                    </div>
                    <h3 style={{ color: 'black', paddingLeft: 10 }}>{showPopup.region.displayName}</h3>
                </div>
                :
                <span style={{ color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center' }}><h3>{showPopup.region.displayName} </h3> <label style={{ paddingLeft: 8 }}>{showPopup.country}</label></span>}
            <p style={{ flex: 1, color: 'rgb(252,184,44)', fontSize: 12 }}><b>Confirmed:</b>  {showPopup.region.totalConfirmed?.toLocaleString('en-US') ?? 0}</p>
            <p style={{ flex: 1, color: 'rgb(50,203,111)', fontSize: 12 }}><b>Recovered:</b>{showPopup.region.totalRecovered?.toLocaleString('en-US') ?? 0}</p>
            <p style={{ flex: 1, color: 'red', fontSize: 12 }}><b>Deaths:</b> {showPopup.region.totalDeaths?.toLocaleString('en-US') ?? 0}</p>
            {showPopup.country === true && <h3 style={{ flex: 1, color: 'black', fontSize: 12 }}><b>Population:</b>  {Number((showPopup.region.totalConfirmed * 100) / getPopulation(showPopup.region.displayName)).toFixed(2)}%</h3>}
        </div>
    )
}

const RenderCountries = ({ data, showPopup, setShowPopup }: { data: any, showPopup?: any, setShowPopup?: any }) => {
    return data.areas.map(region => {
        return <RedBubbleMarker key={region.displayName} width={10} region={region} onClick={() => setShowPopup({ visible: true, region, country: true })} selected={region.displayName === showPopup.region?.displayName} />
    })
}

const RenderCities = ({ data, showPopup, setShowPopup }: { data: any, showPopup?: any, setShowPopup?: any }) => {
    return data.areas.map(c => {
        return c.areas.map(region => {
            return <RedBubbleMarker key={region.displayName} width={5} region={region} onClick={() => setShowPopup({ visible: true, region, country: c.displayName })} selected={region.displayName === showPopup.region?.displayName} />

        })
    })
}



const RedBubbleMarker = ({ width, region, onClick, selected }: { width: number, region: API, onClick: () => void, selected: boolean }) => (
    <Marker key={region.displayName} longitude={region.long} latitude={region.lat} captureDrag={false}>
        <svg onClick={onClick}
            style={{
                cursor: 'pointer',
                fill: '#d00',
                stroke: 'none',
                width: (width * 2) + 10,
                height: (width * 2) + 10,
                transform: `translate(${-width / 2}px,${-width}px)`
            }}>
            <circle cx={width + 5} cy={width + 5} r={width} fill={"red"} strokeWidth={selected ? 3 : 0} stroke={selected ? "orange" : "red"} style={{ fillOpacity: opacity(region.totalDeaths) }} />
        </svg>
    </Marker>
)

export async function getStaticProps() {
    const res = await fetch('https://bing.com/covid/data');
    const data = await res.json()

    return { props: { data } }
}

export default React.memo(HomePage)