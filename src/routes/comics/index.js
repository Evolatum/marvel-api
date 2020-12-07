// Dependencies
import React, { useState, useEffect } from "react";
import "./style.sass";

// Actions & Utils
import { getComics } from "utils/api";

// Elements
import ComicCard from "elements/comicCard";

export default function ComicsPage(){
	const [comicsData, setComicsData] = useState([]);

	useEffect(()=>{
		getComics()
		.then(res => setComicsData(res.data.data.results))
		.catch(err => console.warn(err.message));
	},[]);

	const handleSubmit = e => {
		e.preventDefault();
		getComics({title:e.target.search.value.trim().replace(/\s{2,}/g, " ")})
		.then(res => {
			setComicsData(res.data.data.results);
		})
		.catch(err => console.warn(err.message));
	};

	return <div id="comics-page">
		<h2>Comics</h2>
		<form onSubmit={handleSubmit} id="search-form">
			<div className="flex f-cols">
				<input id='search' type='text' placeholder='Avengers' required
					pattern="^[a-zA-Z0-9]+$" title='Use only letters or numbers, up to 20' max="20" />
				<label htmlFor='search' className='active'>Search keyword</label>
			</div>
		</form>
		<button type="submit" value="Submit" form="search-form" className="btn">Search</button>
		<div className="flex f-wrap f-jsb">
			{(comicsData.length) > 0
				? comicsData.map( comic => <ComicCard key={comic.id} {...comic} />)
				: <h4>No comics found...</h4>}
		</div>
	</div>;
}
