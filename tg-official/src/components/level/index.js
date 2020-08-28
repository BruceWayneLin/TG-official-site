import React, {Component} from 'react';
import allLevels from '../../assets/images/allLevels.png';
import {StyleRoot} from "radium";
import styles from '../animations/index';
class Level extends Component {
    render() {
        return(
            <div id="Level">
                <div className="title">會員等級</div>
                <div className="text-center text-white">
                    <p>能力體現價值，無限想象空間</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="Desc">
                                新註冊玩家VIP等級為鐵，完成基本資料後升級為銅，基本資料email完成驗證後即可保有銀卡以上VIP等級。當玩家當前”60日內累計押注額”(T幣和G幣為1:1;R幣和L幣為1:0.5)，立即提升VIP層級；若"60日內累積押注額"未達原VIP等級會即時降VIP等級。
                            </div>
                            <StyleRoot>
                            <img src={allLevels} alt="levels" style={styles.bounce}/>
                            </StyleRoot>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Level