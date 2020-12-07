// Dependencies
import React, { useState, useEffect } from "react";
import "./style.sass";

// Actions & Utils
import { getEvents } from "utils/api";

// Elements
import EventCard from "elements/eventCard";

export default function EventsPage(){
	const [eventsData, setEventsData] = useState([]);

	useEffect(()=>{
		getEvents()
		.then(res => setEventsData(res.data.data.results))
		.catch(err => console.warn(err.message));
	},[]);

	const handleSubmit = e => {
		e.preventDefault();
		getEvents({title:e.target.search.value.trim().replace(/\s{2,}/g, " ")})
		.then(res => {
			setEventsData(res.data.data.results);
		})
		.catch(err => console.warn(err.message));
	};

	return <div id="events-page">
		<h2>Events</h2>
		<form onSubmit={handleSubmit} id="search-form">
			<div className="flex f-cols">
				<input id='search' type='text' placeholder='Avengers' required
					pattern="^[a-zA-Z0-9]+$" title='Use only letters or numbers, up to 20' max="20" />
				<label htmlFor='search' className='active'>Search keyword</label>
			</div>
		</form>
		<button type="submit" value="Submit" form="search-form" className="btn">Search</button>
		<div className="flex f-wrap f-jsb">
			{(eventsData.length) > 0
				? eventsData.map( event => <EventCard key={event.id} {...event} />)
				: <h4>No events found...</h4>}
		</div>
	</div>;
}
