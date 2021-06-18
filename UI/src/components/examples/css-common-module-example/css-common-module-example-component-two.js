import React from 'react';
import styles from './css-common.module.css';

const CssCommonModuleExampleComponentTwo = () => {
	return (
		<div className={styles.common}>
			This is component two. The &quot;modified&quot; style used in this
			component is {styles.common}.
		</div>
	);
};

export default CssCommonModuleExampleComponentTwo;
