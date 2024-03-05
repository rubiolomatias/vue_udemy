const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
      name:'',
      confirmedName: ''
    };
  },
  methods:{
    addCount(num){
      this.counter += num
    },
    removeCount(num){
      this.counter -= num
    },
    setName(event){
      this.name = event.target.value
    },
    submitForm( ){
      alert('Submitted')
    },
    confirmInput(){
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');
