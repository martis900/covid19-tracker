import React from 'react'
import { getPosts } from './api/posts';
import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IProps {
    posts?: any
}

function HomePage() {
    const router = useRouter()
    return (
        <Layout>
            <div style={{ padding: 20 }}>
                <ul>
                </ul>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    // const posts = await getPosts();
    return { props: {} }
}

export default HomePage