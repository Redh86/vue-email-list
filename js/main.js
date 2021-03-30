var app = new Vue ({
    el: "#app",
    data: {
        utnMail:[]
    },
    
    mounted() {
        const self = this
        for (var i = 0; i < 10; i++){
           axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                this.utnMail.push(result.data.response);
            })  
        }
    }
})