import React from 'react';
import {Card} from 'react-bootstrap';
import CounterStore from '../../stores/context-counter-store';

const ContextStoreExampleCounter = () => {
	const counter = CounterStore.useStoreState(state => state.count);
	const incrementCounter = CounterStore.useStoreActions(actions => actions.inc);
	return (
		<Card bg="light">
			<Card.Body>
				This component uses the Context Store (
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

export default ContextStoreExampleCounter;
