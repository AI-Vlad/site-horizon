class ValidateFormMail {
    constructor() {
        this.sumbitButton = document.querySelector('.btn')


    }

    validate() {
        if (grecaptcha.getResponse() == "") {
            alert('marque a caixa!')
            return false
        }
    }

}

let validateFormMail = new ValidateFormMail()