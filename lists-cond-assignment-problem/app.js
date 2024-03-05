const app = Vue.createApp({
    data(){
        return{
            inputTask: '',
            tasks: [],
            active: true
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.inputTask)
        },
        updateShow(){
            this.active = !this.active
        }
    }
})

app.mount('#assignment')