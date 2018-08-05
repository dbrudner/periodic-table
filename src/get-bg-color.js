export default props => {
	switch (props.category) {
		case "metalloid":
			return props.theme.color1;
		case "noble gas":
			return props.theme.color3;
		case "diatomic nonmetal":
			return props.theme.color4;
		case "polyatomic nonmetal":
			return props.theme.color2;
		case "alkali metal":
			return props.theme.color5;
		case "alkaline earth metal":
			return props.theme.color6;
		case "post-transition metal":
			return props.theme.color7;
		case "transition metal":
			return props.theme.color8;
	}
};
