export default function Stories() {

    return (
        <div className="stories">
            <Storie nome="9gag" />
            <Storie nome="meowed" />
            <Storie nome="barked" />
            <Storie nome="nathanwpylestrangeplanet" />
            <Storie nome="wawawicomic" />
            <Storie nome="respondeai" />
            <Storie nome="filomoderna" />
            <Storie nome="memeriagourmet" />

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Storie(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img
                    src={`assets/img/${props.nome}.svg`}
                    alt={`${props.nome}`}
                />
            </div>
            <div className="usuario">
                {props.nome}
            </div>
        </div>
    )
}