<template>
  <section class="work section">
    <div class="container">
      <h1><router-link to="/work">Works</router-link> / {{ work.title }}</h1>
      <div class="image works-image">
        <img v-bind:alt="work.title" v-bind:src="getImageURL(work.thumbnail_path)">
      </div>
    </div>
    <div class="error">{{ workError }}</div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'work',
    data() {
      return {
        work: [],
        workError: ''
      };
    },
    mounted() {
      this.getWork();
    },
    methods: {
      getImageURL(path) {
        var images = require.context('../assets', false);
        return images('.' + path);
      },
      getWork() {
        var vm = this;

        axios.get('http://localhost:7750/work/' + vm.$route.params.slug)
          .then(function(res) {
            vm.work = res.data;
            if (res.data == null || res.data == '') {
              vm.$router.push({ path: '../404'});
            }
          })
          .catch(function(err) {
            vm.workError = err.message;
          });
      }
    }
  }
</script>