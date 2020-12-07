// Dependencies
import React from "react";
import "./style.sass";

export default function ComicCard(props){
	return <div className={`comic-card dp-1 flex ${props.class || ""}`}>
		<figure><img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt="comic's thumbnail"/></figure>
		<div className="card-content">
			<h4>{props.title}</h4>
			<p><b>Pages:</b> {props.pageCount}</p>
			{props.description && <p className="description">{props.description || "Classified."}</p>}
			<a href={props.urls[0].url}>See more</a>
		</div>
	</div>
}