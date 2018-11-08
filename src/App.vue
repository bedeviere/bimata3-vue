<template>
  <div class="wrapper" id="app">
    <header></header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style lang="scss">
.wrapper {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-default;
}

nav {
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}
</style>
