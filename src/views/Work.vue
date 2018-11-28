<template>
  <section class="work section">
    <div class="container">
      <h1><router-link to="/work">Works</router-link> / {{ work.title }}</h1>
      <div class="image work-image">
        <img v-bind:alt="work.title" v-bind:src="getImageURL(work.thumbnail_path)">
      </div>
      <article class="work-article">
        <div class="columns" v-for="(article, i) in work.article" v-bind:key="i">
          <div class="column is-offset-2-desktop is-8" v-if="article.type == 'paragraph'">
            <p v-html="article.content"></p>
          </div>
          <div class="column is-offset-2-desktop is-8" v-if="article.type == 'highlight'">
            <div class="message highlight-default">
              <div class="message-body" v-html="article.content"></div>
            </div>
          </div>
          <div class="column is-offset-3-desktop is-6" v-if="article.type == 'quote'">
            <blockquote class="quote" v-html="article.content"></blockquote>
          </div>
          <div class="column">
            <div class="image work-image" v-if="article.type == 'image'">
              <img v-bind:alt="article.label" v-bind:src="article.content">
              <label class="image-info" v-html="article.label"></label>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-offset-2-desktop is-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-offset-3-desktop is-6">
            <blockquote class="quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla."</blockquote>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="image work-image">
              <img v-bind:alt="work.title" v-bind:src="getImageURL(work.thumbnail_path)">
              <label class="image-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-offset-2-desktop is-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-offset-2-desktop is-8">
            <div class="message highlight-default">
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-offset-2-desktop is-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-offset-2-desktop is-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.</p>
          </div>
        </div>
      </article>
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

<style lang="scss">
  .work-article {
    margin-top: .75em; 
  }
</style>