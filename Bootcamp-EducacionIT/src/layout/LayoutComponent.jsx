import { Outlet } from "react-router-dom";
import NavbarComponent from "../pages/navbar/NavbarComponent";

const LayoutComponent = () => {
    return (
        <>
            <NavbarComponent/>
            <Outlet/>
        </>
    );
};

export default LayoutComponent;