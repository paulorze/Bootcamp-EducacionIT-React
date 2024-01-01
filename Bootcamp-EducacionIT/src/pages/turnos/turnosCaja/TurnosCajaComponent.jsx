import { useSelector } from 'react-redux';
import TurnosListItemComponent from '../../../common/turnosListItem/TurnosListItemComponent';
import TurnosCajaDetailComponent from './turnosCajaDetail/TurnosCajaDetailComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { turnoCajaAtender } from '../../../redux/turnos/turnoCajaSlice';

const TurnosCajaComponent = () => {
    const turnosCaja = useSelector(store=> store.turnosCaja);
    const [turnosPendientes, setTurnosPendientes] = useState([]);
    const [turnosAtendiendo, setTurnosAtendiendo] = useState([]);

    useEffect(()=> {
        setTurnosPendientes(turnosCaja.filter(turno => turno.turnState === 'Pendiente'));
        setTurnosAtendiendo(turnosCaja.filter(turno => turno.turnState === 'Atendiendo'));
    }, [turnosCaja])

    return (
        <section
            className='turneroSection'
        >
            <h2>
                Administrar Turnos Por Caja
            </h2>
            <div
                className='turnosAdministrarContainer'
            >
                <ul
                    className='turnosAdministrarList'
                >
                    {
                        turnosPendientes.map(turno => (
                            <TurnosListItemComponent
                                key={turno.id}
                                turno={turno}
                                action = {turnoCajaAtender}
                            />
                        ))
                    }
                </ul>
                <ul>
                    {
                        turnosAtendiendo.map(turno => (
                            <TurnosCajaDetailComponent
                                key={turno.id}
                                turno = {turno}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default TurnosCajaComponent;