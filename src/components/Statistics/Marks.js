import React from 'react';
import styles from '../Statistics/marks.module.css'

const Marks = ({ marks, changeMark }) => (

    Object.keys(marks).map(key => (

        <button type="button" className={styles.marks} key={key} onClick={() => changeMark(key)}>
            {[key]}
        </button>
    ))

);

export default Marks;

