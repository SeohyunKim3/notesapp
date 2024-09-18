import React from 'react'
import {PostMasonry} from '../components/common'
import trending from '../assets/mocks/trending'
import { useNavigate } from 'react-router-dom'

const trendingConfig = {
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig)

function Books() {
    const navigate = useNavigate()
    const createInterpretation = () => {
        navigate("/createInterpretation");
    }

    return (
    <section className="container books">
        <div className="row">
            <h1 className="heading">당신의 호기심을 자극하는 해석이 있나요?</h1>
            <PostMasonry posts={trending}/>
        <div className="secondrow">
                <button onClick={()=>createInterpretation()} className="subheading">당신은 무엇을 궁금해하나요?</button>
        </div>
        </div>
    </section>
    )
    }

export default Books;