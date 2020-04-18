//@ts-nocheck

import React, { useState, useMemo, useEffect, useRef, useLayoutEffect } from 'react'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout'
import Link from 'next/link'
import dayjs from 'dayjs'
import DeckGL, { TileLayer, BitmapLayer } from "deck.gl";
import ReactMapGL, { Marker, Popup, StaticMap, Source, Layer, FlyToInterpolator } from 'react-map-gl';
import { getPopulation } from '../assests/countries'
import Map2 from '../components/Map2'
import codes from '../assests/codes'
import Head from 'next/head';

const tileServer = 'https://c.tile.openstreetmap.org/';


export const INITIAL_VIEW_STATE = {
    latitude: 47.65,
    longitude: 7,
    zoom: 4.5,
    maxZoom: 20,
    bearing: 0
};

export interface API {
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

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Today {
    deaths: number;
    confirmed: number;
}

export interface Calculated {
    death_rate: number;
    recovery_rate: number;
    recovered_vs_death_ratio?: any;
    cases_per_million_population: number;
}

export interface LatestData {
    deaths: number;
    confirmed: number;
    recovered: number;
    critical: number;
    calculated: Calculated;
}

export interface API2 {
    coordinates: Coordinates;
    name: string;
    code: string;
    population: number;
    updated_at: Date;
    today: Today;
    latest_data: LatestData;
}

interface IProps {
    data: API
    data2: Array<API2>,
}

const opacity = (opa) => {
    let op = (opa) / 200
    if (op < 0.3) {
        op = 0.3
    }
    return op
}

const TOKEN = 'pk.eyJ1IjoiYWxla25hbWFydHluYXMiLCJhIjoiY2s5MXJpd3RzMDBsaDNtbnF6M29rMXlvYyJ9.fsq7LE6sCm9Sx5Zu2R5KZQ';

function HomePage({ data, data2 }: IProps) {
    const [showPopup, setShowPopup]: any = useState<{ visible: boolean, region?: API, country?: boolean | string }>({ visible: false })
    const [viewport, setViewport]: any = useState({
        latitude: 50,
        longitude: 0,
        zoom: 2,
        visibilityConstraints: 1
    });
    const [type, setType] = useState<'Infected' | 'Deaths' | 'Recovered'>("Infected")
    return (
        <div className="tracker-flex" >
            <Head>
                <title>Covid19 - Tracker</title>
            </Head>
            <Layout>
                <div style={{ color: 'white', flexDirection: 'row', display: 'flex', height: '100%', width: '100%' }}>
                    <div className="LOL" style={{ display: 'flex', position: 'relative', height: 'calc(100vh - 60px)', flexDirection: 'column' }}>

                        <div className="aff" style={{ display: 'flex', flexDirection: 'row', padding: 20, justifyContent: 'space-around' }}>
                            <div style={{ marginRight: 'auto', background: 'rgb(34,37,41)', borderRadius: 9, padding: 20 }}>
                                <h3 style={{ color: 'white', fontFamily: 'Poppins', margin: 0 }}>Coronavirus COVID-19</h3>
                                <h5 style={{ color: 'grey', fontFamily: 'Poppins', margin: 0, padding: 0 }}>Global Cases</h5>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', width: '50%', maxWidth: 1000, margin: 'auto', justifyContent: 'space-around' }}>
                                <div style={{ background: 'rgb(34,37,41)', padding: 15, borderRadius: 9 }}>
                                    <h6 style={{ color: 'rgb(194,49,54)', textAlign: 'start', margin: 0 }}>Infected</h6>
                                    <h2 style={{ textAlign: 'center', margin: 0 }}>{data.totalConfirmed.toLocaleString('en-US')}</h2>
                                    <div style={{ background: 'rgb(194,49,54)', height: 4, width: '80%', display: 'flex', marginTop: 5 }} />
                                </div>
                                <div style={{ background: 'rgb(34,37,41)', padding: 15, borderRadius: 9 }}>
                                    <h6 style={{ color: 'rgb(251,200,128)', textAlign: 'start', margin: 0 }}>Active</h6>
                                    <h2 style={{ textAlign: 'center', margin: 0 }}>{(data.totalConfirmed - data.totalDeaths - data.totalRecovered).toLocaleString('en-US')}</h2>
                                    <div style={{ background: 'rgb(251,200,128)', height: 4, width: '80%', display: 'flex', marginTop: 5 }} />
                                </div>
                                <div style={{ background: 'rgb(34,37,41)', padding: 15, borderRadius: 9 }}>
                                    <h5 style={{ color: 'rgb(79,77,83)', textAlign: 'start', margin: 0 }}>Deaths</h5>
                                    <h2 style={{ textAlign: 'center', margin: 0 }}>{data.totalDeaths.toLocaleString('en-US')}</h2>
                                    <div style={{ background: 'rgb(79,77,83)', height: 4, width: '80%', display: 'flex', marginTop: 5 }} />
                                </div>
                                <div style={{ background: 'rgb(34,37,41)', padding: 15, borderRadius: 9 }}>
                                    <h5 style={{ color: 'rgb(73,193,172)', textAlign: 'start', margin: 0 }}>Recovered</h5>
                                    <h2 style={{ textAlign: 'center', margin: 0 }}>{data.totalRecovered.toLocaleString('en-US')}</h2>
                                    <div style={{ background: 'rgb(73,193,172)', height: 4, width: '80%', display: 'flex', marginTop: 5 }} />
                                </div>
                            </div>

                        </div>
                        <Map data={data} viewport={viewport} setViewport={setViewport} showPopup={showPopup} setShowPopup={setShowPopup} />
                        {/* <Map2 data={data} /> */}
                    </div>

                </div>

            </Layout>
            {
                useMemo(() => {
                    return <div className="list">
                        {/* <h2 style={{ color: 'white', textAlign: 'center' }}>Total Confirmed</h2>
                        <h1 style={{ color: 'red', textAlign: 'center', marginTop: 0 }}>{data.totalConfirmed.toLocaleString('en-US')}</h1> */}

                        <h3 style={{ color: 'white', fontFamily: 'Poppins', textAlign: 'left', padding: 20 }}>Cases Info</h3>
                        <TabBar setType={setType} type={type} />

                        <List data={data} data2={data2} type={type} setShowPopup={setShowPopup} handleAnimate={(long, lat) => setViewport({ ...viewport, latitude: lat, longitude: long, zoom: 4, transitionInterpolator: new FlyToInterpolator(), })} />

                    </div>
                }, [data, type])
            }

        </div >
    )
}


function TabBar({ setType, type }: any) {
    return (
        <div className='tabbar'>
            <div className={`tabbar-item ` + (type === 'Infected' && 'selected')}>
                <button className='tabbar-item-button' onClick={() => setType('Infected')}>Infected</button>
            </div>
            <div className={`tabbar-item ` + (type === "Deaths" && 'selected')} >
                <button className='tabbar-item-button' onClick={() => setType("Deaths")}>Deaths</button>
            </div>
            <div className={`tabbar-item ` + (type === "Recovered" && 'selected')}>
                <button className='tabbar-item-button' onClick={() => setType("Recovered")}>Recovered</button>
            </div>

            <style jsx>{`
                .tabbar-item {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .tabbar {
                    display: flex;
                    justify-content: space-around;
                    background: rgb(20, 21, 23);
                    border-radius: 8px;
                    padding: 10px;
                    margin-left: 10px;
                    margin-right: 10px;
                }
                .tabbar-item-button {
                    border: none;
                    outline: none;
                    background: rgb(20, 21, 23);
                    padding: 10px;
                    border-radius: 8px;
                    color: white;
                    font-family: Poppins;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 15px;
                }
                .tabbar .selected::after {
                    width: 80%;
                    background: red;
                }
                .tabbar-item::after {
                    align-self: center;
                    display: flex;
                    border-radius: 55px;
                    width: 80%;
                    content: '';
                    transition: all 200ms ease-out;
                    height: 5px;
                }
                .tabbar-item:hover::after {
                    background: red;
                }
            `}</style>

        </div>
    )
}


function Map({ data, viewport, setViewport, showPopup, setShowPopup }: { data: API, viewport: any, setViewport: any }) {

    const mapRef = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [hover, setHover] = useState(false)
    useEffect(() => {
        const map = mapRef.current.getMap();

        if (isLoaded) {
            console.log('INIT')
            map.on('mouseenter', 'points2 ', (e) => {
                console.log('123')
                map.getCanvas().style.cursor = 'pointer';
            })
        }
    }, [mapRef, isLoaded])

    function handleOnLoad(evt) {
        const map = mapRef.current.getMap();
        setIsLoaded(true)
    }
    return (
        <>
            {/* {showPopup.visible === true && <LocationDetails showPopup={showPopup} />} */}
            <ReactMapGL
                {...viewport}
                ref={mapRef}
                onLoad={handleOnLoad}
                // onHover={(e) => {
                //     const map = mapRef.current.getMap();
                //     if (e?.features?.filter(item => item.layer.id === 'points').length > 0) {
                //         setHover(true)
                //     }
                //     else {
                //         setHover(false)
                //     }

                // }}
                reuseMaps={false}
                height='calc(100vh - 210px)'
                onViewportChange={view => setViewport(view)}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v9"
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
                            <h4 style={{ color: 'rgb(194, 49, 54)' }}>{showPopup.region.totalConfirmed.toLocaleString('en-US')}</h4>
                            <h4 style={{ color: 'black', paddingLeft: 10, margin: 'auto 0 auto auto' }}>INFECTED</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: -15, marginBottom: -20 }}>
                            <h4 style={{ color: 'rgb(251, 200, 128)' }}>{(showPopup.region.totalConfirmed - showPopup.region.totalDeaths - showPopup.region.totalRecovered).toLocaleString('en-US')}</h4>
                            <h4 style={{ color: 'black', paddingLeft: 10, margin: 'auto 0 auto auto' }}>ACTIVE</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: -15, marginBottom: -20 }}>
                            <h4 style={{ color: 'rgb(79, 77, 83)' }}>{showPopup.region.totalDeaths?.toLocaleString('en-US') ?? 0}</h4>
                            <h4 style={{ color: 'black', paddingLeft: 10, margin: 'auto 0 auto auto' }}>DEATHS</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: -15, marginBottom: -20 }}>
                            <h4 style={{ color: 'rgb(73, 193, 172)' }}>{showPopup.region.totalRecovered?.toLocaleString('en-US') ?? 0}</h4>
                            <h4 style={{ color: 'black', paddingLeft: 10, margin: 'auto 0 auto auto' }}>RECOVERED</h4>
                        </div>
                        {showPopup.country === true && <h3 style={{ flex: 1, color: 'black', fontSize: 12, marginTop: 4 }}>
                            <b>
                                Population:
                                </b> {Number((showPopup.region.totalConfirmed * 100) / getPopulation(showPopup.region.displayName)).toFixed(2)}%
                            </h3>
                        }</div>
                </Popup>}

            </ReactMapGL>
        </>
    )
}

function List({ data, data2, type, handleAnimate, setShowPopup }: { data: any, data2: Array<API2>, type: any, handleAniamte: any, setShowPopup: any }) {

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
    return <ul style={{ margin: 0, paddingLeft: 10, height: '100%', overflowY: 'scroll', scrollBehavior: 'smooth', display: 'flex', flexDirection: 'column' }}>
        {sorted().map((area: API) => (
            <li style={{ display: '-webkit-flex', flex: '1 0 auto', flexDirection: 'row', alignItems: 'center', background: 'rgb(28, 30, 34)', cursor: 'pointer', borderRadius: 8, marginTop: 10, paddingLeft: 20, paddingRight: 20 }} onClick={() => {
                setShowPopup({ visible: true, region: data.areas.filter(item => item.displayName === area.displayName)[0], country: true })
                handleAnimate(area.long, area.lat)
            }}>
                <div style={{ borderRadius: '50%', width: 20, height: 20, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                    <img src={`https://www.countryflags.io/${codes(area.displayName) || 'us'}/shiny/64.png`} alt="123" style={{ width: '160%', height: '160%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>

                <h5 style={{ paddingLeft: 15, color: 'rgba(255,255,255,0.7)', margin: '0 auto 0 0' }}>{area.displayName}</h5>
                <h5 style={{ color: 'white' }}>{type === "Infected" ? area.totalConfirmed?.toLocaleString('en-US') : type === "Recovered" ? area.totalRecovered?.toLocaleString('en-US') : type === "Deaths" && area.totalDeaths?.toLocaleString('en-US')}</h5>
            </li>
        ))}
    </ul>
}

const LocationDetails = ({ showPopup }: any) => {
    return (
        <div style={{
            width: 400,
            height: 200,
            position: 'absolute',
            bottom: 25,
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

export async function getStaticProps(context) {
    const res = await fetch('https://bing.com/covid/data');
    const data = await res.json()

    const res2 = await fetch('https://corona-api.com/countries');
    const data2 = await res2.json();

    return { props: { data, data2: data2.data } }
}

export default React.memo(HomePage)