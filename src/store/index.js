import React, { createContext, useReducer } from "react";
import { types } from "./actions"

const initialState = [];
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch(action.type){
			case types.saveHero:
				return setStorageItem([...state, action.data]);
			case types.delHero:
				return setStorageItem(state.filter( s => s.id !== action.data));
			default:
				return [...state];
		}
	}, getStorageItem(initialState));

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }

function getStorageItem(inital = {}) {
	try {
		return JSON.parse(localStorage["savedHeroes"]);
	}
	catch {
		return inital
	}
}

function setStorageItem(item) {
	try {
		localStorage.setItem("savedHeroes", JSON.stringify(item));
		return item
	}
	catch{
		return item;
	}
}