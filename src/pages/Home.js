import React, { useState } from 'react';
import EventResults from '../components/EventsResults';

import './Home.css';


const Home = ({stateAbbreviation}) => {

    const [locationName, setlocationName] = useState("");
    const [keyWord, setKeyWord] = useState("");
    const [timeToSearch, setTimeToSearch] = useState(false);

    const locationNameChangeHandler = (e) => {
        setlocationName(e.target.value);
        console.log(e.target.value);
    }

    const keyWordChangeHandler = (e) => {
        setKeyWord(e.target.value);
        console.log(e.target.value);
    }
    
    const searchLocations = async (e) => {
        e.preventDefault();
        if (locationName !== "") {
            setTimeToSearch(true);
        }
    }

    return (
        <div className="mt-5 container concert-background">
            <div className="jumbotron">
                <div className="row justify-content-center">
                    <form id="search-form" className="col-lg-6 col-md-12">  
                        <h2 className="pb-3">Search by Location</h2>
                        <div className="form-group form-inline row justify-content-center">
                        <label htmlFor="keyWord" className="space-right mr-1">Key Word: </label>
                            <input type="text" name={keyWord} value={keyWord} onChange={keyWordChangeHandler} className="form-control" id="keyWord" />
                            <label htmlFor="locationName" className="space-right mx-1">State Abbreviation: </label>
                            <input type="text" name={locationName} value={locationName} onChange={locationNameChangeHandler} className="form-control" id="character-name" />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary" onClick={searchLocations}>Submit</button>
                        </div>
                    </form>
                </div>
                { timeToSearch && <EventResults stateAbbreviation={locationName} keyWord={keyWord} /> }
            </div>
        </div>
    )
}

export default Home;
