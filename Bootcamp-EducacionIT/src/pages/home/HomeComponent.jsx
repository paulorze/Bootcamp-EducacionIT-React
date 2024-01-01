import styles from './HomeComponent.module.css';

const HomeComponent = () => {
    return (
        <main>
            <h1>
                Turnos Online
            </h1>
            <p
                className={styles.home__p}
            >
                Bienvenido a nuestro sistema de solicitud de turnos online. Si usted es un cliente, diríjase a la sección "Turno" si desea solicitar un turno. Si usted forma parte de nuestro staff, diríjase a "Turnos", para poder ver los turnos reservados e ir resolviendo las consultas de nuestros clientes.
            </p>
        </main>
    );
};

export default HomeComponent;