import {useDispatch, useSelector} from 'react-redux';
import { v4 as uuidv4} from 'uuid';
import { turnoOficialManager } from '../../../rxjs/shared-services';
import { turnoOficialAdd } from '../../../redux/turnos/turnoOficialSlice';

const TurnoOficialComponent = () => {
    const date = useSelector(store => store.date);
    const dispatch = useDispatch();
    const addTurno = (event)=> {
        event.preventDefault();
        const id = uuidv4();
        const date = event.target.elements.date.value;
        const type = 'De Oficial';
        const reason = event.target.elements.reason.value;
        const turnState = 'Pendiente'; 
        const first_name = event.target.elements.first_name.value;
        const last_name = event.target.elements.last_name.value;
        const newTurno = {id, date, type, reason, turnState, first_name, last_name};
        dispatch(turnoOficialAdd(newTurno));
        event.target.reset();
    };

    const handleCloseTurnoOficial = ()=> {
        turnoOficialManager.next(false);
    };


    return (
        <section
            className={'turneroSection'}
        >
            <h2>
                Solicitar Turno de Oficial
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
                    Nombre del Solicitante:
                    <input 
                        type="text"
                        name='first_name'
                        required
                    />
                </label>
                <label htmlFor="date">
                    Apellido del Solicitante:
                    <input 
                        type="text"
                        name='last_name'
                        required
                    />
                </label>
                <button
                    type='submit'
                >
                    Agendar Turno
                </button>
                <button
                    className={'cancelButton'}
                    type='button'
                    onClick={handleCloseTurnoOficial}
                >
                    Cancelar
                </button>
            </form>
        </section>
    );
};

export default TurnoOficialComponent;