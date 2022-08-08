import React from 'react';
import './autumn.css';
import Carousel from 'react-bootstrap/Carousel';
import autumn1 from './img/autumn1.jpg';
import autumn2 from './img/autumn2.jpg';
import autumn3 from './img/autumn3.jpg';

function Autumn(){
    return(
        <div className='autumn'>
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={autumn1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Туман и осенний дождь.</h3>
          <p>Но пусть невидима Фудзи. Как радует сердце она.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={autumn2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Любовь старика.</h3>
          <p>Только он думал: "Забуду", - Осенний дождь.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={autumn3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>"Осень уже пришла!"-</h3>
          <p>Шепнул мне на ухо ветер, Подкравшись к подушке моей.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}
export default Autumn;