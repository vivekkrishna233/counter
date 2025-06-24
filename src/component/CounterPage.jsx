import React, { useState, useEffect } from 'react';
import './CounterPage.css';
import patternHills from '../Assets/pattern-hills.svg';
import bgStars from '../Assets/bg-stars.svg';
import iconFacebook from '../Assets/icon-facebook.svg';
import iconPinterest from '../Assets/icon-pinterest.svg';
import iconInstagram from '../Assets/icon-instagram.svg';

export default function CounterPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 41
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="counter-container">
      
      <div className="stars-container">
        <img src={bgStars} alt="Background Stars" className="bg-stars" />
      </div>

      <div className="mountain-container">
        <img src={patternHills} alt="Hills Pattern" className="mountain-svg" />
      </div>

      <div className="main-content">
        <h1 className="title">
          WE'RE LAUNCHING SOON
        </h1>

        <div className="timer-container">
          {[
            { value: timeLeft.days, label: 'DAYS' },
            { value: timeLeft.hours, label: 'HOURS' },
            { value: timeLeft.minutes, label: 'MINUTES' },
            { value: timeLeft.seconds, label: 'SECONDS' }
          ].map((item, index) => (
            <div key={index} className="timer-item">
              <div className="timer-box">
                <div className="divider-line"></div>
                <div className="shadow-overlay"></div>
                <div className="timer-number">
                  {formatNumber(item.value)}
                </div>
              </div>
              <div className="timer-label">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="social-container">
        <div className="social-icon">
          <img src={iconFacebook} alt="Facebook" />
        </div>
        <div className="social-icon">
          <img src={iconPinterest} alt="Pinterest" />
        </div>
        <div className="social-icon">
          <img src={iconInstagram} alt="Instagram" />
        </div>
      </div>
    </div>
  );
}