class ValidateFormMail {
    constructor() {
        this.sumbitButton = document.querySelector('.btn')
    }

    Validate() {
        this.sumbitButton.addEventListener('onclick', e => {
            grecaptcha.getResponse() ? alert('deu certo') : alert('marque a caixa!')
        })
    }
}

window.App = new ValidateFormMail()