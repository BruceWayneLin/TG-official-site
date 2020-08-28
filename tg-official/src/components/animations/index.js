
import {slideInLeft, slideInRight, bounce, fadeIn} from 'react-animations';
import Radium, {StyleRoot} from "radium";

const styles = {
  slideInLeft: {
    animation: 'x 1s',
    animationDuration: '3s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  fadeIn:  {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  slideInRight: {
    animation: 'x 1s',
    animationDuration: '3s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  }
}

export default styles