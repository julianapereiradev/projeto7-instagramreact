import { useState } from 'react';

export default function User() {
    const [nomeUsuario, setNomeUsuario] = useState('editar user');
    const [imagemUsuario, setImagemUsuario] = useState('assets/img/catanacomics.svg')

    function mudarNomeUsuario() {
        let novoNome = prompt("Qual o seu nome?")

        if(novoNome !== '') {
            setNomeUsuario(novoNome)
        }
    }

    const mudarImagemUsuario = () => {
        let novaImagem = (prompt("Qual a nova URL?"))

        if(novaImagem !== '') {
             setImagemUsuario(novaImagem)
        }
    }

    return (
        <div className="usuario">
            <img
                src={imagemUsuario}
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