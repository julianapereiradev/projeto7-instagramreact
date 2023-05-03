export default function Posts() {

    const objPost = [
        {
            "nome": 'meowed',
            "imagemNome": 'gato-telefone',
            "curtido": 'respondeai',
            "numeroCurtida": '101.523',
        },
        {
            "nome": 'barked',
            "imagemNome": 'dog',
            "curtido": 'adorable_animals',
            "numeroCurtida": '99.159',
        },
        {
            "nome": 'meowed',
            "imagemNome": 'gato-telefone',
            "curtido": 'respondeai',
            "numeroCurtida": '101.523'
        }
    ]

    return (
        <div class="posts">


            {objPost.map((item) => {
                return (
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img
                                    src={`assets/img/${item.nome}.svg`}
                                    lt={`${item.nome}`}
                                />
                                {item.nome}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img
                                src={`assets/img/${item.imagemNome}.svg`}
                                alt={`${item.imagemNome}`}
                            />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img
                                    src={`assets/img/${item.curtido}.svg`}
                                    alt={`${item.curtido}`}
                                />
                                <div class="texto">
                                    Curtido por <strong>{item.curtido}</strong> e <strong>outras {item.numeroCurtida} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}