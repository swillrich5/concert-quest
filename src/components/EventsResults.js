import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';


const EventsResults = ({stateAbbreviation, keyWord}) => {

    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=6fVBx428X9mVMPm0M4huWc3fWFyDuZmh";
            try {
                const URL = baseURL + '&stateCode=' + stateAbbreviation + '&countryCode=US&keyword=' + keyWord + '&size=200';
                console.log(URL);
                setLoading(true);
                const res = await axios.get(URL);
                setEvents(res.data._embedded.events);
                console.log(res.data._embedded.events);
                setLoading(false);
            }
            catch(err) {
                console.log(err);
            }
        }
        getEvents();
    }, [stateAbbreviation, keyWord]);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div>
                {/* <div className="row mt-5"> */}
                <div>
                    {events.map(event =>
                        <Link to={`/character/${event.id}`} key={event.id} className='col mx-1 my-2' style={{width: "200px"}}>
                            <div>
                                <h6>{event.name}</h6>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default EventsResults;
