import styles from './FotoComponent.module.css';

const FotoComponent = () => {
    return (
        <div
            className={styles.fotoComponent}
        >
            <img src="https://reqres.in/img/faces/7-image.jpg" alt="Imagen de Perfil" className={styles.fotoComponent__img}/>
        </div>
    );
};

export default FotoComponent;