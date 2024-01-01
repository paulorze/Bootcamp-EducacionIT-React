import { useEffect, useState } from "react";
import SolicitarTurnoComponent from "../../common/solicitarTurno/SolicitarTurnoComponent";
import TurnosCajaComponent from "./turnosCaja/TurnosCajaComponent";
import { turnoCajaManager, turnoOficialManager, turnoOnlineManager } from "../../rxjs/shared-services";
import TurnosOficialComponent from "./turnosOficial/TurnosOficialComponent";
import TurnosOnlineComponent from "./turnosOnline/TurnosOnlineComponent";


const TurnosComponent = () => {
    const [openTurnoCaja, setOpenTurnoCaja] = useState(false);
    let subscription$turnoCaja;

    const [openTurnoOficial, setOpenTurnoOficial] = useState(false);
    let subscription$turnoOficial;

    const [openTurnoOnline, setOpenTurnoOnline] = useState(false);
    let subscription$turnoOnline;

    useEffect(()=> {
        subscription$turnoCaja = turnoCajaManager.getSubject().subscribe(
            data => setOpenTurnoCaja((prev)=> data)
        );

        subscription$turnoOficial = turnoOficialManager.getSubject().subscribe(
            data => setOpenTurnoOficial((prev)=> data)
        );

        subscription$turnoOnline = turnoOnlineManager.getSubject().subscribe(
            data => setOpenTurnoOnline((prev)=> data)
        );

        return () => {
            subscription$turnoCaja.unsubscribe();
            subscription$turnoOficial.unsubscribe();
            subscription$turnoOnline.unsubscribe();
        };
    },[]);

    
    return (
        <main>
            <h1>
                Ver Turnos Solicitados
            </h1>
            <SolicitarTurnoComponent/>
            {openTurnoCaja && <TurnosCajaComponent/>}
            {openTurnoOficial && <TurnosOficialComponent/>}
            {openTurnoOnline && <TurnosOnlineComponent/>}
        </main>
    );
};

export default TurnosComponent;