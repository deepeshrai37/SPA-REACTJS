import React from "react";
import Marquee from "react-fast-marquee";

const Partners=()=> {
  

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <>
    <div className="partnercontainer">
      <h1>
       Our Most Trusted Brands
      </h1>
      <div className="slider">
      <Marquee speed={100}>
        {row2.map((image)=>(
          <img src={image} style={{ padding:'2px 3px',scale:'0.6' }} />
        ))}
      </Marquee>
      </div>
      <div className="appointment" >
         <img src="src\assets\Section.png"></img>
      </div>
     
    
    </div>
    </>
  
  );
}

export default Partners;

