import React from "react"
import anime from 'animejs';


import { Container, theme, media } from '../styles'
import Fade from 'react-reveal/Fade';
import img from '../images/test.png'

class Project extends React.Component {

  componentDidMount() {
    anime({
      targets: '.morphing-demo .polymorph',
      points: [
        { value: [
          '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
          '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
        },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true
    });
  }

  handleMouseOver = () => {
    // console.log('hovered')
    anime({
      targets: '.animeTest',
      points: [
        { value: '0 40,222 40,220 0,0 0' }
      ],
      easing: 'easeOutQuad',
      duration: 300,
    });
  };

  handleMouseOut = () => {
    // console.log('hoverOut')

    anime({
      targets: '.animeTest',
      points: [
        { value: '0 222,220 114,220 0,0 0' }
      ],
      easing: 'easeOutQuad',
      duration: 300,
    });
  };


  render () {
    return (
      <>
      <section id="grid" className="grid clearfix">
        <a href="#" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
          <figure>
            <img src={img} alt="alt" />
            <svg className="banner"viewBox="0 0 240 220">
              <g fill="none" fillRule="evenodd">
                <polygon className="animeTest" strokeWidth="1" fill="#fff" stroke="#fff" points="0 222,220 114,220 0,0 0"></polygon>
                {/* <polygon points="0 40,222 40,220 0,0 0"></polygon> */}
              </g>
            </svg>

            <figcaption>
              <h2>Crystalline</h2>
              <p>Soko radicchio bunya nuts gram dulse.</p>
              <button>View</button>
            </figcaption>
          </figure>
        </a>
      </section>

      <div className="demo-content align-center morphing-demo">
          <svg width="140" height="140" viewBox="0 0 140 140">
            <g fill="none" fillRule="evenodd">
              <g fill="red" fillOpacity=".15" transform="translate(0 6)">
                <polygon points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369"></polygon>
                <polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"></polygon>
                <polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"></polygon>
                <polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"></polygon>
              </g>
              <polygon className="polymorph" strokeWidth="1" stroke="#ffffff" points="70 24.8013674881161 119.98682567569617 60.223296820342526 99.8778775039613 117.21817432430383 50.3207550079226 102.38379976156361 4.275935214668593 54.611838632762456 "></polygon>
            </g>
          </svg>
        </div>
      </>
    )
  }
}

export default Project


