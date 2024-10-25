<template>
  <main class="contact">
    <section class="section">
      <div class="container">
        <h1>Contact</h1>
        <div class="contact-greeting">
          <p>
            Have a cool project in mind, and think I can help you? Feel free to email me at <a href="mailto:bimata.prathama@gmail.com">bimata.prathama@gmail.com</a>
          </p>
        </div>
        <div class="columns">
          <div class="column contact-location">
            <h3><i class="fas fa-map-pin"></i> Jakarta, ID</h3>
          </div>
          <div class="column contact-social">
            <ul class="list-social">
              <li><a class="button btn-icon btn-primary" href="http://dribbble.com/bedeviere" target="_blank"><i class="fab fa-fw fa-dribbble"></i></a></li>
              <li><a class="button btn-icon btn-primary" href="http://linkedin.com/in/bedeviere" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a></li>
              <li><a class="button btn-icon btn-primary" href="http://instagram.com/bedeviere" target="_blank"><i class="fab fa-fw fa-instagram"></i></a></li>
              <li><a class="button btn-icon btn-primary" href="http://github.com/bedeviere" target="_blank"><i class="fab fa-fw fa-github"></i></a></li>
            </ul>
          </div>
        </div>
        <form class="contact-form" method="post" @submit.prevent="addMessage">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label" for="contactName">Name*</label>
                <div class="control">
                  <input id="contactName" class="input is-medium" type="text" v-model="contactData.name" v-bind:class="{ 'is-danger': contactError.name.length != 0 }" v-bind:readonly="contactProcess">
                </div>
                <p class="help is-danger" v-if="contactError.name.length != 0">{{ contactError.name }}</p>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label" for="contactEmail">Email*</label>
                <div class="control">
                  <input id="contactEmail" class="input is-medium" type="text" v-model="contactData.email" v-bind:class="{ 'is-danger': contactError.email.length != 0 }" v-bind:readonly="contactProcess">
                </div>
                <p class="help is-danger" v-if="contactError.email.length != 0">{{ contactError.email }}</p>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label" for="contactPhone">Phone (Optional)</label>
                <div class="control">
                  <input id="contactPhone" class="input is-medium" type="text" v-model="contactData.phone" v-bind:readonly="contactProcess">
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field contact-message">
                <label class="label" for="contactMessage">Message*</label>
                <div class="control">
                  <textarea id="contactMessage" class="textarea has-fixed-size is-medium" rows="4" v-model="contactData.message" v-bind:class="{ 'is-danger': contactError.message.length != 0 }" v-bind:readonly="contactProcess"></textarea>
                </div>
                <p class="help is-danger" v-if="contactError.message.length != 0">{{ contactError.message }}</p>
              </div>
            </div>
          </div>
          <div class="buttons contact-buttons">
            <button class="button btn-primary" type="submit" v-bind:disabled="contactProcess" v-html="contactButton"></button>
          </div>
          <p class="help is-success contact-success">{{ contactSuccess }}</p>
        </form>
      </div>
      <div class="error">{{ contactError.catch }}</div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'contact',
  metaInfo: {
    title: 'Contact - Bimata Prathama, UX/UI Designer'
  },
  data() {
    return {
      contactData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      contactError : {
        name: '',
        email: '',
        message: '',
        catch: ''
      },
      contactProcess: false,
      contactButton: 'Send Message',
      contactSuccess: '',
      contactResponse: ''
    };
  },
  methods: {
    addMessage: function() {
      var vm = this;
      var apiURL = process.env.VUE_APP_ROOT_API;

      this.contactError.name = '';
      this.contactError.email = '';
      this.contactError.message = '';
      this.contactSuccess = '';

      if (this.contactData.name == '') {
        this.contactError.name = 'Please enter your name';
      }

      if (this.contactData.email == '') {
        this.contactError.email = 'Please enter your email address';
      } else if (!this.validEmail(this.contactData.email)) {
        this.contactError.email = 'Please enter a valid email address';
      }

      if (this.contactData.message == '') {
        this.contactError.message = 'Please enter your message';
      }

      if (this.contactError.name == '' && this.contactError.email == '' && this.contactError.message == '') {
        this.contactProcess = true;
        this.contactButton = '<i class="fas fa-cog fa-spin"></i>';
        axios.post(apiURL + '/addMessage', vm.contactData)
          .then(function(res) {
            vm.contactData.name = '';
            vm.contactData.email = '';
            vm.contactData.phone = '';
            vm.contactData.message = '';
            vm.contactProcess = false;
            vm.contactButton = 'Send Message';
            vm.contactSuccess = 'Success! Your message is sent!';
            vm.contactResponse = res;
          })
          .catch(function(err) {
            vm.contactError.catch = err.message;
          });
      }
    },
    validEmail: function (email) {
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
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
      width: 141px;
    }
  }

  .contact-success {
    text-align: center;
    font-size: 1.25em;
  }

  @media only screen and (min-width: 768px) {
    .contact-location {
      line-height: 60px;
    }
    .contact-social {
      text-align: right;
    }
    .contact-buttons {
      .button {
        width: 200px;
      }
    }
  }
</style>