import { useDispatch } from "react-redux";
import { turnoCajaFinalizar } from "../../../../redux/turnos/turnoCajaSlice";

const TurnosCajaDetailComponent = ({turno}) => {
    const dispatcher = useDispatch();
    const finalizarTurno = ()=> {
        dispatcher(turnoCajaFinalizar(turno.id));
    };

    return (
        <li
            className='turnoDetail__li'
        >
            <h2>
                Turno Siendo Atendido 
            </h2>
            <h3
                className='turnoDetail__h3'
            >
                <u>ID:</u> {turno.id}
            </h3>
            <i
                className='turnoDetail__i'
            >
                <u>Fecha:</u> {turno.date}
            </i>
            <i
                className='turnoDetail__i'
            >
                <u>Sector:</u> {turno.type}
            </i>
            <p
                className='turnoDetail__p'
            >
                <u>Motivo:</u> {turno.reason}
            </p>
            <div
            className='turnoDetail__botonera'
            >
                <button
                    type="button"
                    onClick={finalizarTurno}
                >
                    Finalizar Atención
                </button>
            </div>
        </li>
    );
};

export default TurnosCajaDetailComponent;