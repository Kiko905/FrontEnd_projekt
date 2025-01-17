<template>
  <div>
    <h1>Articles</h1>
    <ArticleCard title="Benefits of Cardio" summary="Learn about the top benefits of cardio workouts." />
    <ArticleCard title="Strength Training 101" summary="An introduction to strength training for beginners." />
    <ArticleCard title="Healthy Eating" summary="Tips and tricks for maintaining a healthy diet." />
    <ArticleCard title="Yoga for Flexibility" summary="How yoga can improve your flexibility and overall health." />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleCard from '../components/ArticleCard.vue';

export default defineComponent({
  components: { ArticleCard },
});
</script>