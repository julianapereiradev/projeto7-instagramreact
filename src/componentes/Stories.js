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
        <div className="stories">

            {objStory.map((item, index) => {
                return (
                    <div className="story" key={index}>
                        <div className="imagem">
                            <img
                                src={`assets/img/${item.nome}.svg`}
                                alt={`${item.nome}`}
                            />
                        </div>
                        <div className="usuario">
                            {item.nome}
                        </div>
                    </div>
                )
            })}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}