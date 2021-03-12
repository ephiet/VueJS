var app = new Vue({
    el: '#app',
    data: {
        input: "",
        historias: [
            { escritor: "Alex", texto: 'Alex dice "Choqué mi auto hoy!"' },
            { escritor: "Alex", texto: 'Alex dice "Alguien se comió mi chocolate..."' },
            { escritor: "Juan", texto: 'Juan dice "Ayer, alguien robó mi bolso!"' },
            { escritor: "Juan", texto: 'Juan dice "Me comí el chocolate de alguien!"' }
        ],
    },
    computed: {
        historiasAlex (){
            return this.historias.filter(historia => historia.escritor.includes('Alex'))
        },
        historiasJuan (){
            return this.historias.filter(historia => historia.escritor.includes('Juan'))
        },
        busqueda () {
            return this.historias.filter(historia => historia.texto.toLowerCase().includes(this.input.toLowerCase()))
        }
    }
})