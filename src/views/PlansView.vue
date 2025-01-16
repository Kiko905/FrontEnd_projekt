<template>
  <div>
    <h1>Fitness Plans</h1>
    <p>Choose a plan that fits your goals:</p>
    <FitnessPlan
      title="Beginner Plan"
      description="A 4-week plan designed for beginners to build strength and endurance."
    />
    <FitnessPlan
      title="Advanced Plan"
      description="A challenging 8-week plan for experienced fitness enthusiasts."
    />
  </div>
</template>

<script>
import FitnessPlan from '../components/FitnessPlan.vue';

export default {
  components: { FitnessPlan },
};
</script>
