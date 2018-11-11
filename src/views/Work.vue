<template>
  <div class="work">
    <h1><router-link to="/work">Works</router-link> / {{ $route.params.slug }}</h1>
  </div>
</template>

<script>
export default {
  name: 'work'
}
</script>