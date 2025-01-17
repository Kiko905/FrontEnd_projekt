<template>
  <div>
    <h1 class="centered">Fitness Plans</h1>
    <p class="centered">Choose a plan that fits your goals:</p>
    <div class="plans-container">
      <FitnessPlan
        title="Beginner Plan"
        description="A 4-week plan designed for beginners to build strength and endurance."
        price="$19.99"
        image="..\images\beginnerplan.jpg"
      />
      <FitnessPlan
        title="Advanced Plan"
        description="A challenging 8-week plan for experienced fitness enthusiasts."
        price="$39.99"
        image="..\images\advancedplan.jpg"
      />
      <FitnessPlan
        title="Professional Plan"
        description="A comprehensive 12-week plan for professional athletes."
        price="$59.99"
        image="..\images\profesionalplan.jpg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FitnessPlan from '../components/FitnessPlan.vue';

export default defineComponent({
  components: { FitnessPlan },
});
</script>