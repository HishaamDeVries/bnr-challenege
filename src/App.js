import React from "react"
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import IMG1 from './img/IMG1.jpg'
import IMG2 from './img/IMG2.jpeg'
import IMG3 from './img/IMG3.jpg'
import IMG4 from './img/IMG4.jpg'
import IMG5 from './img/IMG5.jpeg'
import './App.css';

export default function App() {
  return (
    <div className="App" style={{backgroundColor: "darkgrey"}}>
      <Carousel nextLabel='Next' prevLabel='Previous'>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img"
            src={IMG1}
            alt="First slide"
          />
          <Carousel.Caption className="black">
            <p>Man On Train tracks That bends and fades away</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img"
            src={IMG2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>Man on rocks in the Ocean</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src={IMG3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>The Wreckage of The Death Star</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src={IMG4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>Stary Night Sky</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src={IMG5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>Long straight road with trees that have Autum leaves </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}