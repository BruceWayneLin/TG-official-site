import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
import share from '../../assets/images/threeIcon/share.png'
import stable from '../../assets/images/threeIcon/stable.png'
import team from '../../assets/images/threeIcon/team.png'
import {StyleRoot} from "radium";
import styles from '../animations/index';

class SecDiv extends Component {
    render() {
        return(
            <div id="secDiv">
                <StyleRoot>
                <div className="title">平台優勢</div>
                <div className="text-center text-white">
                    <p>顛覆傳統遊戲：藝人代言、公司盈利、通路抽成、玩家付費買單的套路</p>
                    <p>TGC：上百款遊戲、大數據經濟、分享經濟、社交經濟、遊戲經濟</p>
                </div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-6" id="border-right" style={styles.slideInLeft}>
                            <img src={logo} alt="logo" className="logo" />
                            <ul>
                                <li>1、每日免費RC幣，最高當日贈16800</li>
                                <li>2、上百款遊戲快速上線</li>
                                <li>3、玩家簡單參與點對點交易資產</li>
                                <li>4、輕鬆分享遊戲共享利潤</li>
                                <li>5、平臺獲得大數據、資產流通</li>
                                <li>6、智慧合約製定遊戲規則，公平、透明</li>
                            </ul>
                        </div>
                        <div className="col-6" style={styles.slideInRight}>
                            <div className="logo">
                                <h3 className="text-center text-white pt-3">傳統遊戲</h3>
                            </div>
                            <ul>
                                <li>1、漫長的開發週期和高昂的開發成本</li>
                                <li>2、商業通路推廣費高（下載即付費)</li>
                                <li>3、尋找藝人代言（500萬起）</li>
                                <li>4、所有成本玩家買單、公司盈利</li>
                                <li>5、玩家的遊戲資產沒有保障</li>
                                <li>6、開發公司製定規則、隨時更改</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container pt-5" id="icons">
                    <div className="row">
                        <div className="col-4">
                            <div className="icon" >
                            <img className="img-responsive" src={share} alt="share"/>
                            <h3 className="text-center">分享收益</h3>
                            <p>注册就贈送，推薦很輕鬆</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="icon" >
                            <img  className="img-responsive" src={stable} alt="stable" />
                            <h3 className="text-center">固定收益</h3>
                            <p>坐享其成，毫無壓力</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div  className="icon">
                            <img className="img-responsive" src={team} alt="team"/>
                            <h3 className="text-center">團隊收益</h3>
                            <p>能力體現價值，無限想像空間</p>
                            </div>
                        </div>
                    </div>
                </div>
                </StyleRoot>
            </div>
        )
    }
}

export default SecDiv;