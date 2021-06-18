import React from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Card} from 'react-bootstrap';

const StoreExampleCounter = () => {
	const counter = useStoreState(state => state.examples.multiComponentCounter);
	const incrementCounter = useStoreActions(
		actions => actions.examples.incrementMultiComponentCounter
	);
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
				) to track the number of times the button is pressed.<hr></hr>
				<div>
					The button has been pressed {counter} time{counter === 1 ? '' : 's'}.
				</div>
				<button type="button" onClick={incrementCounter}>
					Click me!
				</button>
			</Card.Body>
		</Card>
	);
};

export default StoreExampleCounter;
