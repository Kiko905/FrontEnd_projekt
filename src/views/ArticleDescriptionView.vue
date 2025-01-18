<template>
  <div class="container mt-5">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

const articleDescriptions: { [key: string]: string } = {
  'Benefits of Cardio': 'Cardio workouts are essential for maintaining a healthy heart and lungs. They help improve your endurance, burn calories, and reduce stress. Regular cardio exercise can also boost your mood and energy levels.',
  'Strength Training 101': 'Strength training is crucial for building muscle mass and strength. It helps improve your metabolism, bone density, and overall physical performance. This guide is perfect for beginners looking to start their strength training journey.',
  'Healthy Eating': 'Healthy eating is the foundation of a balanced lifestyle. This article provides tips and tricks for maintaining a nutritious diet, including meal planning, portion control, and choosing the right foods to fuel your body.',
  'Yoga for Flexibility': 'Yoga is an excellent practice for improving flexibility and overall health. It helps reduce stress, increase muscle tone, and enhance your range of motion. This article explores various yoga poses and techniques to help you get started.'
};

export default defineComponent({
  data() {
    return {
      title: '',
      description: ''
    };
  },
  created() {
    const route = useRoute();
    this.title = route.params.title as string;
    this.description = articleDescriptions[this.title as keyof typeof articleDescriptions] || 'Description not available.';
  },
});
</script>