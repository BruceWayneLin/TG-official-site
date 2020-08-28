import React, { Component } from 'react';
import bannersq from '../../assets/images/banner-square.jpg'
import {StyleRoot} from "radium";
import styles from '../animations/index'


class FirstDiv extends Component {
    render() {
        return (
            <div id="FirstDiv">
                <div className="title">平台介紹</div>
                <div className="text-center text-white">
                    <p>TGC科技有限公司，綜合集團覈心優勢，研發TGC遊戲平臺！</p>
                    <p>2020年 5月在日本上線後，迅速爆紅！成為家喻戶曉的遊戲平台。</p>
                    <p>2020年TGC將走向國際市場，開通更多國家。首發第一站，強勢登入日本。</p>
                </div>
                <StyleRoot>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-6" style={styles.slideInLeft}>
                            <img src={bannersq} alt="banner-square" className="img-responsive" />
                        </div>
                        <div className="col-6" style={styles.slideInRight}>
                            <div>
                                TGC是一個遊戲娛樂平台，秉持互利互惠的原則，開放遊戲紅利與玩家共享期望能建立一個正向循環，
                                永續經營的服務。該平臺上百款遊戲，通過智慧移動端讓遊戲與社群回饋緊密結合，用戶在購買GC後，
                                經過一定時間的養成，實現幣值成長與增值，在平臺與買家通過市場交易後獲得遊戲點數成長收益，
                                更能通過各種遊戲，不同遊戲點數回饋新增遊戲樂趣與收益。
                            </div>
                            <button className="bouton6 btn btn-sm">
                                更多
                            </button>
                        </div>
                    </div>
                </div>
                </StyleRoot>
            </div>
        )
    }
}

export default FirstDiv
