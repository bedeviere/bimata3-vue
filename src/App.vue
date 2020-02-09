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
    <transition name="fade" mode="out-in">
      <router-view v-bind:key="$route.fullPath"></router-view>
    </transition>
    <footer>&copy; {{ new Date().getFullYear() }} Bimata Prathama</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    title: 'Bimata Prathama, Front End Developer'
  },
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

  ::selection {
    background-color: $color-primary;
  }

  .wrapper {
    min-height: 100%;
    position: relative;
    &.has-navbar-fixed-top {
      padding-top: 3.25rem;
    }
  }

  .fade-enter-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .expand-enter-active,
  .expand-leave-active {
    transition: 0.3s ease-in-out;
    transition-property: opacity, height;
    overflow: hidden;
  }

  .expand-enter,
  .expand-leave-to {
    height: 0;
    opacity: 0;
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

  hr {
    border: none;
    border-top: 2px solid $color-default;
  }

  p {
    margin-bottom: .5em;
  }

  a {
    color: $color-default;
    font-weight: 700;
    position: relative;
    box-shadow:  0 -1px 0 0 white inset, 0 -0.55em 0 0 $color-primary inset;
    @include transition-default;
    span {
      &::selection {
        color: white;
      }
    }
    &::selection {
      color: white;
    }
    &:hover,
    &:focus {
      color: $color-primary;
      box-shadow:  0 -1px 0 0 white inset, 0 0em 0 0 $color-primary inset;
    }
  }

  strong {
    color: inherit;
  }

  .fab {
    font-weight: 400;
  }

  .image {
    text-align: center;
    .image-info {
      font-size: .75em;
      color: $color-default;
      opacity: .75;
    }
  }

  .button {
    border-width: 2px;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    @include transition-default;
    &[disabled] {
      background-color: $color-disabled;
      border-color: $color-disabled;
      color: $color-default;
      &:hover,
      &:focus {
        background-color: $color-disabled;
        border-color: $color-disabled;
        color: $color-default;
      }
      &::before {
        display: none;
      }
    }
    &:hover,
    &:focus {
      box-shadow: none;
    }
    &:hover,
    &:focus {
      &::before {
        opacity: 0;
        transform: scale(1.25, 1.8);
      }
    }
    &::before {
      content: '';
      width: 90%;
      height: 85%;
      opacity: 0.8;
      border: 2px solid;
      border-radius: 4px;
      transition: opacity 0.4s ease, transform 0.5s ease;
      position: absolute;
      top: 8%;
      left: 5%;
    }
  }

  .btn-icon {
    padding: 0;
    width: 40px;
    height: 40px;
    line-height: 36px;
    border-radius: 100%;
    font-size: 18px;
    position: relative;
    &:hover,
    &:focus {
      &::before {
        transform: scale(1.8);
      }
    }
    &::before {
      width: 85%;
      border-radius: 100%;
      left: 8%;
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
    &::before {
      border-color: $color-default;
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
    &::before {
      border-color: transparent;
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
    &::before {
      border-color: $color-primary;
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
    &::before {
      border-color: $color-secondary;
    }
  }

  .image-centered {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .quote {
    font-style: italic;
    font-size: 1.333em;
    opacity: .75;
    padding-left: 2em;
  }

  .highlight-default {
    a {
      &:not(.button),
      &:not(.tag) {
        color: $color-primary;
        text-decoration: none;
      }
    }
    .message-body {
      border-color: $color-default;
      color: $color-default;
    }
  }

  .highlight-primary {
    background-color: lighten( $color-primary, 40% );
    .message-body {
      border-color: $color-primary;
      color: $color-default;
    }
  }

  ul.list-social {
    > li {
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
      &:first-child {
        margin-left: 0px;
      }
      &:last-child {
        margin-right: 0px;
      }
    }
  }
  
  ul.list-bullet {
    list-style: disc;
    padding-left: 1em;
  }

  .field {
    position: relative;
  }

  .label {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: .75em;
    text-transform: uppercase;
    background-color: white;
    color: $color-default;
    padding-left: .5em;
    padding-right: .5em;
    position: absolute;
    top: -0.75em;
    left: 10px;
    z-index: 1;
  }

  .input,
  .textarea {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    color: $color-default;
    box-shadow: none;
    border-width: 2px;
    border-color: $color-default;
    @include transition-default;
    &::placeholder {
      color: $color-default;
    }
    &:hover,
    &:focus {
      border-color: $color-primary;
    }
  }

  .link-prev {
    text-align: left;
  }

  .link-next {
    text-align: right;
  }

  .navbar {
    background-color: rgba(white, 0.95);
    a {
      box-shadow: none;
      &:hover,
      &:focus {
        box-shadow: none;
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
    span {
      height: 2px;
      width: 20px;
      &:nth-child(1) {
        top: calc(50% - 8px);
      }
      &:nth-child(3) {
        top: calc(50% + 6px);
      }
    }
    &:hover {
      color: $color-default;
    }
    &.is-active {
      span {
        &:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        &:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      }
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
    nav {
      font-size: 2em;
    }
    .navbar-menu {
      background-color: rgba(white, 0.95);
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
    .btn-icon {
      width: 50px;
      height: 50px;
      line-height: 46px;
      font-size: 24px;
    }
  }
</style>
