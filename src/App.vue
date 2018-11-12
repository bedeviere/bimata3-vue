<template>
  <div class="wrapper has-navbar-fixed-top" id="app">
    <header class="navbar is-fixed-top">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="./assets/logo.png" alt="Bimata Prathama">
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-bind:class="{ 'is-active': navbarMenu }" v-on:click="navbarMenuToggle">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <nav class="navbar-menu" v-bind:class="{ 'is-active': navbarMenu }">
        <ul class="navbar-end">
          <li class="navbar-item"><router-link to="/work">Works</router-link></li>
          <li class="navbar-item"><router-link to="/about">About</router-link></li>
          <li class="navbar-item"><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
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
  name: 'app',
  data() {
    return {
      navbarMenu: false
    };
  },
  watch: {
    $route: function() {
      this.navbarMenu = false;
    }
  },
  methods: {
    navbarMenuToggle() {
      if (this.navbarMenu) {
        this.navbarMenu = false;
      } else {
        this.navbarMenu = true;
      }
    }
  }
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
    font-size: 14px;
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
    &.has-navbar-fixed-top {
      padding-top: 3.25rem;
    }
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
    position: relative;
    @include transition-default;
    &::after {
      content: '';
      display: block;
      background-color: $color-primary;
      width: 0;
      height: .14em;
      position: absolute;
      left: 0;
      bottom: 0;
      @include transition-default;
    }
    &:hover,
    &:focus {
      color: $color-primary;
      &::after {
        width: 100%;
      }
    }
  }

  .button {
    border-width: 2px;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    @include transition-default;
    &::after {
      display: none;
    }
  }

  .btn-default {
    background-color: $color-default;
    color: white;
    border-color: $color-default;
    &:hover,
    &:focus {
      background-color: $color-primary;
      border-color: $color-primary;
      color: $color-default;
    }
  }

  .btn-default-o {
    background-color: transparent;
    color: $color-default;
    border-color: $color-default;
    &:hover,
    &:focus {
      background-color: $color-default;
      border-color: $color-default;
      color: $color-primary;
    }
  }

  .btn-primary {
    background-color: $color-primary;
    color: $color-default;
    border-color: $color-primary;
    &:hover,
    &:focus {
      background-color: darken( $color-primary, 10% );
      border-color: darken( $color-primary, 10% );
      color: $color-default;
    }
  }

  .btn-secondary {
    background-color: $color-secondary;
    color: $color-default;
    border-color: $color-secondary;
    &:hover,
    &:focus {
      background-color: $color-primary;
      border-color: $color-primary;
      color: $color-default;
    }
  }

  .navbar {
    background-color: rgba(white, 0.85);
    a {
      &::after {
        display: none;
      }
    }
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
          display: block;
          &:hover,
          &.router-link-active {
            color: $color-primary;
          }
        }
      }
    }
  }

  .navbar-menu,
  .navbar-burger {
    @include transition-default;
  }

  .navbar-burger {
    color: $color-default;
    &:hover {
      color: $color-default;
    }
  }

  main {
    padding-bottom: 60px;
  }

  .hero {
    &.is-fullheight {
      &.single {
        min-height: calc(100vh - 3.25rem - 60px);
      }
    }
  }

  footer {
    background-color: rgba(white, 0.85);
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: absolute;
    bottom: 0;
  }

  @media only screen and (max-width: 1087px) {
    .navbar-menu {
      background-color: rgba(white, 0.85);
      min-height: calc(100vh - 3.25rem - 60px);
      opacity: 0;
      visibility: hidden;
      box-shadow: none;
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      &.is-active {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    html {
      font-size: 20px;
    }
  }
</style>
