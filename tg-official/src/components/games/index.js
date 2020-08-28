import React, {Component} from 'react';
import gamesPng from '../../assets/images/games.png'
class Games extends Component {
    render() {
        return(
            <div id="Games">
                <div className="title">百款遊戲</div>
                <div className="text-center text-white">
                    <p>多元話選擇</p>
                    <p>滿足不同需求</p>
                </div>
                <img src={gamesPng} alt="games"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="bouton6">
                                更多遊戲
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Games