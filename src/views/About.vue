<template>
  <main class="about">
    <section class="section">
      <div class="container">
        <h1>About Me</h1>
        <div class="columns">
          <div class="column">
            <div class="image about-image">
              <img src="../assets/bimata-p.jpg" alt="Bimata Prathama">
            </div>
          </div>
          <div class="column">
            <div class="about-overview">
              <p>Hi! I'm Bimata, a front-end developer based in Jakarta, Indonesia. I develop modern, responsive websites using seasoned, practical front-end technologies such as Vue.JS and AngularJS. Besides developing, I also love to do some research on current trends of UI and UX. I focused on simplicity, modularity, and easy maintenance.</p>
              <p>My usual workflow is to start from paper and design tools, or to code from an already existing prepared design. Though, I'm also comfortable in direct designing with code.</p>
              <transition-expand>
                <div class="about-overview-more" v-show="overviewMore">
                  <p>By day, I code and design either for a living or to learn and experiment new technologies. By night, you might find me adventuring around <a href="https://worldofwarcraft.com/en-gb/character/ravenholdt/Bedeviere" target="_blank">Azeroth</a>, slaying demons and stuff.</p>
                  <p>The name Bedeviere originally derived from <a href="https://en.wikipedia.org/wiki/Bedivere" target="_blank">Bedivere</a>, a famous <a href="https://en.wikipedia.org/wiki/Knights_of_the_Round_Table" target="_blank">Knight of the Round Table</a> from Arthurian Legends. I use the name for my World of Warcraft character without knowing I spelt it a bit different. Over time, I grew fond of the name and it stuck. The name becomes my primary alias ever since.</p>
                </div>
              </transition-expand>
              <div class="about-overview-buttons" v-on:click="overviewToggle">
                <div class="button btn-icon btn-default">
                  <i class="fas fa-fw fa-plus" v-if="!overviewMore"></i>
                  <i class="fas fa-fw fa-minus" v-else></i>
                </div>
                <h5>{{ overviewMoreCopy }}</h5>
              </div>
              <br>
              <h4>Social</h4>
              <ul class="list-social">
                <li><a class="button btn-icon btn-default" href="http://github.com/bedeviere" target="_blank"><i class="fab fa-fw fa-github"></i></a></li>
                <li><a class="button btn-icon btn-default" href="http://codepen.com/bedeviere" target="_blank"><i class="fab fa-fw fa-codepen"></i></a></li>
                <li><a class="button btn-icon btn-default" href="http://linkedin.com/in/bedeviere" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a></li>
                <li><a class="button btn-icon btn-default" href="http://instagram.com/bedeviere" target="_blank"><i class="fab fa-fw fa-instagram"></i></a></li>
              </ul>
              <br>
              <h4>Also Known As</h4>
              <p>Tama Harianto, Bedeviere</p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="columns">
              <div class="column">
                <div class="about-service">
                  <h4>What I Do</h4>
                  <ul class="list-bullet">
                    <li>Front-End Development</li>
                    <li>Mobile First Design</li>
                    <li>WordPress Development</li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <div calss="about-tech">
                  <h4>Tech Stack</h4>
                  <ul class="list-bullet">
                    <li>HTML5</li>
                    <li>CSS3 / SCSS / LESS</li>
                    <li>JS / Node / Vue.JS / AngularJS</li>
                    <li>WordPress CMS</li>
                    <li>Git / Svn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <div calss="about-design">
                  <h4>Design Tools</h4>
                  <ul class="list-bullet">
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe XD</li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <div class="about-love">
                  <h4>What I &lt;3</h4>
                  <ul class="list-bullet">
                    <li><a href="https://pinterest.com/bedeviere/for-the-alliance/" target="_blank">For the Alliance!</a></li>
                    <li><a href="http://instagram.com/bimatagunpla" target="_blank">Gunpla</a></li>
                    <li><a href="https://youtu.be/F64yFFnZfkI" target="_blank">Yorushika - "Say It."</a></li>
                    <li><a href="https://pinterest.com/bedeviere/troopers/" target="_blank">Troopers</a></li>
                  </ul>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <h4>Life in Photos</h4>
        <vue-instagram v-bind:token="token" v-bind:count="12" class="columns is-multiline is-mobile">
          <template slot="feeds" slot-scope="props">
            <div class="column is-3-desktop is-4-tablet is-6-mobile">
              <a v-bind:href="props.feed.link" class="image" target="_blank">
                <img v-bind:src="props.feed.images.standard_resolution.url" alt="Photo by @bedeviere">
              </a>
            </div>
          </template>
          <template slot="error" slot-scope="props">
            <div class="insta-alert"> {{ props.error.error_message }} </div>
          </template>
        </vue-instagram>
        <div class="columns">
          <div class="column is-half">
            <h4>About this Website</h4>
            <p>This site has been designed and built by hand using <a href="https://bulma.io/" target="_blank">Bulma CSS Framework</a> as the skeleton. It's rendered and transitioned through <a href="https://vuejs.org/" target="_blank">Vue.JS</a>.</p>
            <p>The CSS is written in <a href="https://sass-lang.com/" target="_blank">Sass</a>, with <strong>mobile first approach</strong> and with <a href="https://type-scale.com/" target="_blank">Perfect Fourth scale</a> for a <a href="https://alistapart.com/article/more-meaningful-typography" target="_blank">more meaningful typhography</a>.</p>
            <p>The color scheme of this site is heavily inspired by <a href="https://wow.gamepedia.com/Crest_of_the_Alliance" target="_blank">Alliance Crest</a>.</p>
          </div>
        </div>
        <div class="link-next">
          <h3><router-link to="/work">Works&nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link></h3>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TransitionExpand from '../components/TransitionExpand.vue'
import VueInstagram from 'vue-instagram'

export default {
  name: 'about',
  metaInfo: {
    title: 'About - Bimata Prathama, Front End Developer'
  },
  components: {
    TransitionExpand,
    VueInstagram
  },
  data() {
    return {
      overviewMore: false,
      overviewMoreCopy: 'More about me..',
      token: '178557724.1677ed0.a09bcf1811c348cabeccf098cff2d079'
    };
  },
  methods: {
    overviewToggle() {
      var vm = this;

      if ( vm.overviewMore == false ) {
        vm.overviewMore = true;
        vm.overviewMoreCopy = 'Less about me...';
      } else {
        vm.overviewMore = false;
        vm.overviewMoreCopy = 'More about me...';
      }
    }
  }
}
</script>

<style lang="scss">
  .about-overview-buttons {
    cursor: pointer;
    .button {
      vertical-align: middle;
    }
    h5 {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      font-style: italic;
      @include transition-default;
    }
    &:hover {
      .button {
        &::before {
          opacity: 0;
          transform: scale(1.8);
        }
      }
      .btn-default {
        background-color: $color-primary;
        border-color: $color-primary;
        color: $color-default;
      }
      .btn-default-o {
        background-color: $color-default;
        border-color: $color-default;
        color: $color-primary;
      }
      h5 {
        color: $color-primary;
        box-shadow:  0 -1px 0 0 white inset, 0 -0.15em 0 0 $color-primary inset;
      }
    }
  }
</style>
