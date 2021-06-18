import React from 'react';
import styles from './css-common.module.css';

const CssCommonModuleExampleComponentOne = () => {
	return (
		<div className={styles.common}>
			This is component one. The &quot;modified&quot; style used in this
			component is {styles.common}.
		</div>
	);
};

export default CssCommonModuleExampleComponentOne;
