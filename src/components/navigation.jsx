import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const navLinks = [
    {
        title: '도서관',
        path: '/home',
    },
    {
        title: '해석들',
        path: '/interpretations'
    },
    {
        title: '연락하기',
        path: '/contact-us'
    },
    {
        title: '로그인',
        path: '/login'
    },
]

function Navigation({user}) {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className="site-navigation">
            <span className="menu-title">[ 해석하다 ]</span>
            <div className={`menu-content-container ${menuActive ? 'active' : ''}`}>
                <ul>
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                    </li>
                    ))
                }      
                </ul>
                <span className="menu-avatar-container">
                    <span className="menu-avatar-name">{'김서현'}
                    <span className="menu-avatar-description">{'단어수집가'}</span>
                        </span>
                </span>
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)}/>
        </nav>

    );
}

export default Navigation;