import React, { Component } from 'react';
import trade from '../../assets/images/threeIcon/trade.png'
import expense from '../../assets/images/threeIcon/expense.png'
import time from '../../assets/images/threeIcon/time.png'
import operation from '../../assets/images/threeIcon/operation.png'
import onePhone from '../../assets/images/onephone.png'
import {StyleRoot} from "radium";
import styles from '../animations/index';

class Rules extends Component {
    render() {
        return (
            <div id="rules">
                <div className="title">規則介紹</div>
                <div className="text-center text-white">
                    <p>顛覆傳統遊戲：藝人代言、公司盈利、通路抽成、玩家付費買單的套路</p>
                    <p>平台與眾不同 緊密與財富相通</p>
                </div>
                <StyleRoot>
                <div className="container">
                    <div className="row">
                        <div className="col-4" style={styles.slideInLeft}>
                            <div className="trading">
                                <img src={expense} alt="light-trade" />
                                <div className="desc">
                                    <h3>輕消費</h3>
                                    <p>單次付費門檻較低</p>
                                    <p>玩家自由選擇遊戲</p>
                                </div>
                                <img src={trade} alt="light-trade" />
                                <div className="desc">
                                    <h3>輕交易</h3>
                                    <p>點對點交易</p>
                                    <p>資金不經過平臺透明只是交易</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <img className="img-responsive" src={onePhone} alt="light-trade" />
                        </div>
                        <div className="col-4" style={styles.slideInRight}>
                            <div className="trading">
                                <img src={time} alt="light-trade" />
                                <div className="desc">
                                    <h3>輕時間</h3>
                                    <p>遊戲時間短</p>
                                    <p>充分保證玩家利益</p>
                                </div>
                                <img src={operation} alt="light-trade" />
                                <div className="desc">
                                    <h3>輕操作</h3>
                                    <p>遊戲操作簡單易上手</p>
                                    <p>符合智能機的使用特徵</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </StyleRoot>
                <div className="container mt-3">
                    <div className="row purple">
                        <div className="col-xs-7 p-3 pt-4 text-left">
                            <p>所有用戶成功註冊即送RC8800，1RC=0.5TC即可馬上免費參與遊戲</p>
                            <p>每個玩家分享新玩家加入，都能獲得RC的分享獎勵一代5 %，二代5 %，三代4 %</p>
                        </div>
                        <div className="col-xs-5 p-3">
                            <button className="bouton6">
                                詳情
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rules;