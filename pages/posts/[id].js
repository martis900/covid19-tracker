import { getSinglePost, getPosts } from '../api/posts'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
export default (props) => {
    const router = useRouter()

    if (router.isFallback) {
        return <Layout>
            <div>Loading</div>
        </Layout>
    }
    return <Layout>
        <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </Layout>
}

export async function getStaticPaths() {

    return {
        // Only `/posts/1` and `/posts/2` are generated at build time
        paths: [],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const post = "await getSinglePost(context.params.id)"
    return {
        props: { post }, // will be passed to the page component as props
    }
}