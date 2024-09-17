import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
        <p className="footerp">Copyright 해석 하다_ ⓒ {year}</p>
        </footer>
    )
}

export default Footer;