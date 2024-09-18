import React from 'react'
import {MasonryPost} from './'

function PostMasonry({posts, tagsOnTop}) {
    return (
        <section className="masonry">
        { posts.map((post, index) => 
            <MasonryPost {...{post, index, tagsOnTop, key:index}}/>    
        )}
        </section>
    )
}

export default PostMasonry;