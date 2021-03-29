var app = new Vue ({
    el: "#app",
    lstMail: {
        utnMail: this.mail,
    },

    mounted() {
        const self = this
        for (var i = 0; i < 10; i++){
           axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (mail) {
                console.log(mail.data.response)
                this.utnMail = mail.data.respond
            })  
        }
    }
})