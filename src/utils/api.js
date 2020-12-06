// Dependencies
import axios from "axios";

const baseUrl = "https://gateway.marvel.com:443/v1/public"
const limit = 20;
const publicKey = "5199dea9e166cb11ada0c8750c2a0755";

export const getHeroes = (params = {}) => axios.get(
	`${baseUrl}/characters?`+
	`${params.name?`name=${params.name}&`:""}`+
	`${params.comics?`comics=${params.comics}&`:""}`+
	`${params.series?`series=${params.series}&`:""}`+
	`${params.events?`events=${params.events}&`:""}`+
	`${params.stories?`stories=${params.stories}&`:""}`+
	`limit=${limit}&offset=${(params.offset || 0) * limit}`+
	`&apikey=${publicKey}`
);

export const getHeroById = id => axios.get(
	`${baseUrl}/characters/${id}?apikey=${publicKey}`
);

export const getComics = (params = {}) => axios.get(
	`${baseUrl}/comics?`+
	`${params.title?`title=${params.title}&`:""}`+
	`${params.characters?`characters=${params.characters}&`:""}`+
	`${params.series?`series=${params.series}&`:""}`+
	`${params.events?`events=${params.events}&`:""}`+
	`${params.stories?`stories=${params.stories}&`:""}`+
	`limit=${limit}&offset=${(params.offset || 0) * limit}`+
	`&apikey=${publicKey}`
);

export const getEvents = (params = {}) => axios.get(
	`${baseUrl}/events?`+
	`${params.name?`name=${params.name}&`:""}`+
	`${params.characters?`characters=${params.characters}&`:""}`+
	`${params.series?`series=${params.series}&`:""}`+
	`${params.comics?`comics=${params.comics}&`:""}`+
	`${params.stories?`stories=${params.stories}&`:""}`+
	`limit=${limit}&offset=${(params.offset || 0) * limit}`+
	`&apikey=${publicKey}`
);

export const getSeries = (params = {}) => axios.get(
	`${baseUrl}/series?`+
	`${params.title?`title=${params.title}&`:""}`+
	`${params.comics?`comics=${params.comics}&`:""}`+
	`${params.stories?`stories=${params.stories}&`:""}`+
	`${params.events?`events=${params.events}&`:""}`+
	`${params.characters?`characters=${params.characters}&`:""}`+
	`limit=${limit}&offset=${(params.offset || 0) * limit}`+
	`&apikey=${publicKey}`
);

export const getStories = (params = {}) => axios.get(
	`${baseUrl}/series?`+
	`${params.comics?`comics=${params.comics}&`:""}`+
	`${params.series?`series=${params.series}&`:""}`+
	`${params.events?`events=${params.events}&`:""}`+
	`${params.characters?`characters=${params.characters}&`:""}`+
	`limit=${limit}&offset=${(params.offset || 0) * limit}`+
	`&apikey=${publicKey}`
);
