import React, { useEffect, useState } from 'react'
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


function StocksPage({ data }) {

    // const fetcher = async url => await fetch(url).then(r => r.json())
    // const { data, error } = useSWR('/api/news?type=gaming', fetcher)

    return (
        <Layout>
            <Head>
                <title>Gaming News</title>
            </Head>
            <div style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ padding: 20, display: 'flex', flexDirection: 'column', width: '100%', margin: 'auto' }}>

                    <div className="container">
                        <div style={{ marginRight: 'auto', background: 'rgb(34,37,41)', borderRadius: 9, padding: 20, alignSelf: 'center' }}>
                            <h3 style={{ color: 'white', fontFamily: 'Poppins', margin: 0 }}>Gaming News</h3>
                            <h5 style={{ color: 'grey', fontFamily: 'Poppins', margin: 0, padding: 0 }}>Global</h5>
                        </div>

                        {!!data ? data.map((item: INews) => {
                            return (
                                <a target="blank" href={item.link} style={{ padding: 0 }}>
                                    <div style={{ marginRight: 'auto', background: 'rgb(34,37,41)', borderRadius: 9, padding: 20, alignSelf: 'center', marginTop: 35, width: '100%' }}>
                                        <div style={{ flexDirection: 'row', display: 'flex' }}>
                                            <h4 style={{ color: 'white', marginRight: 'auto' }}>{item.headline}</h4>
                                            {!!item.media && <img src={item.media} style={{ borderRadius: 8, width: 100, objectFit: 'cover' }} />}
                                        </div>
                                        <h5 style={{ color: 'white' }}>{item.publication} <span style={{ paddingLeft: 20 }} /> {item.time}</h5>
                                    </div>
                                </a>
                            )
                        }) : <h3 style={{ color: 'white', textAlign: 'center' }}>loading...</h3>}
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
                    width: 50%;
                    margin: auto;
                }

                @media only screen and (max-width: 1056px) {
                    .container  {
                        width: 100%;
                    }
                }
                `}</style>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://corona19.now.sh/api/news?type=gaming')
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}



export default StocksPage
