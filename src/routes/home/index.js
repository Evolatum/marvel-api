// Dependencies
import React, { useState, useEffect } from "react";

// Actions & Utils
import { getHeroes } from "utils/api"
import exampleRes from "assets/marvelAPI.json";

// Elements
import HeroCard from "elements/heroCard";

export default function HomePage(){
	const [heroesData, setHeroesData] = useState([]);

	useEffect(()=>{
		// getHeroes()
		// .then(res => console.log(res.data.data.results))
		// .catch(err => console.warn(err.message));
		setHeroesData(exampleRes.data.results);
	},[]);

	const handleSubmit = e => {
		e.preventDefault();
		getHeroes({name:e.target.search.value.trim().replace(/\s{2,}/g, " ")})
		.then(res => {
			setHeroesData(res.data.data.results);
		})
		.catch(err => console.warn(err.message));
	};

	return <div id="home-page">
		<h2>Heroes</h2>
		<form onSubmit={handleSubmit} id="search-form">
			<div className="flex f-cols">
				<input id='search' type='text' placeholder='iceman' required
					pattern="^[a-zA-Z0-9]+$" title='Use only letters or numbers, up to 20' max="20" />
				<label htmlFor='search' className='active'>Search keyword</label>
			</div>
		</form>
		<button type="submit" value="Submit" form="search-form" className="btn">Search</button>
		<div className="flex f-wrap f-jsb">
			{(heroesData.length) > 0
				? heroesData.map( hero => <HeroCard key={hero.id} {...hero} />)
				: <h4>No comics found...</h4>}
		</div>
	</div>
}