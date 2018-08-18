export const ELEMENT_ADDED = "ELEMENT_ADDED";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const BUILDER_SELECTED = "BUILDER_SELECTED";
export const INFO_SELECTED = "INFO_SELECTED";
export const ELEMENT_SELECTED = "ELEMENT_SELECTED";

const defaultState = {
	compound: [],
	mode: INFO_SELECTED,
	selectedElement: null
};

const parseCompound = (compound, newElement) => {
	if (!compound.length) {
		return [{ ...newElement, quantity: 1 }];
	}

	const isNewElement = compound.every(ele => {
		return ele.name !== newElement.name;
	});

	if (isNewElement) {
		return [...compound, { ...newElement, quantity: 1 }];
	} else {
		return compound.map(element => {
			if (element.name === newElement.name) {
				return { ...element, quantity: element.quantity + 1 };
			}
			return element;
		});
	}
};

export const reducer = (state = defaultState, action) => {
	if (action.type === ELEMENT_ADDED) {
		return {
			...state,
			compound: parseCompound(state.compound, action.payload)
			// compound: [...state.compound, parseCompound(action.payload)]
		};
	}

	if (action.type === BUILDER_SELECTED) {
		return {
			...state,
			mode: BUILDER_SELECTED
		};
	}

	if (action.type === INFO_SELECTED) {
		return {
			...state,
			mode: INFO_SELECTED
		};
	}

	if (action.type === ELEMENT_SELECTED) {
		return {
			...state,
			detailedElement: action.payload
		};
	}

	return state;
};
