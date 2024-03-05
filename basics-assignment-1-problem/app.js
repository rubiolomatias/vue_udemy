const app = Vue.createApp({
    data(){
        return{
            name: 'Matias Rubiolo',
            nombre: '',
            age: 22,
            number: Math.random(),
            image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/04/jujutsu-kaisen-forma-real-sukuna.jpg?resize=1280%2C720&quality=80&ssl=1',

        }
    },
    methods:{
        updateName(){
            this.name = this.nombre
            this.nombre = ''
        }
    }
})

app.mount('#assignment')