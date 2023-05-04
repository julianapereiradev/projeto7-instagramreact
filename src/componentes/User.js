import { useState } from 'react';

export default function User() {
    const [nomeUsuario, setNomeUsuario] = useState('editar user');
    const [imagemUsuario, setImagemUsuario] = useState('catanacomics')

    const handleNomeUsuario = () => {
        setNomeUsuario(prompt("Qual o seu nome?"));
    }

    const handleImagemUsuario = () => {
        setImagemUsuario(prompt("Link da imagem"))
    }

    return (
        <div className="usuario">
            <img
                src={imagemUsuario === '' ? '' :`assets/img/${imagemUsuario}.svg`}
                alt="imagem de perfil"
                onClick={handleImagemUsuario}
                data-test="profile-image"
            />
            <div className="texto">
                <span>
                    <strong data-test="name">{nomeUsuario === '' ? '' : nomeUsuario}</strong>
                    <ion-icon
                        name="pencil"
                        onClick={handleNomeUsuario}
                        data-test="edit-name"
                    >
                    </ion-icon>
                </span>
            </div>
        </div>
    )
}