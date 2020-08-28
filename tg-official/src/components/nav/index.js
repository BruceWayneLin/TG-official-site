import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <div>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div>
                <a href="#FirstDiv">
                    平台介紹
                </a>
                </div>
                <div>
                <a href="#secDiv">
                平台優勢
                </a>
                </div>
                <div>
                <a href="#rules">
                規則介紹
                </a>
                </div>
                <div>
                <a href="#About">
                關於我們
                </a>
                </div>
            </div>
        )
    }
}

export default Nav;