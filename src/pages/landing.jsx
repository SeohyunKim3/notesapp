import React, {useState} from 'react'
import "../assets/css/landing.css"

function Landing() {
    const [menuActive, setMenuActive] = useState(true)

    return (
        <div className="background-design">
            <div className="rectangles-rightside">
                <span className="rectangle-rightside-1"></span>
                <span className="rectangle-rightside-2"></span>
            </div>
            <div className="rectangles-bottom"></div>
            <div className="rectangles-leftside"></div>
            <div className="logo">[ 해석 하다 ]</div>
            <div className="logoreverse">[ 해석 하다 ]</div>

            <div className={`maintext ${menuActive ? 'active' : ''}`}>
            <div className="maintext" onClick={() => setMenuActive(!menuActive)}>
            <span>‘해석(解釋) + 하다’</span>
            <span className="section1">
                <span>나는 사전을 열고 '해석'의 뜻을 찾아봤다.</span>
                <span className="gangjo">"사물을 자세히 풀어서 논리적으로 밝히다."</span>
                <span>나를 토막내면..</span>
                <span>풀어서 이해할 수 있는 걸까?</span>
            </span>
            <span className="subheader">
                <span>그렇다면 나를 어떻게 조각낼까? </span>
                <span className="section1">
                    <span>내 시간과 내 하루 일과를?</span>
                    <span className="section2"> 내가 어떤 시간에 가장 큰 행복과 즐거움을 느끼는가.</span>
                    <span>내 소비를?</span>
                    <span className="section2">나는 무엇을 소비할 때 가장 큰 행봉과 즐거움을 느끼는가.</span>
                    <span>내가 주는 영향을?</span>
                    <span className="section2">나는 누구에게 어떤 영향을 미칠 때 가장 큰 행봉과 즐거움을 느끼는가.</span>
                </span>
                <span className="lastwords">
                <span>나를 풀어서 해석할 수 있는 방법이 n 가지라면,</span>
                <span>나는 n차원적인 인간이다.</span>
                </span>
            </span>
        </div>
        </div>
        <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)}/>
        </div>
    )
}

export default Landing;
