import React from 'react';
import { Parallax } from 'react-parallax';
import img1 from '../../Images/city.jpg';

const ImgParallax = () => (
   <div>
        <Parallax bgImage={img1} bgImageAlt="the cat" strength={500} >
        <div style={{ height: 350,backgroundColor: "rgba(0, 0, 0, 0.5)"}} >
            <div className="white-text parallax-div"
                style={{
                    left: "50%", top: "50%",
                    position: "absolute", 
                    transform: "translate(-50%,-50%)"
                }}
                >
                <p className="h1-responsive font-weight-bold" style={{textAlign: "center"}}>
                    ‘E-Crime System’ provides three facilities in one system that is Reporting,
                    Management, and Visualization of Crimes
                </p>
            </div>
        </div>
    </Parallax>
   </div>
);

export default ImgParallax;