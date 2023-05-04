export default function Suggestions() {

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao nome="bad.vibes.memes" />
            <Sugestao nome="chibirdart" />
            <Sugestao nome="razoesparaacreditar" />
            <Sugestao nome="adorable_animals" />
            <Sugestao nome="smallcutecats" />
        </div>
    )
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img
                    src={`assets/img/${props.nome}.svg`}
                    alt={`${props.nome}.svg`}
                />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}