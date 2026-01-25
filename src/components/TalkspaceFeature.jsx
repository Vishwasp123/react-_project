import React, { useState } from 'react';
import "./TalkspaceFeature.css";
import PhoneImg from "../assets/images/phone-frame-img.svg";

const STEPS = [
    { id: 1, title: "Check eligibility", desc: "We're in-network with most major plans...", img: "https://cdn.prod.website-files.com/5f1b10a955e49d279bdc2192/6788623f89a65a2751eacb2f_90c318d618b0cbc04bb9317aee84c49d_step1.png" },
    { id: 2, title: "Get matched with a therapist", desc: "Answer a few questions online...", img: "https://cdn.prod.website-files.com/5f1b10a955e49d279bdc2192/67acf56b482a745d487373f2_c5bea54156108305ad18aae868e69503_step2.png" },
    { id: 3, title: "Start therapy", desc: "Communicate with your therapist...", img: "https://cdn.prod.website-files.com/5f1b10a955e49d279bdc2192/679b97f79015434b2de4e11f_3b99ece1d6d568e2f6fbbd7817811a19_step3.png" },
    { id: 4, title: "Switch providers any time", desc: "If your first therapist isn't a fit...", img: "https://cdn.prod.website-files.com/5f1b10a955e49d279bdc2192/6788623f89a65a2751eacb41_83d6b59ad04aedb0524228d4724821a0_step4.png" }
];

const TalkspaceFeature = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className='talkspace-container'>
            <h2 className='main-title'>How Talkspace works</h2>
            <div className='content-wrapper'>
                <div className="steps-column">
                    {STEPS.map((step, index) => {
                        const isActive = activeStep === index;
                        return (
                            <div 
                                key={step.id} 
                                className={`step-card ${isActive ? 'active' : ''} ${index === 4 && isActive ? 'blue-version' : ''}`} 
                                onMouseEnter={() => setActiveStep(index)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                <div className='step-num'>{step.id}</div>
                                <div className='step-info'>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='mockup-column'>
                     
                    <div className='phone-container'>
                        {/* Phone Frame SVG/PNG Overlay */}

                        <div className="corner-svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 367" fill="none">
                            <path d="M322.06 202.214H278.323C272.834 202.214 268.383 206.667 268.383 212.16V356.372C268.383 361.865 263.933 366.317 258.443 366.317H73.5569C68.0671 366.317 63.6168 361.865 63.6168 356.372V266.543C63.6168 261.05 59.1664 256.597 53.6766 256.597H9.94012C4.45034 256.597 0 252.145 0 246.652V10.263C0 4.7702 4.42693 0.317383 9.9167 0.317383H322.089C327.579 0.317383 332 4.77022 332 10.263V192.268C332 197.761 327.55 202.214 322.06 202.214Z" fill="currentColor"></path>
                        </svg>
                    </div>

                       
                        <img src={PhoneImg} className="phone-frame-overlay" alt="phone frame" />
                        
                        {/* Content inside the frame */}
                        <div className='phone-inner'>
                            
                            <img
                                src={activeStep !== null ? STEPS[activeStep].img : STEPS[0].img}
                                alt='app-screen'
                                key={activeStep}
                                className='screen-fade'
                                style={{ opacity: activeStep === null ? 0.7 : 1 }} 
                            />
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalkspaceFeature;