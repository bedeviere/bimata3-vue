<template>
  <section class="works section">
    <div class="container">
      <h1>Works</h1>
      <div class="works-list">
        <div class="works-item" v-for="(work, i) in workList" v-bind:key="i">
          <div class="image works-image">
            <router-link v-bind:to="'/work/' + work.slug"><img v-bind:alt="work.title" v-bind:src="getImageURL(work.thumbnail_path)"></router-link>
          </div>
          <div class="columns">
            <div class="column">
              <h3 class="works-title"><router-link v-bind:to="'/work/' + work.slug">{{ work.title }}</router-link></h3>
              <div class="works-role">
                <span v-for="(role, i) in work.role" v-bind:key="i">{{ role.name }}<span v-if="i != (work.role.length - 1)">, </span></span>
              </div>
              <div class="works-type">{{ work.type }}</div>
            </div>
            <div class="column">
              <article class="works-overview">
                <p v-html="work.overview"></p>
              </article>
              <div class="buttons">
                <router-link v-bind:to="'/work/' + work.slug" class="button btn-default">Case Study</router-link>
              </div>
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
  .works-title {
    margin-top: .5em;
  }
  .works-overview {
    margin-top: 1em;
  }
</style>