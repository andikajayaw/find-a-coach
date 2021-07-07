<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      LIST OF COACHES
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      //   console.log(this.$store.getters['coaches/coaches']);
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      // console.log(this.$store.getters['coaches/coaches']);
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>