const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h1>Master Vue and build amazing apps!</h1>',
            vueLink: 'https://vuejs.org'
        };
    },
    methods:{
        outputGoal(){
            const randomNumer = Math.random()
            if (randomNumer < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
})

app.mount('#user-goal')
