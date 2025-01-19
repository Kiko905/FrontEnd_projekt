<template>
  <div>
    <h2>Progress Table</h2>
    <div v-if="totalDays > 0">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Day</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="day in daysToShow" :key="day">
            <td>{{ day }}</td>
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
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    completedDays: {
      type: Number,
      required: true
    },
    totalDays: {
      type: Number,
      required: true
    }
  },
  computed: {
    daysToShow() {
      return Array.from({ length: Math.min(5, this.totalDays) }, (_, i) => i + 1);
    }
  }
});
</script>