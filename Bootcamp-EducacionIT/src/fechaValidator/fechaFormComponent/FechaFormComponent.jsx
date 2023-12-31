import { useContext, useEffect } from 'react';
import styles from './FechaFormComponent.module.css';
import { DateContext } from '../../context/DateContext';

const FechaFormComponent = () => {
    const {devolucion, yearError, monthError, dayError, maxDays, verifyDate} = useContext(DateContext);
    // useEffect(()=>{
    //     console.log(devolucion, yearError, monthError, dayError)
    // }, [devolucion, yearError, monthError, dayError]);
    return (
        <form
            className={styles.form}
            onSubmit={verifyDate}
        >
            <label 
                className={styles.label}
                htmlFor="year"
            >
                Ingrese el año (1900 - 2099)
                <input 
                    className={styles.input}
                    type="number" 
                    name="year"
                    placeholder="Ingrese el año"
                    required
                    autoFocus
                    min={1900}
                    max={2099}
                    step={1}
                />
                {
                    yearError &&
                        <span
                            className={styles.span}
                        >
                            Recordá que el año debe encontrarse entre 1900 y 2099.
                        </span>
                }
            </label>
            <label 
                className={styles.label}
                htmlFor="month"
            >
                Ingrese el mes (1-12)
                <input 
                    className={styles.input}
                    type="number" 
                    name="month"
                    placeholder="Ingrese el mes"
                    required
                    min={1}
                    max={12}
                    step={1}
                />
                {
                    monthError &&
                        <span
                            className={styles.span}
                        >
                            Recordá que el mes debe encontrarse entre 1 y 12.
                        </span>
                }
            </label>
            <label 
                className={styles.label}
                htmlFor="day"
            >
                Ingrese el día (1-31, dependiendo del mes)
                <input 
                    className={styles.input}
                    type="number" 
                    name="day"
                    placeholder="Ingrese el día"
                    required
                    min={1}
                    max={31}
                    step={1}
                />
                {
                    dayError &&
                        <span
                            className={styles.span}
                        >
                            Recordá que el día debe encontrarse entre 1 y {maxDays}.
                        </span>
                }
            </label>
            <button
                className={styles.button}
                type='submit'
            >
                ¡Validar Fecha!
            </button>
        </form>
    );
};

export default FechaFormComponent;