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
              <p>Hi! I'm <strong>Bimata</strong>, sometimes known as <strong>Bedeviere</strong>, a <strong>UX/UI Product Designer</strong> based in <strong>Jakarta, ID</strong>.</p>
              <p>My approach combines user-centric research with a collaborative spirit, working alongside cross-functional teams to bring robust design solutions to life. My transition from front-end development provides a comprehensive understanding of the technical landscape, ensuring seamless design-to-development workflows.</p>
              <p>Fundamentally, I am constantly curious about how people perceive and interact with products and things.</p>
              <transition-expand>
                <div class="about-overview-more" v-show="overviewMore">
                  <p>By day, I research, brainstorm, experiment, and design for a living. By night, you might find me chilling in <a href="https://playvalorant.com/en-us/" target="_blank">VALORANT</a>, clicking heads quickly and stuff.</p>
                  <p>The name <strong>Bedeviere</strong> originally derived from <a href="https://en.wikipedia.org/wiki/Bedivere" target="_blank">Bedivere</a>, a famous <a href="https://en.wikipedia.org/wiki/Knights_of_the_Round_Table" target="_blank">Knight of the Round Table</a> from <strong>Arthurian Legends</strong>. I use the name for my <a href="https://worldofwarcraft.com/en-gb/character/ravenholdt/Bedeviere" target="_blank">first World of Warcraft character</a> without knowing I spelt it a bit different. Over time, I grew fond of the name and it stuck. The name becomes my primary alias ever since.</p>
                </div>
              </transition-expand>
              <div class="about-overview-buttons" v-on:click="overviewToggle">
                <div class="button btn-icon btn-primary">
                  <i class="fas fa-fw fa-plus" v-if="!overviewMore"></i>
                  <i class="fas fa-fw fa-minus" v-else></i>
                </div>
                <h5>{{ overviewMoreCopy }}</h5>
              </div>
              <br>
              <h4>Socials</h4>
              <ul class="list-social">
                <li><a class="button btn-icon btn-primary" href="http://dribbble.com/bedeviere" target="_blank"><i class="fab fa-fw fa-dribbble"></i></a></li>
                <li><a class="button btn-icon btn-primary" href="http://linkedin.com/in/bedeviere" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a></li>
                <li><a class="button btn-icon btn-primary" href="http://instagram.com/bedeviere" target="_blank"><i class="fab fa-fw fa-instagram"></i></a></li>
                <li><a class="button btn-icon btn-primary" href="http://github.com/bedeviere" target="_blank"><i class="fab fa-fw fa-github"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-shade">
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <figure class="image">
              <img src="../assets/design.svg" alt="illustration ux wireframing">
            </figure>
          </div>
          <div class="column">
            <h3>UX/UI & Product Design</h3>
            <p>I create digital experiences that are both intuitive and visually engaging. From research and user flows to polished interfaces, I design products that meet real user needs and business goals.</p>
            <p>My process includes wireframing, prototyping, and usability testing to validate ideas early. I build scalable design systems to keep products consistent and easy to maintain.</p>
            <div class="buttons about-tools">
              <a href="https://www.figma.com/design/" target="_blank" class="button btn-primary-o">
                <i class="fab fa-figma"></i>&nbsp;Figma Design
              </a>
              <a href="https://www.figma.com/figjam/" target="_blank" class="button btn-primary-o">
                <i class="fab fa-figma"></i>&nbsp;Figjam
              </a>
              <a href="https://www.figma.com/draw/" target="_blank" class="button btn-primary-o">
                <i class="fab fa-figma"></i>&nbsp;Figma Draw
              </a>
              <a href="https://www.sketch.com/" target="_blank" class="button btn-primary-o">
                <i class="fab fa-sketch"></i>&nbsp;Sketch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered is-reversed">
          <div class="column">
            <figure class="image">
              <img src="../assets/development.svg" alt="illustration web development">
            </figure>
          </div>
          <div class="column">
            <h3>Front-end & WordPress Development</h3>
            <p>I develop fast, responsive websites with clean, maintainable front-end code. From custom WordPress themes to tailored functionality, I create solutions that fit your brand and business needs.</p>
            <p>My builds prioritize performance, accessibility, and seamless user experience across all devices. I integrate flexible content management, making updates simple and efficient.</p>
            <div class="buttons about-tools">
              <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" class="button btn-primary-o">
                HTML&nbsp;<i class="fab fa-html5"></i>
              </a>
              <a href="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/" target="_blank" class="button btn-primary-o">
                CSS&nbsp;<i class="fab fa-css3-alt"></i>
              </a>
              <a href="https://sass-lang.com/" target="_blank" class="button btn-primary-o">
                <i class="fab fa-sass"></i>
              </a>
              <a href="https://lesscss.org/" target="_blank" class="button btn-primary-o">
                <i class="fab fa-less"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" class="button btn-primary-o">
                <i class="fab fa-js"></i>&nbsp;JavaScript
              </a>
              <a href="https://nodejs.org/en" target="_blank" class="button btn-primary-o">
                Node&nbsp;<i class="fab fa-node-js"></i>
              </a>
              <a href="https://vuejs.org/" target="_blank" class="button btn-primary-o">
                <i class="fab fa-vuejs"></i>&nbsp;Vue.JS
              </a>
              <a href="https://wordpress.org/" target="_blank" class="button btn-primary-o">
                <i class="fab fa-wordpress-simple"></i>&nbsp;WordPress CMS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-shade">
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <figure class="image">
              <img src="../assets/interests.svg" alt="illustration alliance yoru trooper">
            </figure>
          </div>
          <div class="column">
            <h3>What I ❤️</h3>
            <ul class="list-bullet">
              <li><a href="https://pinterest.com/bedeviere/for-the-alliance/" target="_blank">For the Alliance!</a></li>
              <li><a href="https://playvalorant.com/en-us/agents/yoru/" target="_blank">Kiritani Ryo</a></li>
              <li><a href="https://pinterest.com/bedeviere/troopers/" target="_blank">Troopers</a></li>
              <li><a href="http://instagram.com/bimatagunpla" target="_blank">My Gunpla Collection</a></li>
              <li><a href="https://youtu.be/i0K40f-6mLs" target="_blank">Tatsuya Kitani - "Where Our Blue Is"</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <!-- <h4>Life in Photos</h4>
        <vue-instagram v-bind:token="token" v-bind:count="12" class="columns is-multiline is-mobile is-centered">
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
        </vue-instagram> -->
        <h3>About this Website</h3>
        <div class="columns">
          <div class="column">
            <p>This site has been designed and built using <a href="https://bulma.io/" target="_blank">Bulma CSS Framework</a> as the skeleton, with some customizations along the way. It's rendered and transitioned through <a href="https://vuejs.org/" target="_blank">Vue.JS</a>.</p>
            <p>The CSS is written in <a href="https://sass-lang.com/" target="_blank">Sass</a>, with <strong>mobile first approach</strong> and with <a href="https://type-scale.com/" target="_blank">Perfect Fourth scale</a> for a <a href="https://alistapart.com/article/more-meaningful-typography" target="_blank">more meaningful typography</a>.</p>
            <p>The color scheme of this site is heavily inspired by the <a href="https://warcraft.wiki.gg/wiki/Alliance" target="_blank">Alliance symbol</a>.</p>
          </div>
          <div class="column">
            <img class="image-centered" src="../assets/katakana.gif" alt="navy gold square">
          </div>
        </div>
        <div class="link-next">
          <h3><router-link to="/contact">Contact Me&nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link></h3>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TransitionExpand from '../components/TransitionExpand.vue'
// import VueInstagram from 'vue-instagram'

export default {
  name: 'about',
  metaInfo: {
    title: 'About - Bimata Prathama, UI/UX Product Designer'
  },
  components: {
    TransitionExpand
    // VueInstagram
  },
  data() {
    return {
      overviewMore: false,
      overviewMoreCopy: 'More trivial infos about me..'
      // token: '178557724.1677ed0.a09bcf1811c348cabeccf098cff2d079'
    };
  },
  methods: {
    overviewToggle() {
      var vm = this;

      if ( vm.overviewMore == false ) {
        vm.overviewMore = true;
        vm.overviewMoreCopy = 'Less trivial infos about me...';
      } else {
        vm.overviewMore = false;
        vm.overviewMoreCopy = 'More trivial infos about me...';
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

  .about-tools {
    margin-top: 1rem;
    .button {
      font-family: 'Lato', Helvetica, Arial, sans-serif;
      font-weight: 700;
      text-transform: none;
    }
  }
</style>
