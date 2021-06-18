import React from 'react';
import {Card} from 'react-bootstrap';
import {useStoreState} from 'easy-peasy';

const StoreDisplayCounter = () => {
	const counter = useStoreState(state => state.examples.multiComponentCounter);

	return (
		<Card bg="light">
			<Card.Body>
				This component uses the Global Store (
				<a
					href="https://easy-peasy.now.sh/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Easy Peasy
				</a>
				) to display the number of times the button from the other container has
				been pressed.
				<hr></hr>
				<div>
					The button on the other component has been pressed {counter} time
					{counter === 1 ? '' : 's'}.
				</div>
			</Card.Body>
		</Card>
	);
};

export default StoreDisplayCounter;
