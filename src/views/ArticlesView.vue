<template>
  <div>
    <h1>Articles</h1>
    <ArticleCard title="Benefits of Cardio" summary="Learn about the top benefits of cardio workouts." />
    <ArticleCard title="Strength Training 101" summary="An introduction to strength training for beginners." />
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue';

export default {
  components: { ArticleCard },
};
</script>
