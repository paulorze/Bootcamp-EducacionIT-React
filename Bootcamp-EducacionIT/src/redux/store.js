import { configureStore } from "@reduxjs/toolkit";
import { turnoCajaSlice } from "./turnos/turnoCajaSlice";
import { dateSlice } from "./turnos/dateSlice";
import { turnoOficialSlice } from "./turnos/turnoOficialSlice";
import { turnoOnlineSlice } from "./turnos/turnoOnlineSlice";

const Store = configureStore({
    reducer : {
        date: dateSlice.reducer,
        turnosCaja: turnoCajaSlice.reducer,
        turnosOficial: turnoOficialSlice.reducer,
        turnosOnline: turnoOnlineSlice.reducer
    }
});

export default Store;