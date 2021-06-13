<template>
  <section class="header">
      <p class="najcitanejsie">najčítanejšie</p>
      <div class="nav">
        <router-link to="/">24h</router-link> /
        <router-link to="/threedays">3d</router-link> /
        <router-link to="/sevendays">7d</router-link> 
      </div>
  </section>
  <router-view />
</template>

<style lang="scss">
  //import of main scss file 
  @import './assets/scss/main.scss';
</style>
