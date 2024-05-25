import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import plant2 from './plant2.jpg';
import plantbg3 from './plantbg3.png';


  
 export const Contact = () => {
  useEffect(() => {
    
    const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: 'na1',
            portalId: '46252559',
            formId: '6a3ed757-50fa-4a52-bed0-3b4de8543524',
            target: '#hubspotForm'
          });
        }
      };

      document.body.appendChild(script);
    } else {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46252559',
          formId: '6a3ed757-50fa-4a52-bed0-3b4de8543524',
          target: '#hubspotForm'
        });
      }
    }

    return () => {
      const formContainer = document.querySelector('#hubspotForm');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div>

    <div className="absolute top-[-2%] left-[0%] h-[10%] w-full flex justify-center gap-[7%] z-10" >
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/'>Home</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/About'>About</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/Guidelines'>Guidelines</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/Shop'>Shop</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/Contact'>Contact</Link>
          </div>
    
          <div id="hubspotForm" className="absolute top-[25%] left-[2%] h-[50%] w-[70%] flex justify-center ml-[23%] px-[180px] ">
    </div>

    <img src={plant2} className="absolute top-[15%] left-[65%] h-[70%] w-[35%] rounded-[50px]"/>
    <img src={plantbg3} className="absolute top-[10%] left-[1%] h-[70%] w-[39%]  rounded-[50px]"/>


    <div className="bg-[#545458] absolute top-[100%] left-[50%] h-[20%] w-[40%] p-[10%] rounded-[10px]">
                <iframe className="absolute top-[0%] left-[0%] h-[100%] w-[100%] " 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124366.14150251259!2d80.2193408!3d13.0711552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715851963347!5m2!1sen!2sin" 
                title="map"></iframe>
                </div>

                <div className="bg-red-200 absolute top-[100%] left-[8%] h-[5%] w-[40%] p-[10%] rounded-[10px]">
                <p className="absolute top-[20%] left-[11%]  font-sans hover:font-serif italic text-2xl text-white font-bold">
                Phone: 123-456-7890<br/>
                WhatsApp: 123-456-7890<br/>
                Email: info@wildplanthaven.com<br/>
                Address: 123 Greenery Lane, Plantopia<br/>
                Working Hours: Mon-Fri: 9am-5pm<br/>
                </p>
                </div>

                <footer className="bg-neutral-400 absolute top-[150%] left-[0%] h-[9%] w-[100%] p-[1%] rounded-[10px]">
    <p className="absolute top-[-3%] left-[40%] p-[1%] text-white">&copy 2024 Plantopia All rights Reserved</p>
</footer>

    </div>


  );
};

