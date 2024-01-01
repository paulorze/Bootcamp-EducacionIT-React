import {useDispatch, useSelector} from 'react-redux';
import { turnoCajaAdd } from '../../../redux/turnos/turnoCajaSlice';
import { v4 as uuidv4} from 'uuid';
import { turnoCajaManager } from '../../../rxjs/shared-services';

const TurnoCajaComponent = () => {
    const date = useSelector(store => store.date);
    const dispatch = useDispatch();
    const addTurno = (event)=> {
        event.preventDefault();
        const id = uuidv4();
        const date = event.target.elements.date.value;
        const type = 'Caja';
        const reason = event.target.elements.reason.value;
        const turnState = 'Pendiente'; 
        const newTurno = {id, date, type, reason, turnState};
        dispatch(turnoCajaAdd(newTurno));
        event.target.reset();
    };

    const handleCloseTurnoCaja = ()=> {
        turnoCajaManager.next(false);
    };

    return (
        <section
            className={'turneroSection'}
        >
            <h2>
                Solicitar Turno Por Caja
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
                    <textarea 
                        name="reason" 
                        id="reason" 
                        cols="30" 
                        rows="10" 
                        placeholder='Ingrese aquí el motivo por el cual solicita su turno'
                        required
                    >
                    </textarea>
                </label>
                <button
                    type='submit'
                >
                    Agendar Turno
                </button>
                <button
                    className={'cancelButton'}
                    type='button'
                    onClick={handleCloseTurnoCaja}
                >
                    Cancelar
                </button>
            </form>
        </section>
    );
};

export default TurnoCajaComponent;