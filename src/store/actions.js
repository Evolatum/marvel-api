export const types = {
	saveHero: "SAVE_HERO",
	delHero: "DELETE_HERO"
};

export const saveHero = (dispatch, data) => {
	dispatch({type: types.saveHero, data});
};

export const delHero = (dispatch, data) => {
	dispatch({type: types.delHero, data});
};