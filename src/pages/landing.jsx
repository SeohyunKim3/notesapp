import React, {useState} from 'react'
import "../assets/css/landing.css"

function Landing() {
    const [menuActive, setMenuActive] = useState(true)

    return (
        <div className="site-landing">
        <div className="background-design">
            <div className="rectangles-rightside">
                <span className="rectangle-rightside-1"></span>
                <span className="rectangle-rightside-2"></span>
            </div>
            <div className="rectangles-bottom"></div>
            <div className="rectangles-leftside"></div>
            <div className="logo">[ 해석 하다 ]</div>
            <div className="logoreverse">[ 해석 하다 ]</div>
        </div>
    </div>
    )
}

export default Landing;
