import { createSlice } from "@reduxjs/toolkit";
import turnosOnline from "../../utils/turnosOnline";

const turnosStored = localStorage.getItem('turnosOnline');
let initialState = turnosStored ? JSON.parse(turnosStored) : turnosOnline;

export const turnoOnlineSlice = createSlice({
    name: 'turnoOnline',
    initialState: initialState,
    reducers: {
        turnoOnlineAdd: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('turnosOnline', JSON.stringify(state));
        },
        turnoOnlineGetByID: (state, action) => {
            const turnoEncontrado = state.filter(turno => turno.id === action.payload);
            console.log(turnoEncontrado)
            return turnoEncontrado;
        },
        turnoOnlineAtender: (state, action) => {
            const turnosMap = state.map(turno => {
                    if (turno.id === action.payload) {
                        return {...turno, turnState: 'Atendiendo'}
                    }
                    return turno;
                });
            localStorage.setItem('turnosOnline', JSON.stringify(turnosMap));
            return turnosMap;
        },
        turnoOnlineFinalizar: (state, action) => {
            const turnosMap = state.map(turno => {
                    if (turno.id === action.payload) {
                        return {...turno, turnState: 'Finalizado'}
                    }
                    return turno;
                });
            localStorage.setItem('turnosOnline', JSON.stringify(turnosMap));
            return turnosMap;
        }
    }
});

export const {turnoOnlineAdd, turnoOnlineGetByID, turnoOnlineAtender, turnoOnlineFinalizar} = turnoOnlineSlice.actions;