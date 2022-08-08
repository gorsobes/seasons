import React from 'react';
import './winter.css';
import domik from './img/domik-zima.jpg';
import Image from 'react-bootstrap/Image';

function Winter(){
    return(
        <div className='winter'>
        <div className="snowflakes" aria-hidden="true">
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>
</div>
<Image src={domik} className='myClassg img-responsive' width="100%"/>

        </div>
    );
}
export default Winter;