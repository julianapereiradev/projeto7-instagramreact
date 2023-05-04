export default function Posts() {

    return (
        <div className="posts">
            <Post nome="meowed" imagemNome="gato-telefone" curtido="respondeai" numeroCurtida="101.523"/>
            <Post nome="barked" imagemNome="dog" curtido="adorable_animals" numeroCurtida="99.159"/>
            <Post nome="meowed" imagemNome="gato-telefone" curtido="9gag" numeroCurtida="10.127"/>
            <Post nome="barked" imagemNome="dog" curtido="filomoderna" numeroCurtida="37.876"/>
        </div>
    )
}

function Post(props) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img
                        src={`assets/img/${props.nome}.svg`}
                        alt={`${props.nome}`}
                    />
                    {props.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img
                    src={`assets/img/${props.imagemNome}.svg`}
                    alt={`${props.imagemNome}`}
                />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img
                        src={`assets/img/${props.curtido}.svg`}
                        alt={`${props.curtido}`}
                    />
                    <div className="texto">
                        Curtido por <strong>{props.curtido}</strong> e <strong>outras {props.numeroCurtida} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}