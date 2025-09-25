<template>
  <main class="error404">
    <section class="hero is-fullheight single">
      <div class="pattern">
        <canvas id="canvas"></canvas>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4 is-offset-4">
              <figure class="image">
                <img src="../assets/404.svg" alt="illustration hand waving">
              </figure>
            </div>
          </div>
          <h1>404 Page Not Found</h1>
          <p>This is not the page you're looking for</p>
          <router-link to="/" class="button btn-primary">
            You can go about your business, move along&nbsp;
            <i class="fas fa-hand-paper"></i>
          </router-link>
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
      font-size: 1.777em;
      line-height: 1em;
    }
    .button {
      margin-top: 1rem;
      font-family: 'Lato', Helvetica, Arial, sans-serif;
      font-weight: 700;
      text-transform: none;
      &::before {
        width: 98%;
        left: 2%;
      }
    }
  }
</style>
