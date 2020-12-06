// Dependencies
import React, { useContext, useState, useEffect } from "react";
import "./style.sass";

// Store & Actions
import { store } from "store";
import { saveHero, delHero } from "store/actions";


export default function HeroCard(props){
	const { state, dispatch } = useContext(store);
	const [isSaved, setIsSaved] = useState(false)
	useEffect(()=>{
		setIsSaved(state && state.filter( s => s.id === props.id).length > 0)
	},[state, props.id]);

	const handleClick = () => {
		const classlessProps = {...props};
		delete classlessProps.class;
		isSaved ? delHero(dispatch, props.id) : saveHero(dispatch, classlessProps);
	};

	return <div className={`hero-card dp-1 flex ${props.class || ""}`}>
		<i className="icon add-hero" onClick={handleClick}>{isSaved ? "remove_circle" : "add_circle"}</i>
		<figure><img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt="hero's thumbnail"/></figure>
		<div className="card-content">
			<h4>{props.name.split("(")[0]}</h4>
			<p><b>Sightings:</b> {props.comics.available}</p>
			<p className="description"><b>Information: </b>{props.description || "Classified."}</p>
			<a href={`/heroes/${props.id}`}>See more</a>
		</div>
	</div>
}