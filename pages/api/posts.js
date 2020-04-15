import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'http://94.176.234.74',
    key: '97cd8412a982bd02861ba690bc',
    version: "v3"
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all", include: 'slug,title'
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch(err => {
            console.error(err);
        });
}