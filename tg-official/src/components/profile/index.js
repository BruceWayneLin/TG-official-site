import React, {Component} from 'react';
import takePhone from '../../assets/images/takePhone.png'
class Profile extends Component {
    render() {
        return(
            <div id="Profile">
                <div className="title">分享受益</div>
                <div className="text-center text-white">
                    <p>註冊就贈送RC，推薦很輕鬆</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <img className="holdPhone" src={takePhone} alt="holdPhone" />
                        </div>
                        <div className="col-6">
                            <h5 className="mt-5">所有用戶成功註冊即送RC8800，1RC=0.5TC即可馬上免費參與遊戲</h5>
                            <h5 className="mt-5">每個玩家分享新玩家加入，都能獲得RC的分享獎勵一代5 %，二代5 %，三代4 %</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile