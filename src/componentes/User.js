import { useState } from 'react';

export default function User() {
    const [nomeUsuario, setNomeUsuario] = useState('editar user');
    const [imagemUsuario, setImagemUsuario] = useState('catanacomics')

    function mudarNomeUsuario() {
        let novoNome = prompt("Qual o seu nome?")
        setNomeUsuario(novoNome)
    }

    const mudarImagemUsuario = () => {
       let novaImagem = (prompt("Link da imagem"))
       setImagemUsuario(novaImagem)
    }

    return (
        <div className="usuario">
            <img
                src={`assets/img/${imagemUsuario}.svg`}
                alt="imagem de perfil"
                onClick={mudarImagemUsuario}
                data-test="profile-image"
            />
            <div className="texto">
                <span>
                    <strong data-test="name">{nomeUsuario}</strong>
                    <ion-icon
                        name="pencil"
                        onClick={mudarNomeUsuario}
                        data-test="edit-name"
                    >
                    </ion-icon>
                </span>
            </div>
        </div>
    )
}