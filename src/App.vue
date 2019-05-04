<template>
  <div id="app">
    <img class="logo"
      src="https://purepng.com/public/uploads/large/purepng.com-fortnite-logo-black-and-whitefortnitefortnite-battle-royalegameslogos-691522709171yxrho.png">
    <div id="nav">
      <button class="mx-1 route-btn" @click="goHome">Home</button>
      <button class="mx-1 route-btn" @click="goChallenges">Challenges</button>
      <button class="mx-1 route-btn" @click="goStore">Store</button>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('getChallenges')
      this.$store.dispatch('getStoreItems')
    },
    methods: {
      goHome() {
        this.$router.push({ name: 'home' })
      },
      goChallenges() {
        this.$router.push({ name: 'challenges' })
      },
      goStore() {
        this.$router.push({ name: 'store' })
        this.$store.dispatch('setActiveItem')
      }
    }
  }

</script>

<style>
  html {
    background-color: #36c2e5;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #36c2e5
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  button {
    background-color: #deda4d;
    border: solid 3px #e8f182;
    border-radius: none;
    color: #32384d;
    font-weight: bolder;
    padding: 10px 50px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
  }

  button:hover {
    background-color: #d1cd49;
  }

  button:active {
    background-color: #fdf625;
  }

  .logo {
    max-width: 30vw;
  }
</style>