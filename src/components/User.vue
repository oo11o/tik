<template>
  <div class="container">

    <section id="about">
      <div class="row" v-if="idUser.length<1">
        <div class="class">
          Default User: <strong>oleg_sheff</strong>
        </div>
      </div>

      <div class="row" v-else>
        <div class="col">
          <p>
            Name User: <strong>{{ idUser }}</strong>
          </p>
        </div>
      </div>
    </section>

    <section id="msg">
      <div class="row" v-if="loading">
        <div class="col text-danger blink">{{ loading }}</div>
      </div>
    </section>

    <article>
      <div class="row news" v-for="post in user" :key="post">
        <div class="col-lg-4 text-start">
          <p>
            <i class="bi bi-emoji-heart-eyes"></i>️ {{post.diggCount }}
          </p>
          <p>
            <i class="bi bi-chat-square-dots"></i> {{post.commentCount}}
          </p>
          <p>
            <i class="bi bi-share"></i> {{post.shareCount}}
          </p>
          <p>
            <i class="bi bi-play-circle"></i> {{post.playCount}}
          </p>
        </div>


        <div class="col-lg-8">
          <player :poster="post.covers.dynamic" :video="post.videoUrl"></player>
        </div>
      </div>
    </article>
  </div>

</template>

<script>
import axios from "axios";
import jsonNews from '/news-feed.json';

import Player from "./Player";
// import jsonUser from "../../user-feed";

export default {
  name: 'User',
  components: {
     'player': Player
  },
  data() {
    return {
      idUser: this.$route.params.id,
      api: false,
      user: '',
      loading: '',
    }
  },

  methods: {
    async getUserAPI() {

      this.loading = 'Loading'

      const options = {
        method: 'GET',
        url: `https://tiktok33.p.rapidapi.com/trending/feed`,
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
        }
      };

      this.user = await axios.request(options).then(function (response) {
        console.log(response.data)
        return response.status === 200
            ? response.data
            : {error: true, 'msg': `Error API ${response.status}`};

      }).catch(function (error) {
        console.error(error);
      });


      this.loading = ''

    },

    getUserJson() {
      this.user = jsonNews;
    }

  },

  mounted() {
    this.api ? this.getUserAPI() : this.getUserJson();
  },
}

</script>