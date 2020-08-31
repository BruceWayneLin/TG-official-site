import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {StyleRoot} from "radium";
import styles from '../animations/index';
class Nav extends Component {
    constructor(props) {
        super()
        this.state={
            sideNav: false
        }
    }
    render() {
        const { sideNav } = this.state;
        return (
            <div id="nav">
                <div>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="d-md-none">
                    <div className="white-b">
                        <FontAwesomeIcon icon="bars" onClick={() => this.setState({ sideNav: !sideNav })}/>
                    </div>
                </div>
                <StyleRoot>
                <div id="mobile-nav" style={sideNav==false? styles: styles.slideInLeftFast} className={sideNav==false? "d-md-none text-center none": "d-md-none text-center"}>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon="times" onClick={() => this.setState({ sideNav: !sideNav })}/>
                        </li>
                        <li>
                            <a href="#FirstDiv" onClick={() => this.setState({ sideNav: !sideNav })}>
                                平台介紹
                            </a>
                        </li>
                        <li>
                            <a href="#secDiv" onClick={() => this.setState({ sideNav: !sideNav })}>
                                平台優勢
                            </a>
                        </li>
                        <li>
                            <a href="#rules" onClick={() => this.setState({ sideNav: !sideNav })}>
                                規則介紹
                            </a>
                        </li>
                        <li>
                            <a href="#About" onClick={() => this.setState({ sideNav: !sideNav })}>
                                關於我們
                            </a>
                        </li>
                    </ul>
                </div>
                </StyleRoot>
                <div className="d-none">
                    <a href="#FirstDiv">
                        平台介紹
                    </a>
                </div>
                <div className="d-none">
                    <a href="#secDiv">
                    平台優勢
                    </a>
                </div>
                <div className="d-none">
                    <a href="#rules">
                    規則介紹
                    </a>
                </div>
                <div className="d-none">
                    <a href="#About">
                    關於我們
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;