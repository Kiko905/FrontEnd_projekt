<template>
  <div>
    <h2>Progress Table</h2>
    <div v-if="userStore.users.length > 0">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="day in totalDays" :key="day">
            <td>Day {{ day }}</td>
            <td>{{ day <= completedDays ? 'Completed' : 'Pending' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No user data available. Please add a user.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useUserStore } from '../stores/userStore';

export default defineComponent({
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  computed: {
    completedDays() {
      return this.userStore.users.length > 0 ? this.userStore.users[0].progress.completedDays : 0;
    },
    totalDays() {
      return this.userStore.users.length > 0 ? this.userStore.users[0].progress.totalDays : 0;
    },
  },
});
</script>