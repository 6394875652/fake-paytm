import React, { useRef, useEffect } from 'react'
import './Home.css'

import logo from '../component/logo.png'
import arrow from '../component/left-arrow.svg'
import sound from '../images/sound.mp3'
import log from '../component/log.png'
import ten from '../component/10.avif'
import fire from '../component/fireball.jpg'
import derma from '../component/Derma.avif'
import boat from '../component/Boat.jpg'
import rabbit from '../component/rabbit.jpg'
import winzo from '../component/winzo.jpg'
import scratch from '../component/scratch.jpg'
import swiggy from '../component/swiggy.jpg'


export const Home = ({text1, text2,  number}) => {
 
    const audioRef = useRef(null);

    useEffect(() => {
      // Play the audio when the component is rendered
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    }, []);


  const date = new Date();
  const day = date.getDate();
  const monthNames = [
    'Jan', 'Feb', 'March', 'April', 'May', 'June',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ];
  const monthName = monthNames[date.getMonth()];

  
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; 

  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return (
    <>
        <div className='bod'>
        <div className='container'>
        <div className='upper'>
        <img className='first' src={arrow} alt='j'/>
        <img className='second' src={logo} alt='h'/>
        <h1>Help</h1>



        

       
            

            
        </div>

        <div className='middle'>
            <div className='upp'>
            <div className='sort'>
                <h1>{text1}</h1>
            </div>
            <div className='full'>
            <h1>{text2}</h1>
            <p>UPI ID:9651596998@fam</p>
            </div>
            </div>
            <div className='rup'>
            <h2>₹{number}
            <img src={log} alt="Logo"  /> 
            </h2>
            <p>{`${day} ${monthName}, ${formattedTime}`}</p>
            <h4>Ref. No XX 2717 ▼</h4>
            </div>
            <div className='btn'>
                <button>Check Balance</button>
                <button>Share</button>
                <button>Pay Again</button>
            </div>
            <div className='ft1 '></div>
            <div className='ft2'></div>
        
            
        </div>
        
        <div>
            <div className='aid'>
                <img src={logo} alt='g'/>
                <h4>Use UPI for payments that never fail</h4>
                <button>Try Now</button>
            </div>
        </div>
        <div>
            <div className='aid1'>
                
                <h4>FEATURED</h4>
                
            </div>
        </div>

         <div className='offer'>
            <div className='last'>
                <img src={ten} alt='h'/>
                <h5>Extra 10% OFF</h5>
            </div>
            <div className='last'>
                <img src={boat} alt='h'/>
                <h5>Boat</h5>
            </div>
            <div className='last'>
                <img src={rabbit} alt='h'/>
                <h5>Rare Rabbit</h5>
            </div>
            <div  className='last'>
                <img src={derma} alt='h'/>
                <h5>Dherma Production</h5>
            </div>
            <div  className='last'>
                <img src={fire} alt='h'/>
                <h5>Fire Ball</h5>
            </div>
        </div> 

         <div className='add'>
            <div className='card'>
            <img src={winzo} alt='j'/>
            <h4>Play Winzo</h4>

            </div>
            <div className='card1'>
            <img src={scratch} alt='j'/>
            <h4>Scratch Card</h4>
                
            </div>
            <div className='card'>
            <img src={swiggy} alt='j'/>
            <h4>Please Order</h4>
                
            </div>
        </div> 

       

        </div>
        </div>
        <audio ref={audioRef} src={sound} preload="auto" />
    </>
  )
}
