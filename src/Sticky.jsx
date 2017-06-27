import React from 'react';
import { connect } from 'react-redux';

const Sticky = ({ id, name, complete, dispatch }) => (
	<li
		onClick={ () => dispatch({ type: 'TOGGLE_STICKY', id }) }
		style={ complete ? {textDecoration: 'line-through', color: 'orange' } : {} }
		>
		{name}
	</li>
)

export default connect()(Sticky);