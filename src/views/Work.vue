<template>
  <main class="work">
    <section class="section">
      <div class="container">
        <h1><router-link to="/work">Works</router-link> / {{ work.title }}</h1>
        <div class="image work-image">
          <img v-bind:alt="work.title" v-bind:src="'//cdn.bedeviere.com/work' + work.thumbnail_path">
        </div>
        <div class="columns work-info">
          <div class="column is-offset-2-desktop is-8">
            <div class="work-type">
              <label><strong>Type</strong></label>
              <p>{{ work.type }}</p>
            </div>
            <div class="work-role">
              <label><strong>Role</strong></label>
              <p><span v-for="(role, i) in work.role" v-bind:key="i">{{ role.name }}<span v-if="i != (work.role.length - 1)">, </span></span></p>
            </div>
            <div class="work-tech">
              <label><strong>Tools & Methods</strong></label>
              <p><span v-for="(tool, i) in work.tools" v-bind:key="i">{{ tool.name }}<span v-if="i != (work.tools.length - 1)">, </span></span></p>
            </div>
            <div v-if="work.link != ''" class="buttons work-live">
              <a v-bind:href="work.link" target="_blank" class="button btn-primary">{{ work.link_text }}&nbsp;<i class="fas fa-external-link-square-alt"></i></a>
            </div>
          </div>
        </div>
        <article class="work-article">
          <div class="columns" v-for="(article, i) in work.article" v-bind:key="i">
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'h3'">
              <h3 v-html="article.content"></h3>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'h4'">
              <h4 v-html="article.content"></h4>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'h5'">
              <h5 v-html="article.content"></h5>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'h6'">
              <h6 v-html="article.content"></h6>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'paragraph'">
              <p v-html="article.content"></p>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'ul'">
              <p v-html="article.content"></p>
              <ul class="list-bullet">
                <li v-for="(list, i) in article.list" v-bind:key="i" v-html="list.content"></li>
              </ul>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'ol'">
              <p v-html="article.content"></p>
              <ol class="list-number">
                <li v-for="(list, i) in article.list" v-bind:key="i" v-html="list.content"></li>
              </ol>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'highlight'">
              <div class="message highlight-default">
                <div class="message-body" v-html="article.content"></div>
              </div>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'quote'">
              <blockquote class="quote" v-html="article.content"></blockquote>
            </div>
            <div class="column" v-if="article.type == 'image-large'">
              <div class="image work-image">
                <img v-bind:alt="article.alt" v-bind:src="'//cdn.bedeviere.com/work' + article.content">
                <label class="image-info" v-html="article.label" v-if="article.label != '-'"></label>
              </div>
            </div>
            <div class="column is-offset-2-desktop is-8" v-if="article.type == 'image-small'">
              <div class="image work-image">
                <img v-bind:alt="article.alt" v-bind:src="'//cdn.bedeviere.com/work' + article.content">
                <label class="image-info" v-html="article.label" v-if="article.label != '-'"></label>
              </div>
            </div>
          </div>
          <!-- <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <p>Space: The final frontier. These are the voyages of the Starship, Enterprise. Its five-year mission: To explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <blockquote class="quote">"We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically."</blockquote>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="image work-image">
                <img v-bind:alt="work.title" v-bind:src="'http://cdn.bedeviere.com/work' + work.thumbnail_path">
                <label class="image-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <div class="image work-image">
                <img v-bind:alt="work.title" v-bind:src="'http://cdn.bedeviere.com/work' + work.thumbnail_path">
                <label class="image-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <h3>Space: The Final Frontier</h3>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman’s earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <h4>Enterprise</h4>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <div class="message highlight-default">
                <div class="message-body">
                  For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-3-desktop is-6">
              <p>It suddenly struck me that that <em>tiny pea, pretty and blue</em>, was the <strong>Earth</strong>. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. <a>I didn’t feel like a giant</a>. I felt very, very small.</p>
            </div>
          </div> -->
        </article>
        <div class="columns">
          <div class="column is-half link-prev">
            <h3><router-link to="/work"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;Works</router-link></h3>
          </div>
          <div class="column is-half link-next">
            <h3><router-link v-bind:to="'/work/' + work.next_slug">{{ work.next_title }}&nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link></h3>
          </div>
        </div>
      </div>
      <div class="error">{{ workError }}</div>
    </section>
  </main>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'work',
    metaInfo() {
      return {
        title: this.work.title + ' - Bimata Prathama, UX/UI Product Designer'
      }
    },
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
      getWork() {
        var vm = this;
        var apiURL = process.env.VUE_APP_ROOT_API;

        axios.get(apiURL + '/work/' + vm.$route.params.slug)
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
  .work-info {
    margin-top: .75em;
  }
  .work-live {
    text-align: center;
    margin-top: 1.25em;
    .button {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .work-article {
    margin-top: .75em;
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: -0.75em;
    }
    iframe {
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) {
    iframe {
      height: 600px;
    }
  }
</style>