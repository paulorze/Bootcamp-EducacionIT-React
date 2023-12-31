import FotoComponent from './fotoComponent/FotoComponent';
import DatosComponent from './datosComponent/DatosComponent';
import EducacionComponent from './educacionComponent/EducacionComponent';
import ExperienciaComponent from './experienciaComponent/ExperienciaComponent';
import './MiCVComponent.module.css';

const MiCVComponent = () => {
    return (
        <>
        <header>
            <h1>
                Curriculum Vitae
            </h1>
        </header>
        <main>
            <FotoComponent/>
            <DatosComponent/>
            <EducacionComponent/>
            <ExperienciaComponent/>
        </main>
        </>
    );
};

export default MiCVComponent;