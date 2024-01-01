import { useDispatch } from "react-redux";
import { turnoOnlineFinalizar } from "../../../../redux/turnos/turnoOnlineSlice";

const TurnosOnlineDetailComponent = ({turno}) => {
    const dispatcher = useDispatch();
    const finalizarTurno = ()=> {
        dispatcher(turnoOnlineFinalizar(turno.id));
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
            <h3
                className='turnoDetail__h3'
            >
                <u>Horario:</u> {turno.time}
            </h3>
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

export default TurnosOnlineDetailComponent;