import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false)
    // console.log(handleVisitedCountries)
    const countryVisited = () => {

                // system - 1 

        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

                // system - 2

        // setVisited(visited ? false : true)

                //system - 3

        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} . {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={countryVisited} className='btn'>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;