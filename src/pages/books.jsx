import React from 'react'
import {PostMasonry} from '../components/common'
import trending from '../assets/mocks/trending'

const trendingConfig = {
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig)

function Books() {
    return (
    <section className="container books">
        <div className="row">
            <h1 className="heading">당신의 호기심을 자극하는 해석이 있나요?</h1>
            <PostMasonry posts={trending}/>
        </div>
    </section>
    )
}

export default Books;