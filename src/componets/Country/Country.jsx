/* eslint-disable react/prop-types */

import { useState } from 'react';
import'./Country.css'

const Country = ({country}) => {

    const [visited,setVisited] = useState(false);
    
    if(!country){
        console.error("Not found")
        return null;
    }
    const{name,flags,population,area,cca3}=country;

   

   const handleClick=()=>{
    setVisited(!visited)
   }


    
    return (
        <div className="country">
            <h3>{name?.common}</h3>
            
            <img src={flags?.png}></img>
            <p>{population} people</p>
            <p>{area}km²</p>
            <p><small>Code:{cca3}</small></p>
            <button className='btn' onClick={handleClick}>{visited?'Visited':'Going'}</button>
            {visited ?'I have Visited the country':'I want to visit'}
        </div>
    );
};

export default Country;