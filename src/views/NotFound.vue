<template>
  <main class="error404">
    <section class="hero is-fullheight single">
      <div class="pattern">
        <canvas id="canvas"></canvas>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1>404</h1>
          <p>This is not the page you're looking for</p>
          <router-link to="/" class="button btn-default">Move Along</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'not-found',
  metaInfo: {
    title: '404 Not Found - Bimata Prathama, UX/UI Product Designer'
  }
}
</script>

<style lang="scss">
  .error404 {
    text-align: center;
    h1 {
      font-size: 6.854em;
      line-height: 1em;
    }
    p {
      font-size: 1.5em;
    }
    .button {
      margin-top: 2rem;
    }
  }
</style>
