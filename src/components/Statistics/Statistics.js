import React from 'react';
import styles from '../Statistics/statistics.module.css'

const Statistics = ({ marks, countTotalFeedback, countPositiveFeedbackPercentage }) => (
    <section>
        <h2 className={styles.StatisticsHead}>Statistics</h2>
         
        {countTotalFeedback() !== 0 && <div>
         <ul className="StatisticList">
        
        {Object.keys(marks).map(key => (

        <li className={styles.statEl} key={key}>
         {[key]} : {marks[key]}
        </li>
                                        ))
        }
        </ul>
        <div className={styles.totalFeedback} >
        Total: {countTotalFeedback()}
        </div>
        <div className={styles.totalFeedback}>
        Positive feedback: { countPositiveFeedbackPercentage() }%
        </div>
        
        </div>}

        {countTotalFeedback() === 0 && <div className={styles.noFeedback}>No feedback given</div>}
   
    </section>
     
);

export default Statistics;

