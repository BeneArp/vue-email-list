// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const {createApp} = Vue;

createApp({
    data(){
        
        return{
            indirizziEmail: [],
        }

    },

    methods:{
        // moltoUtile(){
        //     console.log(this.indirizziEmail);
        // },
    },

    mounted(){

        for(let i = 1; i <= 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                let result = email.data.response;
                // console.log(result);
    
                this.indirizziEmail.push(result);
            })
        }

    }

}).mount("#container")

