import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <div>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div>平台介紹</div>
                <div>平台優勢</div>
                <div>規則介紹</div>
                <div>關於我們</div>
            </div>
        )
    }
}

export default Nav;