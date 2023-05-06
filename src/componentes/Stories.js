export default function Stories() {

    const stories = [
        {
            storieNome: "9gag",
            storieImagemSrc: "assets/img/9gag.svg",
            storieImagemAlt: "9gagAlt",
        },
        {
            storieNome: "meowed",
            storieImagemSrc: "assets/img/meowed.svg",
            storieImagemAlt: "meowedAlt",
        },
        {
            storieNome: "barked",
            storieImagemSrc: "assets/img/barked.svg",
            storieImagemAlt: "barkedAlt",
        },
        {
            storieNome: "nathanwpylestrangeplanet",
            storieImagemSrc: "assets/img/nathanwpylestrangeplanet.svg",
            storieImagemAlt: "nathanwpylestrangeplanetAlt",
        },
        {
            storieNome: "wawawicomics",
            storieImagemSrc: "assets/img/wawawicomics.svg",
            storieImagemAlt: "wawawicomicsAlt",
        },
        {
            storieNome: "respondeai",
            storieImagemSrc: "assets/img/respondeai.svg",
            storieImagemAlt: "respondeaiAlt",
        },
        {
            storieNome: "filomoderna",
            storieImagemSrc: "assets/img/filomoderna.svg",
            storieImagemAlt: "filomodernaAlt",
        },
        {
            storieNome: "memeriagourmet",
            storieImagemSrc: "assets/img/memeriagourmet.svg",
            storieImagemAlt: "memeriagourmetAlt",
        },
        {
            storieNome: "9gag",
            storieImagemSrc: "assets/img/9gag.svg",
            storieImagemAlt: "9gagAlt1",
        },
        {
            storieNome: "meowed",
            storieImagemSrc: "assets/img/meowed.svg",
            storieImagemAlt: "meowedAlt1",
        },
        {
            storieNome: "barked",
            storieImagemSrc: "assets/img/barked.svg",
            storieImagemAlt: "barkedAlt1",
        },
        {
            storieNome: "nathanwpylestrangeplanet",
            storieImagemSrc: "assets/img/nathanwpylestrangeplanet.svg",
            storieImagemAlt: "nathanwpylestrangeplanetAlt1",
        },

    ]

    return (
        <div className="stories">
            {stories.map((storie) =>
                <Storie
                key={storie.storieImagemAlt}
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