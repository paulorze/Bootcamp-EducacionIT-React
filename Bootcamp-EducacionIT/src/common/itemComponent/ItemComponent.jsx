import styles from './ItemComponent.module.css';

const ItemComponent = ({company, from, to, summary}) => {
    return (
        <li
            className={styles.itemComponent}
        >
            <h4
                className={styles.company}
            >
                {company}
            </h4>
            <i
                className={styles.date}
            >
                {from} - {to}
            </i>
            <p
                className={styles.summary}
            >
                {summary}
            </p>
        </li>
    );
};

export default ItemComponent;