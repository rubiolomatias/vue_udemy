const app = Vue.createApp({
 data(){
    return{
        name:'',
        confirmedName: ''
    }
 },
 methods:{
    alert(){
        alert('Paso 1')
    },
    setName(event){
        this.name = event.target.value
    },
    confirmInput(){
        this.confirmedName = this.name
      }
 }
})

app.mount('#assignment')