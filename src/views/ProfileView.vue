<template>
  <div>
    <h1>Your Profile</h1>
    <UserForm />
    <h2>Progress</h2>
    <div v-if="userStore.users.length > 0">
      <p>Completed Days: {{ userStore.users[0].progress.completedDays }}</p>
      <p>Total Days: {{ userStore.users[0].progress.totalDays }}</p>
    </div>
    <div v-else>
      <p>No user data available. Please add a user.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/userStore';
import UserForm from '../components/UserForm.vue';

export default defineComponent({
  components: { UserForm },
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  computed: {
    progress() {
      return this.userStore.users.length > 0 ? this.userStore.users[0].progress : { completedDays: 0, totalDays: 0 };
    },
  },
});
</script>