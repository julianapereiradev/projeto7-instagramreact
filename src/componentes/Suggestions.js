export default function Suggestions() {

    const suggestions = [
        {
            sugestaoUsuarioNome: "bad.vibes.memes",
            sugestaoUsuarioImagemSrc: "assets/img/bad.vibes.memes.svg",
            sugestaoUsuarioImagemAlt: "bad.vibes.memesAlt",
        },
        {
            sugestaoUsuarioNome: "chibirdart",
            sugestaoUsuarioImagemSrc: "assets/img/chibirdart.svg",
            sugestaoUsuarioImagemAlt: "chibirdartAlt",
        },
        {
            sugestaoUsuarioNome: "razoesparaacreditar",
            sugestaoUsuarioImagemSrc: "assets/img/razoesparaacreditar.svg",
            sugestaoUsuarioImagemAlt: "razoesparaacreditarAlt",
        },
        {
            sugestaoUsuarioNome: "adorable_animals",
            sugestaoUsuarioImagemSrc: "assets/img/adorable_animals.svg",
            sugestaoUsuarioImagemAlt: "adorable_animalsAlt",
        },
        {
            sugestaoUsuarioNome: "smallcutecats",
            sugestaoUsuarioImagemSrc: "assets/img/smallcutecats.svg",
            sugestaoUsuarioImagemAlt: "smallcutecatsAlt",
        },
        
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((suggestion) =>
                <Sugestao
                key={suggestion.sugestaoUsuarioImagemAlt}
                sugestaoUsuarioNomeArg={suggestion.sugestaoUsuarioNome}
                sugestaoUsuarioImagemSrcArg={suggestion.sugestaoUsuarioImagemSrc}
                sugestaoUsuarioImagemAltArg={suggestion.sugestaoUsuarioImagemAlt} />
            )}

        </div>
    )
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img
                    src={props.sugestaoUsuarioImagemSrcArg}
                    alt={props.sugestaoUsuarioImagemAltArg}
                />
                <div className="texto">
                    <div className="nome">{props.sugestaoUsuarioNomeArg}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}