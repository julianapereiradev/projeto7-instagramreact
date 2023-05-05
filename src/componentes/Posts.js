import { useState } from "react"

export default function Posts() {

    const posts = [
        {
            usuarioNome: "meowed",
            usuarioImagemSrc: "assets/img/meowed.svg",
            usuarioImagemAlt: "meowed",
            conteudoImagemSrc: "assets/img/gato-telefone.svg",
            conteudoImagemAlt: "gato-telefone",
            curtidasImagemSrc: "assets/img/respondeai.svg",
            curtidasImagemAlt: "respondeai",
            curtidasTextoNome: "respondeai",
            curtidasTextoNumero: "101.523",
        },
        {
            usuarioNome: "barked",
            usuarioImagemSrc: "assets/img/barked.svg",
            usuarioImagemAlt: "barked",
            conteudoImagemSrc: "assets/img/dog.svg",
            conteudoImagemAlt: "dog",
            curtidasImagemSrc: "assets/img/adorable_animals.svg",
            curtidasImagemAlt: "adorable_animals",
            curtidasTextoNome: "adorable_animals",
            curtidasTextoNumero: "99.159",
        },
        {
            usuarioNome: "meowed",
            usuarioImagemSrc: "assets/img/meowed.svg",
            usuarioImagemAlt: "meowed",
            conteudoImagemSrc: "assets/img/gato-telefone.svg",
            conteudoImagemAlt: "gato-telefone",
            curtidasImagemSrc: "assets/img/9gag.svg",
            curtidasImagemAlt: "9gag",
            curtidasTextoNome: "9gag",
            curtidasTextoNumero: "10.127",
        },
        {
            usuarioNome: "barked",
            usuarioImagemSrc: "assets/img/barked.svg",
            usuarioImagemAlt: "barked",
            conteudoImagemSrc: "assets/img/dog.svg",
            conteudoImagemAlt: "dog",
            curtidasImagemSrc: "assets/img/filomoderna.svg",
            curtidasImagemAlt: "filomoderna",
            curtidasTextoNome: "filomoderna",
            curtidasTextoNumero: "37.876",
        },
    ]

    return (
        <div className="posts">
            {posts.map((post) =>
                <Post
                    usuarioNomeArg={post.usuarioNome}
                    usuarioImagemSrcArg={post.usuarioImagemSrc}
                    usuarioImagemAltArg={post.usuarioImagemAlt}
                    conteudoImagemSrcArg={post.conteudoImagemSrc}
                    conteudoImagemAltArg={post.conteudoImagemAlt}
                    curtidasImagemSrcArg={post.curtidasImagemSrc}
                    curtidasImagemAltArg={post.curtidasImagemAlt}
                    curtidasTextoNomeArg={post.curtidasTextoNome}
                    curtidasTextoNumeroArg={post.curtidasTextoNumero} />
            )}
        </div>
    )
}

function Post(props) {

    let [classeBotao, setClasseBotao] = useState('bookmark-outline')

    function trocarCor() {
        if (classeBotao === 'bookmark-outline') {
            setClasseBotao('bookmark')
        } else {
            setClasseBotao('bookmark-outline')
        }
    }


    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img
                        src={props.usuarioImagemSrcArg}
                        alt={props.usuarioImagemAltArg}
                    />
                    {props.usuarioNomeArg}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img
                    src={props.conteudoImagemSrcArg}
                    alt={props.conteudoImagemAltArg}
                    data-test="post-image"
                />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={classeBotao} onClick={trocarCor} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img
                        src={props.curtidasImagemSrcArg}
                        alt={props.curtidasImagemAltArg}
                    />
                    <div className="texto" data-test="likes-number">
                        Curtido por <strong>{props.curtidasTextoNomeArg}</strong> e <strong>outras {props.curtidasTextoNumeroArg} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}