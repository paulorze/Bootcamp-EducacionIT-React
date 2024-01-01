import { useDispatch } from 'react-redux';
import styles from './TurnosListItemComponent.module.css';

const TurnosListItemComponent = ({turno, action}) => {
    const dispatch = useDispatch();
    const atenderTurno = ()=> {
        dispatch(action(turno.id));
    };
    
    return (
        <li
            className={styles.turn}
        >
            <h4
                className={styles.turnID}
            >
                {turno.id}
            </h4>
            <i
                className={styles.turnDate}
            >
                {turno.date}
            </i>
            <p
                className={styles.turnReason}
            >
                {turno.reason}
            </p>
            <div
                className={styles.botonera}
            >
                <button
                    type='button'
                    onClick={atenderTurno}
                >
                    Atender
                </button>
            </div>
        </li>
    );
};

export default TurnosListItemComponent;