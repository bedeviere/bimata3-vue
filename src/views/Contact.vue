<template>
  <section class="contact section">
    <div class="container">
      <h1>Contact</h1>
      <div class="contact-greeting">
        <p>
          Have a cool project in mind, and think I can help you?<br>
          Feel free to e-mail me at <a href="mailto:bimata.prathama@gmail.com">bimata.prathama@gmail.com</a>
        </p>
      </div>
      <div class="columns">
        <div class="column contact-location">
          <h3><i class="fas fa-map-pin"></i> Jakarta, ID</h3>
        </div>
        <div class="column contact-social">
          <ul class="list-social">
            <li><a class="button btn-default" href="http://twitter.com/bedeviere" target="_blank"><i class="fab fa-fw fa-twitter"></i></a></li>
            <li><a class="button btn-default" href="http://linkedin.com/in/bedeviere" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a></li>
            <li><a class="button btn-default" href="http://github.com/bedeviere" target="_blank"><i class="fab fa-fw fa-github"></i></a></li>
            <li><a class="button btn-default" href="http://codepen.com/bedeviere" target="_blank"><i class="fab fa-fw fa-codepen"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="columns contact-form">
        <div class="column">
          <div class="field">
            <div class="control">
              <input class="input is-medium" type="text" placeholder="Name">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-medium" type="text" placeholder="E-mail">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-medium" type="text" placeholder="Phone (optional)">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field contact-message">
            <div class="control">
              <textarea class="textarea has-fixed-size is-medium" placeholder="Message" rows="4"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons contact-buttons">
        <button class="button btn-default">Send Message</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style lang="scss">
  .contact-greeting {
    margin-bottom: 1.5em;
  }

  .contact-buttons {
    .button {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media only screen and (min-width: 768px) {
    .contact-location {
      line-height: 60px;
    }
    .contact-social {
      text-align: right;
    }

    .contact-message {
      height: 100%;
      .control {
        height: 100%;
        .textarea {
          height: 100%;
        }
      }
    }
  }
</style>