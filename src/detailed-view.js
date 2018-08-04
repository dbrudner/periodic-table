import React from 'react';

const DetailedView = props => {
	console.log(props);
	return (
		<div>
			{props.name}
		</div>
	);
}

export default DetailedView;