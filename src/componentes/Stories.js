export default function Stories() {

    const stories = [
        {
            storieNome: "9gag",
            storieImagemSrc: "assets/img/9gag.svg",
            storieImagemAlt: "9gag",
        },
        {
            storieNome: "meowed",
            storieImagemSrc: "assets/img/meowed.svg",
            storieImagemAlt: "meowed",
        },
        {
            storieNome: "barked",
            storieImagemSrc: "assets/img/barked.svg",
            storieImagemAlt: "barked",
        },
        {
            storieNome: "nathanwpylestrangeplanet",
            storieImagemSrc: "assets/img/nathanwpylestrangeplanet.svg",
            storieImagemAlt: "nathanwpylestrangeplanet",
        },
        {
            storieNome: "wawawicomics",
            storieImagemSrc: "assets/img/wawawicomics.svg",
            storieImagemAlt: "wawawicomics",
        },
        {
            storieNome: "respondeai",
            storieImagemSrc: "assets/img/respondeai.svg",
            storieImagemAlt: "respondeai",
        },
        {
            storieNome: "filomoderna",
            storieImagemSrc: "assets/img/filomoderna.svg",
            storieImagemAlt: "filomoderna",
        },
        {
            storieNome: "memeriagourmet",
            storieImagemSrc: "assets/img/memeriagourmet.svg",
            storieImagemAlt: "memeriagourmet",
        },

    ]

    return (
        <div className="stories">
            {stories.map((storie) =>
                <Storie
                storieNomeArg={storie.storieNome}
                storieImagemSrcArg={storie.storieImagemSrc}
                storieImagemAltArg={storie.storieImagemAlt} />
            )}

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
                    src={props.storieImagemSrcArg}
                    alt={props.storieImagemAltArg}
                />
            </div>
            <div className="usuario">
                {props.storieNomeArg}
            </div>
        </div>
    )
}