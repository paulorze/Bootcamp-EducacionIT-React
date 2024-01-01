import { useEffect, useState } from "react";
import SolicitarTurnoComponent from "../../common/solicitarTurno/SolicitarTurnoComponent";
import TurnoCajaComponent from "./turnoCaja/TurnoCajaComponent";
import TurnoOficialComponent from "./turnoOficial/TurnoOficialComponent";
import TurnoOnlineComponent from "./turnoOnline/TurnoOnlineComponent";
import { turnoCajaManager, turnoOficialManager, turnoOnlineManager } from "../../rxjs/shared-services";

const TurnoComponent = () => {
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
                Solicitud de Turno
            </h1>
            <SolicitarTurnoComponent/>
            {openTurnoCaja && <TurnoCajaComponent/>}
            {openTurnoOficial && <TurnoOficialComponent/>}
            {openTurnoOnline && <TurnoOnlineComponent/>}
        </main>
    );
};

export default TurnoComponent;