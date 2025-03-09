import React, { useState, useEffect } from 'react';
import './componentsCSS/LandingPage.css';
import heartbeatLogo from './heartbeat.png';

function LandingPage() {
    const [typedText, setTypedText] = useState('');
    const [showHighlight, setShowHighlight] = useState(false);
    const [typedHighlight, setTypedHighlight] = useState('');
    const [showSubtext, setShowSubtext] = useState(false);
    const fullText = "Prevent, Predict and\nProtect with";
    const highlightText = "Anomalyze";
    const subtextMessage = "Catch health anomalies early, stay ahead, and live healthier!";

    useEffect(() => {
        let currentIndex = 0;
        let highlightIndex = 0;
    
        const typingInterval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setTypedText(fullText.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
                setTimeout(() => {
              const highlightTypingInterval = setInterval(() => {
                if (highlightIndex <= highlightText.length) {
                  setTypedHighlight(highlightText.slice(0, highlightIndex));
                  highlightIndex++;
                  if (!showHighlight) {
                    setShowHighlight(true);
                  }
                } else {
                  clearInterval(highlightTypingInterval);
                      setTimeout(() => {
                    setShowSubtext(true);
                        setTimeout(() => {
                      console.log('0.5 seconds after subtext is shown');
                    }, 100);
                  }, 100);
                }
              }, 20); 
            }, 100);
          }
        }, 20);
    
        return () => {
          clearInterval(typingInterval);
        };
      }, []);

    return (
        <div className='LandingBg'>
            <div className='LPnavbar'>
                <img src={heartbeatLogo} alt='Logo' className='logoImage'/>
                <h2 className='symptosenseHeader'>Symptosense</h2>
            </div>
            <div className='landingTextContainer'>
                <div className='textWrapper'>
                    <h1 className='typingAnimation'>{typedText}</h1>
                    <h1 className={`highlightedText ${showHighlight ? 'slide-in' : ''}`}>
                        {typedHighlight}
                    </h1>
                    {showSubtext && (
                        <>
                            <h2 className='subtextFade'>{subtextMessage}</h2>
                            <button className='joinNowButton'>Join Now!</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LandingPage;