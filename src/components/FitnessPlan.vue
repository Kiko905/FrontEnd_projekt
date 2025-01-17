<template>
  <div class="fitness-plan">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button @click="selectPlan">Select Plan</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    description: String,
  },
  methods: {
    selectPlan() {
      alert(`You have selected: ${this.title}`);
    },
  },
});
</script>

<style>
.fitness-plan {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>