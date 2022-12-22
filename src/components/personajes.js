export default function Personajes(props) {
    const { personajes , setPersonajes} = props;
    
    //Función para poner a null el array de persoajes e ir a la pagina principal
    const resetPersonajes = () => {
        setPersonajes (null);
    }


    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetPersonajes}>Volver a la pagina principal</span>
            <div className="container-characters">
                {personajes.map((personajes, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={personajes.image} alt={personajes.name} />
                        </div>

                        <div>
                            <h3>{personajes.name}</h3>
                            <h6>
                                {personajes.status === "Alive" ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{personajes.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{personajes.species}</span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetPersonajes}>Volver a la pagina principal</span>
        </div>
    );
}
