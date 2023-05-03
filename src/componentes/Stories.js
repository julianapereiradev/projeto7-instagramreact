export default function Stories() {

    const objStory = [
        {
            "nome": '9gag'
        },
        {
            "nome": 'meowed'
        },
        {
            "nome": 'barked'
        },
        {
            "nome": 'nathanwpylestrangeplanet'
        },
        {
            "nome": 'wawawicomics'
        },
        {
            "nome": 'respondeai'
        },
        {
            "nome": 'filomoderna'
        },
        {
            "nome": 'memeriagourmet'
        }
    ]

    return (
        <div class="stories">

            {objStory.map((item) => {
                return (
                    <div class="story">
                        <div class="imagem">
                            <img
                                src={`assets/img/${item.nome}.svg`}
                                alt={`${item.nome}`}
                            />
                        </div>
                        <div class="usuario">
                            {item.nome}
                        </div>
                    </div>
                )
            })}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}