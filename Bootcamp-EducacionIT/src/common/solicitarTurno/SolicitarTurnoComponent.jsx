import { turnoCajaManager, turnoOficialManager, turnoOnlineManager } from '../../rxjs/shared-services';
import styles from './SolicitarTurnoComponent.module.css';

const SolicitarTurnoComponent = () => {
    const handleOpenTurnoCaja = ()=> {
        turnoCajaManager.next(true);
        turnoOficialManager.next(false);
        turnoOnlineManager.next(false);
    };

    const handleOpenTurnoOficial = () => {
        turnoCajaManager.next(false);
        turnoOficialManager.next(true);
        turnoOnlineManager.next(false);
    };

    const handleOpenTurnoOnline = () => {
        turnoCajaManager.next(false);
        turnoOficialManager.next(false);
        turnoOnlineManager.next(true);
    };

    return (
        <section
            className={styles.solicitarTurnoComponent__section}
        >
            <button
                onClick={handleOpenTurnoCaja}
            >
                Turno por Caja
            </button>
            <button
                onClick={handleOpenTurnoOficial}
            >
                Turno de Oficial
            </button>
            <button
                onClick={handleOpenTurnoOnline}
            >
                Turno Online
            </button>
        </section>
    );
};

export default SolicitarTurnoComponent;