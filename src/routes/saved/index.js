// Dependencies
import React, { useContext } from "react";
import { store } from "store";

// Elements
import HeroCard from "elements/heroCard";

export default function SavedPage(){
	const { state } = useContext(store);

	return <div>
		<div className="flex f-wrap f-jsb">
			{(state && state.length) > 0
				? state.map( hero => <HeroCard key={hero.id} {...hero} />)
				: <h4>No heroes currently saved...</h4>}
		</div>
	</div>
}