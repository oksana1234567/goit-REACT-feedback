import React from 'react';
import styles from '../Statistics/statistics.module.css'

const Statistics = ({ marks }) => (
    <ul className="StatisticList">
        <h2 className={styles.StatisticsHead}>Statistics</h2>
        {
            Object.keys(marks).map(key => (

                <li className={styles.statEl} key={key}>
                    {[key]} : {marks[key]}
                </li>
            ))


        }


    </ul>
);

export default Statistics;