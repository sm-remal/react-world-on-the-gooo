import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countries}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [selectFlags, setSelectFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)
    }

    const handleSelectFlags = (flags) => {
        // console.log(country);
        const newSelectFlags = [...selectFlags, flags];
        setSelectFlags(newSelectFlags)
    }

    const countriesList = use(countries)
    const countriesData = countriesList.countries
    // console.log(countriesData)
    return (
        <div>
            <div className='heading'>
                <h2>Countries : {countriesData.length}</h2>
                <h3>Total Visited Country : {visitedCountries.length} </h3>
                <h3>Total Flags: {selectFlags.length}</h3>
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countriesData.map(country => <Country key={country.cca3.cca3} handleSelectFlags = {handleSelectFlags} handleVisitedCountries = {handleVisitedCountries} country = {country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;