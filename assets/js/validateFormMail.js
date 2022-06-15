class ValidateFormMail {
    constructor() {
        this.sumbitButton = document.querySelector('.btn')


    }

    validate() {
        return grecaptcha.getResponse() ? alert('deu certo') : alert('marque a caixa!')
    }
}

let validateFormMail = new ValidateFormMail()