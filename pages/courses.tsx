//@ts-nocheck
import React, { useEffect, useState, useMemo } from 'react'
import { getPosts } from './api/posts';
import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr'
import Head from 'next/head'

interface IProps {
    posts?: any
}

interface ITweets {
    name: string,
    img: string,
    date: string,
    tweet: string
}

interface INews {
    link: string;
    media: string;
    headline: string;
    time: string;
    publication: string;
}


function CoursesPage() {

    const fetcher = async url => await fetch(url).then(r => r.json())
    const { data, error } = useSWR('/api/courses', fetcher)

    let a = {
        "Free?": "YES",
        "Course Name": "Successful Negotiation",
        "Course Link": "https://www.coursera.org/learn/negotiation-skills",
        "Course Topic Area": "Communication Skills",
        "Course Length": "17 Hours",
        "Organization": "Coursera",
        "Organization-image": "https://additionalknowledge.files.wordpress.com/2019/05/ai-is-the-new-electricity-for-business-society.png"
    }

    const [selected, setSelected] = useState('All')

    return (
        <Layout>
            <Head>
                <script src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </Head>
            <div style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className="container" >
                    <div style={{ marginRight: 'auto', background: 'rgb(34,37,41)', borderRadius: 9, padding: 20, alignSelf: 'center', width: '100%' }}>
                        <h3 style={{ color: 'white', fontFamily: 'Poppins', margin: 0 }}>Online Courses {selected}</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 35 }}>
                        {!!data && [...new Set(['All', ...data.map(item => item["Course Topic Area"])])].map(item => {
                            return <label style={{ margin: '5px 20px', padding: 10, background: 'white', color: 'black', borderRadius: 20, cursor: 'pointer' }} onClick={() => setSelected(item)}>{item}</label>
                        })}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                        {!!data && data.filter(item => selected === 'All' ? item : (item["Course Topic Area"] === selected)).map(item => {
                            return (
                                <a target="blank">
                                    <div style={{ background: 'rgb(34,37,41)', borderRadius: 9, alignSelf: 'center', width: 400, margin: '35px auto' }}>
                                        <div style={{ flexDirection: 'row', display: 'flex' }}>
                                            <div style={{ alignItems: 'center', padding: 20, marginRight: 'auto' }}>
                                                <h3 style={{ margin: 0, color: 'grey' }}>{item.Organization}</h3>
                                                <h4 style={{ color: 'white', marginRight: 'auto', margin: 0, fontSize: '100%' }}>{item["Course Name"]}</h4>
                                            </div>
                                            {item["Organization-image"] && <img src={item["Organization-image"]} style={{ borderRadius: 8, width: '30%', objectFit: 'contain', background: 'white' }} />}
                                        </div>
                                        <hr />
                                        <div style={{ padding: 20 }}>
                                            <h5 style={{ color: 'white' }}>Duration: <label>{item["Course Length"]}</label></h5>
                                            <h5 style={{ color: 'white' }}>Duration: <label>{item["Course Topic Area"]}</label></h5>
                                            <h5 style={{ color: 'white' }}>Duration: <label>{item["Course Length"]}</label> </h5>
                                        </div>
                                        <div style={{ height: '3rem', display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100%' }}>
                                                {item['Free?'] === "YES" && <h4 style={{ color: 'white' }}>Free</h4>}
                                            </div>
                                            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100%', border: '2px solid white', borderRadius: '7px 0 7px 0', background: 'white', cursor: 'pointer' }} onClick={() => window.open(item["Course Link"], '_blank')}>
                                                <h4>Visit</h4>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>



                {/* <div style={{ width: '30%', height: '800px', overflow: 'scroll' }}>
                    <a className="twitter-timeline" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">Tweets by WHO</a>
                </div> */}
            </div>
            <style jsx>{`
                .news {
                    width:400px;
                    min-height: 200px;
                    border-radius: 8px;
                    margin: 0 auto 0 0;
                }
                .container {
                    flex-direction: column;
                    width: 80%;
                    margin: auto;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                }
                @media only screen and (max-width: 1214px) {
                    .container  {
                        width: 90%;
                    }
                }
                @media only screen and (max-width: 876px) {
                    .container  {
                        width: 100%;
                    }
                }
                
                `}</style>
        </Layout>
    )
}


export default CoursesPage
