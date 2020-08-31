import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
class Footer extends Component {
    render() {
        return(
            <div id="Footer" className="mt-5">
                <div id="bg" className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12 text-center p-0">
                            <h1 className="mt-5">歡迎你的加入</h1>
                            <p>
                            <b>Welcome to join us</b>
                            </p>
                            <img className="img-responsive logo" src={logo} alt="logo" />
                            <button className="bouton6">
                                立即註冊
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-3 mb-3">
                本站由TGC專業玩家製作，並非官方。如有侵權立即刪除
                </p>
            </div>
        )
    }
}

export default Footer