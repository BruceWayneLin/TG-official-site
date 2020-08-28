import React, {Component} from 'react';
import us from '../../assets/images/us.png';
import {StyleRoot} from "radium";
import styles from '../animations/index';
class About extends Component {
    render() {
        return(
            <div id="About">
                <div className="title">關於我們</div>
                <div className="text-center text-white">
                    <p>TGC首批日本玩家</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="Desc">
                            不懂金融，這輩子就只能賺死錢拿死工資，不會錢生錢。錢放在銀行只能貶值不會給你增值。工資追不過通貨膨脹的年代。唯有互聯網+金融+倍增制度是必然趨勢，没有與時俱進，就只能被社會淘汰！
                            </div>
                            <StyleRoot>
                            <img src={us} alt="us" style={styles.bounce}/>
                            </StyleRoot>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About