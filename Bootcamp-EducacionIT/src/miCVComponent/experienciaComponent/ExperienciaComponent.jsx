import ItemComponent from '../../common/itemComponent/ItemComponent';
import styles from  './ExperienciaComponent.module.css';


const ExperienciaComponent = () => {
    return (
        <div
            className={styles.experienciaComponent}
        >
            <h2>
                Experiencia Laboral
            </h2>
            <ul
                className={styles.experienciaComponent__ul}
            >
                <ItemComponent
                    company={'ABC Company'}
                    from={'Mayo 2019'}
                    to={'Presente'}
                    summary={'Desarrollador de software senior, responsable de la implementación de nuevas características y mantenimiento de aplicaciones web.'}
                />
                <ItemComponent
                    company={'XYZ Corporation'}
                    from={'Agosto 2017'}
                    to={'Abril 2019'}
                    summary={'Analista de sistemas, encargado de la planificación y ejecución de proyectos de desarrollo de software.'}
                />
                <ItemComponent
                    company={'Tech Innovations Ltd.'}
                    from={'Junio 2015'}
                    to={'Julio 2017'}
                    summary={'Ingeniero de software junior, participando en el diseño y desarrollo de soluciones informáticas.'}
                />
                <ItemComponent
                    company={'Global Solutions Inc.'}
                    from={'Enero 2014'}
                    to={'Mayo 2015'}
                    summary={'Pasante en el departamento de TI, proporcionando soporte técnico y asistencia en la gestión de redes.'}
                />
                <ItemComponent
                    company={'Startup XYZ'}
                    from={'Septiembre 2013'}
                    to={'Diciembre 2013'}
                    summary={'Desarrollador de software en prácticas, trabajando en el desarrollo inicial de una aplicación móvil.'}
                />
            </ul>
        </div>
    );
};

export default ExperienciaComponent;