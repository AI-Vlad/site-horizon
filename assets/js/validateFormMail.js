class ValidateFormMail {
    constructor() {
        this.sumbitButton = document.querySelector('.btn')

        this.validate()
    }

    validate() {
        this.sumbitButton.addEventListener('sumbit', e => {
            e.preventDefault()
            return grecaptcha.getResponse() ? alert('deu certo') : alert('marque a caixa!')
        })
    }
}

window.App = new ValidateFormMail()