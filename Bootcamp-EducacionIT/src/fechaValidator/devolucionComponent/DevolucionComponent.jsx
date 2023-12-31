import { useContext } from 'react';
import styles from './DevolucionComponent.module.css';
import { DateContext } from '../../context/DateContext';

const DevolucionComponent = () => {
    const {devolucion} = useContext(DateContext);
    return (
        devolucion === true ?
            <h2
                className={styles.devolucion}
            >
                ¡Tu fecha es válida, sos un capo!
            </h2>
        : devolucion === false ?
                <h2
                    className={styles.devolucion}
                >
                    ¡Revisá bien que alguno de los datos que ingresaste no es válido!
                </h2>
            :
                <h2
                    className={styles.devolucion}
                >
                    ¡Ingresá la fecha que querés validar!
                </h2>

    );
};

export default DevolucionComponent;