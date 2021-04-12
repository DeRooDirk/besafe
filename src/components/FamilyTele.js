
import "../module/FamilyTele.css";
import PhoneInput from "react-phone-number-input";
import React from "react";
import { useState } from "react";

//import Main from './Main'

const FamilyTele = () => {
  const [value, setValue] = useState();
  return (
      <>
<div className='bigWrap'>
    <div className='Wrap'>
      <PhoneInput 
        className="phone"
        placeholder="Enter phone number"
        
        value={value}
        onChange={setValue}
      />

      <p className='Enter'>The telephone Number you entered : {value}</p>
      </div>
      </div>
    </>
  );
};

export default FamilyTele;
