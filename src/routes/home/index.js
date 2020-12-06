// Dependencies
import React, { useState, useEffect } from "react";

import { getHeroes } from "utils/api"
import exampleRes from "assets/marvelAPI.json";

// Elements
import HeroCard from "elements/heroCard";

export default function HomePage(){
	const [heroesData, setHeroesData] = useState([]);
	useEffect(()=>{
		getHeroes()
		.then(res => console.log(res.data.data.results))
		.catch(err => console.warn(err.message));
		setHeroesData(exampleRes.data.results);
	},[]);

	return <div>
		<div className="flex f-wrap f-jc">
			{heroesData.map( hero => <HeroCard key={hero.id} {...hero} />)}
		</div>
	</div>
}