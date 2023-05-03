export default function User() {

    // const showAlert = (nome) => {
    //      nome = prompt("Qual o seu nome?");
    //   }

    return (
        <div className="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>'</strong>
                    <ion-icon 
                    name="pencil"
                    onClick={() => ''}>
                    </ion-icon>
                </span>
            </div>
        </div>
    )
}