import { createSlice } from "@reduxjs/toolkit";
import turnosCaja from "../../utils/turnosCaja";

const turnosStored = localStorage.getItem('turnosCaja');
let initialState = turnosStored ? JSON.parse(turnosStored) : turnosCaja;

export const turnoCajaSlice = createSlice({
    name: 'turnoCaja',
    initialState: initialState,
    reducers: {
        turnoCajaAdd: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('turnosCaja', JSON.stringify(state));
        },
        turnoCajaGetByID: (state, action) => {
            const turnoEncontrado = state.filter(turno => turno.id === action.payload);
            console.log(turnoEncontrado)
            return turnoEncontrado;
        },
        turnoCajaAtender: (state, action) => {
            const turnosMap = state.map(turno => {
                    if (turno.id === action.payload) {
                        return {...turno, turnState: 'Atendiendo'}
                    }
                    return turno;
                });
            localStorage.setItem('turnosCaja', JSON.stringify(turnosMap));
            return turnosMap;
        },
        turnoCajaFinalizar: (state, action) => {
            const turnosMap = state.map(turno => {
                    if (turno.id === action.payload) {
                        return {...turno, turnState: 'Finalizado'}
                    }
                    return turno;
                });
            localStorage.setItem('turnosCaja', JSON.stringify(turnosMap));
            return turnosMap;
        }
    }
});

export const {turnoCajaAdd, turnoCajaGetByID, turnoCajaAtender, turnoCajaFinalizar} = turnoCajaSlice.actions;