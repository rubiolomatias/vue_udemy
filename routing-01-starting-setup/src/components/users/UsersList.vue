<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return{
      changedSaved:false,
    }
  },
  methods:{
    confirmInput(){
      this.$router.push('/teams')
    },
    saveChanges(){
      this.changedSaved = true
    }
  },
  beforeRouteEnter(to, from, next){
    console.log("UserList beforeEnter")
    console.log(to,from)
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log('UserList beforeRouteLeave')
    console.log(to,from)
    if(this.changedSaved){
      next
    }else{
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes!')
      next(userWantsToLeave)
    }
  },
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>