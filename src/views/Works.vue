<template>
  <main class="works">
    <section class="section">
      <div class="container">
        <h1>Works</h1>
        <div class="works-list">
          <div class="works-item" v-for="(work, i) in workList" v-bind:key="i">
            <div class="columns">
              <div class="column">
                <div class="image works-image">
                  <router-link v-bind:to="'/work/' + work.slug"><img v-bind:alt="work.title" v-bind:src="'http://cdn.bedeviere.com/work' + work.thumbnail_path"></router-link>
                </div>
              </div>
              <div class="column">
                <div class="works-type">{{ work.type }}</div>
                <h3 class="works-title"><router-link v-bind:to="'/work/' + work.slug">{{ work.title }}</router-link></h3>
                <div class="works-role">
                  <span v-for="(role, i) in work.role" v-bind:key="i">{{ role.name }}<span v-if="i != (work.role.length - 1)">, </span></span>
                </div>
                <article class="works-overview">
                  <p v-html="work.overview"></p>
                </article>
                <div class="buttons">
                  <router-link v-bind:to="'/work/' + work.slug" class="button btn-default">Case Study&nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="link-next">
          <h3><router-link to="/about">Say Hello&nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link></h3>
        </div>
        <div class="error">{{ workError }}</div>
      </div>
    </section>
  </main>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'works',
    metaInfo: {
      title: 'Works - Bimata Prathama, Front End Developer'
    },
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
      getWorks() {
        var vm = this;
        var apiURL = process.env.VUE_APP_ROOT_API;

        axios.get(apiURL + '/work')
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
  .works-type {
    font-weight: 700;
  }
  .works-title {
    a {
      color: $color-default;
      &:hover,
      &:focus {
        color: $color-primary;
      }
    }
  }
  .works-role {
    font-style: italic;
  }
  .works-overview {
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>