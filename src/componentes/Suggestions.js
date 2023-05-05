export default function Suggestions() {

    const suggestions = [
        {
            sugestaoUsuarioNome: "bad.vibes.memes",
            sugestaoUsuarioImagemSrc: "assets/img/bad.vibes.memes.svg",
            sugestaoUsuarioImagemAlt: "bad.vibes.memes",
        },
        {
            sugestaoUsuarioNome: "chibirdart",
            sugestaoUsuarioImagemSrc: "assets/img/chibirdart.svg",
            sugestaoUsuarioImagemAlt: "chibirdart",
        },
        {
            sugestaoUsuarioNome: "razoesparaacreditar",
            sugestaoUsuarioImagemSrc: "assets/img/razoesparaacreditar.svg",
            sugestaoUsuarioImagemAlt: "razoesparaacreditar",
        },
        {
            sugestaoUsuarioNome: "adorable_animals",
            sugestaoUsuarioImagemSrc: "assets/img/adorable_animals.svg",
            sugestaoUsuarioImagemAlt: "adorable_animals",
        },
        {
            sugestaoUsuarioNome: "smallcutecats",
            sugestaoUsuarioImagemSrc: "assets/img/smallcutecats.svg",
            sugestaoUsuarioImagemAlt: "smallcutecats",
        },
        
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((storie) =>
                <Sugestao
                sugestaoUsuarioNomeArg={storie.sugestaoUsuarioNome}
                sugestaoUsuarioImagemSrcArg={storie.sugestaoUsuarioImagemSrc}
                sugestaoUsuarioImagemAltArg={storie.sugestaoUsuarioImagemAlt} />
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