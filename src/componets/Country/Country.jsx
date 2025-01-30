/* eslint-disable react/prop-types */

import { useState } from 'react';
import'./Country.css'

const Country = ({country,handleVisitedCountry}) => {

    const [visited,setVisited] = useState(false);
   
    
    if(!country){
        console.error("Not found")
        return null;
    }
    const{name,flags,population,area,cca3}=country;

   

   const handleClick=()=>{
    setVisited(true)
   }


    
    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h3 style={{color:visited?'red':'black'}}>{name?.common}</h3>
            
            <img src={flags?.png}></img>
            <p>Population:{population} </p>
            <p>{area}km²</p>
            <p><small>Code:{cca3}</small></p>
            <button className='btn'>Mark Visited</button> <br></br>
            <button className='btn' onClick={handleClick}>{visited?'Visited':'Going'}</button>
            {visited ?'I have Visited the country':'I want to visit'}
        </div>
    );
};

export default Country;