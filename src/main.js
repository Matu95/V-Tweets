import Vue from 'vue'
import axios from 'axios'
import Tweets from './components/tweets.vue'
import NavBar from './components/navbar.vue'
import ChangeTheme from './components/ChangeTheme.vue'
import Config from './components/config.vue'

Vue.component('ChangeTheme', ChangeTheme);
Vue.component('Config', Config);

Vue.component('navbar', NavBar);

Vue.component('tweets', Tweets);

new Vue({
  el: '#app',
  data: {
    showModal: false,
    trends: null
  },
  methods: {
    GetTrends(){
      axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.trends = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    validate(){
      alert(this.trends);
    }
  }
})
