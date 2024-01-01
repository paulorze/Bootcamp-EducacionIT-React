import { createSlice } from "@reduxjs/toolkit";
import turnosOficial from "../../utils/turnosOficial";

const turnosStored = localStorage.getItem('turnosOficial');
let initialState = turnosStored ? JSON.parse(turnosStored) : turnosOficial;

export const turnoOficialSlice = createSlice({
    name: 'turnoOficial',
    initialState: initialState,
    reducers: {
        turnoOficialAdd: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('turnosOficial', JSON.stringify(state));
        },
        turnoOficialGetByID: (state, action) => {
            const turnoEncontrado = state.filter(turno => turno.id === action.payload);
            console.log(turnoEncontrado)
            return turnoEncontrado;
        },
        turnoOficialAtender: (state, action) => {
            const turnosMap = state.map(turno => {
                    if (turno.id === action.payload) {
                        return {...turno, turnState: 'Atendiendo'}
                    }
                    return turno;
                });
            localStorage.setItem('turnosOficial', JSON.stringify(turnosMap));
            return turnosMap;
        },
        turnoOficialFinalizar: (state, action) => {
            const turnosMap = state.map(turno => {
                    if (turno.id === action.payload) {
                        return {...turno, turnState: 'Finalizado'}
                    }
                    return turno;
                });
            localStorage.setItem('turnosOficial', JSON.stringify(turnosMap));
            return turnosMap;
        }
    }
});

export const {turnoOficialAdd, turnoOficialGetByID, turnoOficialAtender, turnoOficialFinalizar} = turnoOficialSlice.actions;