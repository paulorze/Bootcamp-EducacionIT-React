import {useDispatch, useSelector} from 'react-redux';
import { v4 as uuidv4} from 'uuid';
import { turnoOnlineManager } from '../../../rxjs/shared-services';
import { turnoOnlineAdd } from '../../../redux/turnos/turnoOnlineSlice';

const TurnoOnlineComponent = () => {
    const date = useSelector(store => store.date);
    const dispatch = useDispatch();
    const addTurno = (event)=> {
        event.preventDefault();
        const id = uuidv4();
        const date = event.target.elements.date.value;
        const type = 'Online';
        const reason = event.target.elements.reason.value;
        const turnState = 'Pendiente'; 
        const time = event.target.elements.time.value;
        const newTurno = {id, date, type, reason, turnState, time};
        dispatch(turnoOnlineAdd(newTurno));
        event.target.reset();
    };

    const handleCloseTurnoOnline = ()=> {
        turnoOnlineManager.next(false);
    };

    return (
        <section
            className={'turneroSection'}
        >
            <h2>
                Solicitar Turno Online
            </h2>
            <form 
                action=""
                onSubmit={addTurno}
            >
                <label htmlFor="date">
                    Fecha del Turno:
                    <input 
                        type="date"
                        name='date'
                        required
                        min={date}
                    />
                </label>
                <label htmlFor="reason">
                    Motivo del Turno:
                    <textarea name="reason" id="reason" cols="30" rows="10" placeholder='Ingrese aquí el motivo por el cual solicita su turno'>
                    </textarea>
                </label>
                <label htmlFor="date">
                    Horario del Turno:
                    <input 
                        type="time"
                        name='time'
                        required
                        min={'10:00'}
                        max={'17:00'}
                        step={1800}
                    />
                    <span>
                        Recuerde que los turnos tienen una duración estimada de 30 minutos y que nuestro horario de atención es de 10:00 hs. a 17:00 hs.
                    </span>
                </label>
                <button
                    type='submit'
                >
                    Agendar Turno
                </button>
                <button
                    className={'cancelButton'}
                    type='button'
                    onClick={handleCloseTurnoOnline}
                >
                    Cancelar
                </button>
            </form>
        </section>
    );
};

export default TurnoOnlineComponent;