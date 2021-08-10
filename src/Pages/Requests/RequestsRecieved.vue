<template>
  <div>
    <base-dialog :show="!!error" title="Error!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Request Recieved</h2>
        </header>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests && !isLoading">
          <RequestItems
            v-for="req in recievedRequests"
            :key="req.id"
            :email="req.email"
            :message="req.message"
          />
        </ul>
        <h3 v-else>You haven't recieved any requests yet</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItems from '../../components/requests/RequestItems.vue';
export default {
  components: {
    RequestItems,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    recievedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Failed to fetch';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>