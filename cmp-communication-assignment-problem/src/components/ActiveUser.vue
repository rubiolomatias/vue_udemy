<template>
  <section>
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }} <span v-if="user.length !== 0">Years</span></h3>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Array,
      required: true
    }
  }
};
</script>
