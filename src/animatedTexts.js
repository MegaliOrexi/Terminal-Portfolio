import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    const typedRef = useRef(null);
  
    useEffect(() => {
      const options = {
        strings: ["Hello my name is Zain", "I am currently a Student", "I am working on projects to get better"],
        typeSpeed: 100,
        backSpeed: 100,
        loop:true,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      return () => {
        typed.destroy(); // Clean up the Typed.js instance
      };
    }, []);
  
    return <h1 className='text-5xl text-yellow-400'> ~&gt; <span ref={typedRef}></span></h1>;
};
 
export default TypedText