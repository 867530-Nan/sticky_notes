import React from 'react';
import { connect } from 'react-redux';
import Sticky from './Sticky';

const filtered = (stickies, filter) => {
	switch(filter) {
		case 'All':
			return stickies;
		case 'Active':
			return stickies.filter( t => !t.complete )
		case 'Completed':
			return stickies.filter ( t => t.complete )
	}
}

const StickyList = ({ stickies, filter }) => (
	<ul>
		{ filtered(stickies, filter).map( (t) =>{
			return ( <Sticky key={t.id} {...t} />)
		})
	}
	</ul>
)

const mapStateToProps = (state) => {
	return { stickies: state.stickies, filter: state.filter }
}

export default connect(mapStateToProps)(StickyList);

