import React from 'react'
import {categoryColors} from './styles'


function MasonryPost({post, tagsOnTop}) {
    const imageBackground = {backgroundImage: `url("${import(`../../assets/images/${post.image}`)}")`};
  
    const style = {...imageBackground, ...post.style}

    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text">
                <div className="image-text2">
                        { post.categories.map((tag, ind) =>
                        <span key={ind} className="tag" style={{backgroundColor: categoryColors[tag]}}>
                            {tag.toUpperCase()}
                        </span>)}
                </div>
                <div>
                    <div className="image-title-container">
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-pronunciation">{post.pronunciation}</span>
                    </div>
                    <div className="image-description-container">
                    <span className="image-description">{post.description}</span>
                    <span className="image-date">{post.date}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default MasonryPost;