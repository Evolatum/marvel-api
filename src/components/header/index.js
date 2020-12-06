// Dependencies
import React from "react";
import { NavLink } from "react-router-dom";
import "./style.sass";

export default function Header(){
	return <header id="header" className="flex f-jsb f-ac dp-3">
		<a className="h1" href="/">Marvel Heroes</a>
		<div className="links">
			<NavLink to="/comics" activeClassName="b" exact>Comics</NavLink>
			<NavLink to="/saved"  activeClassName="b" exact>Saved</NavLink>
		</div>
	</header>
}