<template>
  <div class="wrapper" id="app">
    <header></header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/work">Works</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

html {
  font-size: 16px;
}

body {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-default;
}

.wrapper {
  min-height: 100%;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  font-size: 3.157rem;
}

h2 {
  font-size: 2.369rem;
}

h3 {
  font-size: 1.777rem;
}

h4 {
  font-size: 1.333rem;
}

a {
  color: $color-primary;
}

nav {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  > ul {
    padding: 0;
    margin: 0;
    list-style: none;
    > li {
      display: inline-block;
      padding: 0 10px;
      a {
        color: $color-default;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        @include transition-default;
        &:hover,
        &.router-link-exact-active {
          color: $color-primary;
        }
      }
    }
  }
}

main {
  padding-bottom: 60px;
}

footer {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
}

@media only screen and (min-width: 768px) {
  html {
    font-size: 20px;
  }
}
</style>
