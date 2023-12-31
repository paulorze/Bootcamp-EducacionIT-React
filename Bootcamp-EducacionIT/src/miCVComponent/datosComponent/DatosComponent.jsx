import styles from './DatosComponent.module.css';

const DatosComponent = () => {
    return (
        <div
            className={styles.datosComponent}
        >
            <h2>
                Datos Personales
            </h2>
            <ul
                className={styles.datosComponent__ul}
            >
                <li>
                    <i>
                        Nombre:
                    </i>
                    <strong>
                        Lindsay
                    </strong>
                </li>
                <li>
                    <i>
                        Apellido:
                    </i>
                    <strong>
                        Ferguson
                    </strong>
                </li>
                <li>
                    <i>
                        DNI:
                    </i>
                    <strong>
                        12345678
                    </strong>
                </li>
                <li>
                    <i>
                        Tel.:
                    </i>
                    <strong>
                        1234567890
                    </strong>
                </li>
                <li>
                    <i>
                        Dirección: 
                    </i>
                    <strong>
                        Av. Siempreviva 742
                    </strong>
                </li>
                <li>
                    <i>
                        E-Mail: 
                    </i>
                    <strong>
                        lindsay.ferguson@reqres.in
                    </strong>
                </li>
                <li>
                    <i>
                        Sitio Web: 
                    </i>
                    <strong>
                        https://saylindsay.com/
                    </strong>
                </li>
            </ul>
        </div>
    );
};

export default DatosComponent;