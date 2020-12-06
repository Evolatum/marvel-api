// Dependencies
import axios from "axios";

const baseUrl = "https://gateway.marvel.com:443/v1/public"
const limit = 20;
const publicKey = "5199dea9e166cb11ada0c8750c2a0755";

export const getHeroes = (props = {}) => axios.get(
	`${baseUrl}/characters?`+
	`${props.name?`name=${props.name}&`:""}`+
	`${props.comics?`comics=${props.comics}&`:""}`+
	`${props.series?`series=${props.series}&`:""}`+
	`${props.events?`events=${props.events}&`:""}`+
	`${props.stories?`stories=${props.stories}&`:""}`+
	`limit=${limit}&offset=${props.offset || 0 *limit}`+
	`&apikey=${publicKey}`
);

export const getHeroById = id => axios.get(
	`${baseUrl}/characters/${id}?apikey=${publicKey}`
);