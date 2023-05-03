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
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <ul>
                {objSugestao.map((item) => {
                    return (
                        <>
                            <div class="sugestao">
                                <div class="usuario">
                                    <img
                                        src={`assets/img/${item.nome}.svg`}
                                        alt={`${item.nome}.svg`}
                                    />
                                    <div class="texto">
                                        <div class="nome">{item.nome}</div>
                                        <div class="razao">Segue você</div>
                                    </div>
                                </div>

                                <div class="seguir">Seguir</div>
                            </div>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}