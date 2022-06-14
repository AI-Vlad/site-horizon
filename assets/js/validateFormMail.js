class ValidateFormMail {
    constructor() {
        this.sumbitButton = document.querySelector('.btn')

        this.validate()
    }

    validate() {
        this.sumbitButton.addEventListener('onclick', e => {
            grecaptcha.getResponse() ? alert('deu certo') : alert('marque a caixa!')
        })
    }
}

window.App = new ValidateFormMail()