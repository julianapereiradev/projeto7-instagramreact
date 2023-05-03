export default function Suggestions() {

    const objSugestao = [
        {
            "nome": 'bad.vibes.memes'
        },
        {
            "nome": 'chibirdart'
        },
        {
            "nome": 'razoesparaacreditar'
        },
        {
            "nome": 'adorable_animals'
        },
        {
            "nome": 'smallcutecats'
        }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <ul>
                {objSugestao.map((item, index) => {
                    return (
                            <div className="sugestao" key={index}>
                                <div className="usuario">
                                    <img
                                        src={`assets/img/${item.nome}.svg`}
                                        alt={`${item.nome}.svg`}
                                    />
                                    <div className="texto">
                                        <div className="nome">{item.nome}</div>
                                        <div className="razao">Segue você</div>
                                    </div>
                                </div>

                                <div className="seguir">Seguir</div>
                            </div>
                    )
                })}
            </ul>
        </div>
    )
}