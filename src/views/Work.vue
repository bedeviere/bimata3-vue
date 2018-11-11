<template>
  <section class="work section">
    <div class="container">
      <h1><router-link to="/work">Works</router-link> / {{ $route.params.slug }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'work'
}
</script>