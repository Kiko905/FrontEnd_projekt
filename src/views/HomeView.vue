<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Welcome to the Fitness Blog!</h1>
    <p class="text-center mb-5">Explore articles, plans, and track your progress.</p>
    <section class="mb-5">
      <h2 class="mb-4">Latest Articles</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(article, index) in latestArticles" :key="index">
          <ArticleCard :title="article.title" :summary="article.summary" />
        </div>
      </div>
    </section>
    <section class="mb-5 text-center">
      <h2 class="mb-4">Fitness Plans</h2>
      <p class="mb-4">Discover various fitness plans to help you achieve your goals.</p>
      <button class="btn btn-primary" @click="goToPlansView">Explore Plans</button>
    </section>
    <section class="text-center">
      <h2 class="mb-4">Watch Your Progress Here!</h2>
      <p class="mb-4">Track your fitness progress and stay motivated.</p>
      <button class="btn btn-primary" @click="goToProfileView">View Profile</button>
    </section>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue';
import { articles } from './ArticlesView.vue';

export default {
  components: { ArticleCard },
  computed: {
    latestArticles() {
      return articles.slice(-3);
    }
  },
  methods: {
    goToPlansView() {
      this.$router.push({ name: 'Plans' });
    },
    goToProfileView() {
      this.$router.push({ name: 'Profile' });
    }
  }
};
</script>
