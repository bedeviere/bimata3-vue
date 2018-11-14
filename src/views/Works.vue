<template>
  <section class="works section">
    <div class="container">
      <h1>Works</h1>
      <div class="works-list">
        <div class="works-item" v-for="(work, i) in workList" v-bind:key="i">
          <div class="works-image">
            <img v-bind:alt="work.title" v-bind:src="getImageURL(work.thumbnail_path)">
          </div>
          <div class="columns">
            <div class="column">
              <h3 class="works-title">{{ work.title }}</h3>
              <p class="works-type">{{ work.type }}</p>
            </div>
            <div class="column">
              <p class="works-overview">{{ work.overview }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="error">{{ workError }}</div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'works',
    data() {
      return {
        workList: [],
        workError: ''
      };
    },
    mounted() {
      this.getWorks();
    },
    methods: {
      getImageURL(path) {
        var images = require.context('../assets', false);
        return images('.' + path);
      },
      getWorks() {
        var vm = this;

        axios.get('http://localhost:7750/work')
          .then(function(res) {
            vm.workList = res.data.results;
          })
          .catch(function(err) {
            vm.workError = err.message;
          });
      }
    }
  }
</script>

<style lang="scss">
  .works-item {
    margin-bottom: 3.75em;
  }
  .works-image {
    img {
      width: 100%;
    }
  }
</style>