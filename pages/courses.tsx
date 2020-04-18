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


function CoursesPage() {

    // const fetcher = async url => await fetch(url).then(r => r.json())
    // const { data, error } = useSWR('/api/news', fetcher)

    return (
        <Layout>
            <Head>
                <script src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </Head>
            <div style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ padding: 20, display: 'flex', flexDirection: 'column', width: '100%', margin: 'auto' }}>

                    <div style={{ flexDirection: 'column', width: '50%', margin: 'auto' }}>
                        <div style={{ marginRight: 'auto', background: 'rgb(34,37,41)', borderRadius: 9, padding: 20, alignSelf: 'center' }}>
                            <h3 style={{ color: 'white', fontFamily: 'Poppins', margin: 0 }}>Online Courses</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {[1, 1, 1, 1, 1, 1, 1, 1].map((item: number) => {
                                return (
                                    <a target="blank">
                                        <div style={{ background: 'rgb(34,37,41)', borderRadius: 9, alignSelf: 'center', width: 400, margin: '35px 20px' }}>
                                            <div style={{ flexDirection: 'row', display: 'flex' }}>
                                                <h4 style={{ color: 'white', marginRight: 'auto', padding: 20, }}>Khan Academy</h4>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Khan_Academy_Logo_Old_version_2015.jpg/600px-Khan_Academy_Logo_Old_version_2015.jpg" style={{ borderRadius: 8, width: 100, objectFit: 'fill' }} />
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
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
                }`}</style>
        </Layout>
    )
}


export default CoursesPage
