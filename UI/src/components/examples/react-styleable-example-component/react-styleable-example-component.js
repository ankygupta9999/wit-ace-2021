import React from 'react';
import {PropTypes} from 'prop-types';
import styleable from 'react-styleable';
import css from './react-styleable-example-component.module.css';

const ReactStyleableExampleComponent = props => {
	return <div className={props.css.styleablecomponent}>{props.children}</div>;
};

ReactStyleableExampleComponent.propTypes = {
	children: PropTypes.node,
	css: PropTypes.object
};

export default styleable(css)(ReactStyleableExampleComponent);
