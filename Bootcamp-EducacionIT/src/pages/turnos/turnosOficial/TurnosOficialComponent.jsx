import { useSelector } from 'react-redux';
import TurnosListItemComponent from '../../../common/turnosListItem/TurnosListItemComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import TurnosOficialDetailComponent from './turnosOficialDetailComponent/TurnosOficialDetailComponent';
import { turnoOficialAtender } from '../../../redux/turnos/turnoOficialSlice';

const TurnosOficialComponent = () => {
    const turnosOficial = useSelector(store=> store.turnosOficial);
    const [turnosPendientes, setTurnosPendientes] = useState([]);
    const [turnosAtendiendo, setTurnosAtendiendo] = useState([]);

    useEffect(()=> {
        setTurnosPendientes(turnosOficial.filter(turno => turno.turnState === 'Pendiente'));
        setTurnosAtendiendo(turnosOficial.filter(turno => turno.turnState === 'Atendiendo'));
    }, [turnosOficial])

    return (
        <section
            className='turneroSection'
        >
            <h2>
                Administrar Turnos de Oficial
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
                                action = {turnoOficialAtender}
                            />
                        ))
                    }
                </ul>
                <ul>
                    {
                        turnosAtendiendo.map(turno => (
                            <TurnosOficialDetailComponent
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

export default TurnosOficialComponent;