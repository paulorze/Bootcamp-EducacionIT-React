import { Routes, Route } from "react-router-dom";
import TurnoComponent from "../turno/TurnoComponent";
import TurnosComponent from "../turnos/TurnosComponent";
import LayoutComponent from "../../layout/LayoutComponent";
import HomeComponent from "../home/HomeComponent";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<LayoutComponent/>}>
                <Route path="/" element={<HomeComponent/>}/>
                <Route path="/turno" element={<TurnoComponent/>}/>
                <Route path="/turnos" element={<TurnosComponent/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;