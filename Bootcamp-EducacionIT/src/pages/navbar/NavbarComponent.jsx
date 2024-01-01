import { Link } from 'react-router-dom';
import styles from './NavbarComponent.module.css';

const NavbarComponent = () => {
    return (
        <header
            className={styles.header}
        >
            <ul
                className={styles.ul}
            >
                <li>
                    <Link
                        to={'/'}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/turno'}
                    >
                        Turno
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/turnos'}
                    >
                        Turnos
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default NavbarComponent;