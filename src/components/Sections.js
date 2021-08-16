import React from 'react';
import styles from './Statistics/statistics.module.css'

const Sections = ({ title, children }) => {
	return (
		<>
			<h2 className={styles.StatisticsHead}>{title}</h2>
			{children}
		</>
	);
};

export default Sections;