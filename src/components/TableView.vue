<template>
  <div>
    <h2>Progress Table</h2>
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
</template>

<script lang="ts">
import { useUserStore } from '../stores/userStore';
import { computed } from 'vue';

export default {
  setup() {
    const userStore = useUserStore();
    const completedDays = computed(() => userStore.progress.completedDays);
    const totalDays = computed(() => userStore.progress.totalDays);

    return { completedDays, totalDays };
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 8px;
  text-align: left;
}
</style>
