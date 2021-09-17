import React from 'react'

function BlogList(blogs) {
    return (
        <div>
            {blogs && blogs.map((blog) => {
                <article>
                   <h1>{blog.title}</h1>
               </article>
           })} 
        </div>
    )
}

export default BlogList
