import React from 'react';
import { connect } from 'react-redux';

const StickyForm = ({ dispatch, nextId }) => {
	let input;

	return (

		<div>
			<h2> Add a Sticky </h2>
			<form
				onSubmit={ e => {
					e.preventDefault();
					dispatch({ 
						type: 'ADD_STICKY',
						sticky: { name: input.value, id: nextId, complete: false }
					})
					dispatch({ type: 'INC_ID' })
					input.value = null;
				}} 
			>
			<input ref={ n => input = n } />
			</form>
		</div>
		)
}

const mapStateToProps = (state) => {
	return { nextId: state.nextId }
}

export default connect(mapStateToProps)(StickyForm);

