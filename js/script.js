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
        moltoUtile(){
            console.log(this.tasks[0]);
        },
    },
    

}).mount("#container")

// https://flynn.boolean.careers/exercises/api/random/mail