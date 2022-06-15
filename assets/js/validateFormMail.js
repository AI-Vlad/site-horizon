class ValidateFormMail {
    constructor() {
        this.sumbitButton = document.querySelector('.btn')


    }

    validate() {
        return grecaptcha.getResponse() ? alert('deu certo') : this.validateError()
    }

    validateError() {
        alert('marque a caixa!')
        return false
    }
}

let validateFormMail = new ValidateFormMail()