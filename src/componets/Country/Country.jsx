/* eslint-disable react/prop-types */
import'./Country.css'

const Country = ({country}) => {
    
    if(!country){
        console.error("Not found")
        return null;
    }
    const{name,flags,population,area}=country;
    return (
        <div className="country">
            <h3>{name?.common}</h3>
            
            <img src={flags?.png}></img>
            <h6>{population} people</h6>
            <h6>{area}km²</h6>
        </div>
    );
};

export default Country;