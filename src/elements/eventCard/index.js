// Dependencies
import React from "react";
import "./style.sass";

export default function EventCard(props){
	return <div className={`event-card dp-1 flex ${props.class || ""}`}>
		<figure><img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt="event's thumbnail"/></figure>
		<div className="card-content">
			<h4>{props.title}</h4>
			<p><b>Comics:</b> {props.comics.available}</p>
			{props.description && <p className="description">{props.description || "Classified."}</p>}
			<a href={props.urls[0].url}>See more</a>
		</div>
	</div>
}