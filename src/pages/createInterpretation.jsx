import React from 'react'
import examples from '../assets/mocks/examples'
import {PostMasonry} from '../components/common'


function createInterpretation() {
    return (
    <section className="sidebar">    
        <div className="explanation">
        </div> 
        <div className="examples">       
        <PostMasonry posts={examples}/>
        </div>
    </section>
    )
}

export default createInterpretation;