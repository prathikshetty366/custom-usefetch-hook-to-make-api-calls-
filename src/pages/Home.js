import React from 'react'
import BlogList from '../components/BlogList'
import useFetch from '../CustomHook/useFetch'

function Home() {
    const { data: blogs, isPending, error } = useFetch(url);//replace the url with your endpoints
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending&&<div>Loading</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    )
}

export default Home
