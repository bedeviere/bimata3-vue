<template>
  <section class="about section">
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
            <p>By day, I code and design either for a living or to learn and experiment new technologies. By night, you might find me adventuring around <a href="https://worldofwarcraft.com/en-gb/character/ravenholdt/Bedeviere" target="_blank">Azeroth</a>, slaying demons and stuff.</p>
            <br>
            <!-- <p>I'm also an addict for toy figures and gunpla. Sometimes, I take pictures of them while they pretend to be humans, doing normal, human things.</p> -->
            <h4>Social</h4>
            <ul class="list-social">
              <li><a class="button btn-default" href="http://github.com/bedeviere" target="_blank"><i class="fab fa-github"></i></a></li>
              <li><a class="button btn-default" href="http://codepen.com/bedeviere" target="_blank"><i class="fab fa-codepen"></i></a></li>
              <li><a class="button btn-default" href="http://linkedin.com/in/bedeviere" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
              <li><a class="button btn-default" href="http://instagram.com/bedeviere" target="_blank"><i class="fab fa-instagram"></i></a></li>
            </ul>
            <br>
            <h4>Also Known As</h4>
            <p>Tama Harianto, Bedeviere</p>
            <br>
            <h4>Additional Links</h4>
            <p><a href="http://storywork.bimataprathama.com/" target="_blank">My Storywork</a></p>
            <p><a href="http://instagram.com/bimatagunpla" target="_blank">My Gunpla Collection</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss">
  ul.list-social {
    > li {
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
      &:first-child {
        margin-left: -2px;
      }
      &:last-child {
        margin-right: -2px;
      }
    }
    .button {
      padding: 0;
      width: 60px;
      height: 60px;
      line-height: 56px;
      border-radius: 100%;
      font-size: 28px;
      font-weight: 400;
    }
  }
</style>
