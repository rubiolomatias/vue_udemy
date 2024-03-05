const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname
    };
  },
  watch:{
    name(value){
      this.fullname = value + ' ' + 'Rubiolo'
    }
  },
  computed:{
    // fullName(){
    //   if(this.name === ''){
    //     return ''
    //   }
    //   return this.name + ' ' + 'Rubiolo'
    // },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = ''
    },
  }
});

app.mount('#events');
