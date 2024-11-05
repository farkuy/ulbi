import React, {useState} from 'react';
import * as styles from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div className={styles.button}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;