<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/articles">Articles</router-link></li>
      <li><router-link to="/plans">Plans</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style>
nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}
</style>
