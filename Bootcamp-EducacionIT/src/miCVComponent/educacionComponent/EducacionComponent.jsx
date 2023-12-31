import styles from './EducacionComponent.module.css';
import ItemComponent from '../../common/itemComponent/ItemComponent';

const EducacionComponent = () => {
    return (
        <div
            className={styles.educacionComponent}
        >
            <h2>
                Educación
            </h2>
            <ul
                className={styles.educacionComponent__ul}
            >
                <ItemComponent
                    company={'Universidad Nacional'}
                    from={'Septiembre 2015'}
                    to={'Junio 2019'}
                    summary={'Licenciatura en Informática'}
                />
                <ItemComponent
                    company={'Instituto Tecnológico'}
                    from={'Agosto 2020'}
                    to={'Diciembre 2021'}
                    summary={'Maestría en Ciencias de la Computación'}
                />
                <ItemComponent
                    company={'Escuela de Negocios'}
                    from={'Enero 2018'}
                    to={'Mayo 2018'}
                    summary={'Curso de Gestión Empresarial'}
                />
                <ItemComponent
                    company={'Academia de Diseño'}
                    from={'Marzo 2017'}
                    to={'Noviembre 2017'}
                    summary={'Diplomado en Diseño Gráfico'}
                />
                <ItemComponent
                    company={'Instituto de Idiomas'}
                    from={'Julio 2016'}
                    to={'Septiembre 2016'}
                    summary={'Curso Intensivo de Inglés'}
                />
            </ul>
        </div>
    );
};

export default EducacionComponent;