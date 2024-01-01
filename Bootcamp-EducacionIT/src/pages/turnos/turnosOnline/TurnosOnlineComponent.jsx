import { useSelector } from 'react-redux';
import TurnosListItemComponent from '../../../common/turnosListItem/TurnosListItemComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { turnoOnlineAtender } from '../../../redux/turnos/turnoOnlineSlice';
import TurnosOnlineDetailComponent from './turnosOnlineDetailComponent/TurnosOnlineDetailComponent';

const TurnosOnlineComponent = () => {
    const turnosOnline = useSelector(store=> store.turnosOnline);
    const [turnosPendientes, setTurnosPendientes] = useState([]);
    const [turnosAtendiendo, setTurnosAtendiendo] = useState([]);

    useEffect(()=> {
        setTurnosPendientes(turnosOnline.filter(turno => turno.turnState === 'Pendiente'));
        setTurnosAtendiendo(turnosOnline.filter(turno => turno.turnState === 'Atendiendo'));
    }, [turnosOnline])

    return (
        <section
            className='turneroSection'
        >
            <h2>
                Administrar Turnos Online
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
                                action = {turnoOnlineAtender}
                            />
                        ))
                    }
                </ul>
                <ul>
                    {
                        turnosAtendiendo.map(turno => (
                            <TurnosOnlineDetailComponent
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

export default TurnosOnlineComponent;