import React from 'react';
import './spring.css';
import dcloud1 from './img/cloud-01.png';
import dcloud2 from './img/cloud-02.png';
import dcloud3 from './img/cloud-03.png';
import dcloud4 from './img/cloud-04.png';
import Image from 'react-bootstrap/Image';

function Spring(){

    return(
        <div className='spring'>
            <div className="cloud">
    <div className="cloudcontent">
    </div>
    <Image src={dcloud1} className='cloud1' />
    <Image src={dcloud2} className='cloud2' />
    <Image src={dcloud3} className='cloud3' />
    <Image src={dcloud4} className='cloud4' />
   
</div>
        </div>
    );
}
export default Spring;