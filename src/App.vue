<template>
  <div id="app">
    <div id="nav">
      <MainNav></MainNav>
    </div>
    <router-view />
  </div>
</template>

<script>
import MainNav from '@/components/layout/MainNav.vue'
export default {
  components: { MainNav },
  created() {
    this.$store.dispatch('getProductList');
  },
}
</script>
<style>
:root {
  --yellow: #FFDE00;
  --dark-yellow: #B3A125;
  --red: #ff1f1f;
  --dark-red: #CC0000;
  --blue: #0060ac;
  --purple: #3B4CCA;
  --dark-purple: rgb(54, 59, 129);
  --orange: #FE4B00;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "PokemonH";
  src: url('assets/fonts/Pokemon Hollow.ttf');
  font-weight: 200;
  font-style: normal;
  unicode-range: U+000-5FF;
  font-display: swap;
}

@font-face {
  font-family: "Pokemon Solid";
  src: url('assets/fonts/Pokemon Solid.ttf');
  font-weight: 200;
  font-style: normal;
  unicode-range: U+000-5FF;
  font-display: swap;
}

.pokemon-logo {
  margin-bottom: 0;
  font-size: 1.5em;
}

.pokemon-logo>span {
  font-size: 0.6em;
  margin-left: -12px;
}

/*** General ***/
.pokemon-font {
  font-family: "PokemonH", Arial;
}

.pokemon-solid-font {
  font-family: "Pokemon Solid", Arial;
}

.main-btn {
  border-radius: 10px;
  background: var(--yellow);
  padding: 8px 12px;
  color: #000;
  font-size: 0.8rem;
}

.main-btn:hover {
  text-decoration: none;
}

.cart-badge {
  border-radius: 50% !important;
  position: absolute !important;
  top: -8px;
  right: -16px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--yellow) !important;
  font-size: 80%;
  background: rgba(255, 255, 255, 0.5) !important;
  border: 1px solid var(--yellow);
}
</style>
