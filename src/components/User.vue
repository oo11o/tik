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

      <div class="row" v-if="avatar">
        <div class="col pt-5">
          <figure>
            <img class='avatar' :src=avatar>
            <figcaption>First avatar from Get Trending Feed</figcaption>
          </figure>
        </div>
      </div>

    </section>

    <section id="msg">
      <div class="row" v-if="loading">
        <div class="col text-danger blink"><h2>{{ loading }}</h2></div>
      </div>
    </section>

    <article>
      <div class="row news " v-for="post in user" :key="post">
        <hr/>
        <div class="col-lg-4 col-sm-6 lg-text-start">
          <p>
            <strong><i class="bi bi-play-circle"></i> {{post.playCount}}</strong>
          </p>
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
            {{post.text}}
          </p>
        </div>


        <div class="col-lg-8 col-sm-6">
          <player :poster="post.covers.default" :video="post.videoUrl" :width="300"></player>
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
      api: true,
      avatar: '',
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

      this.avatar  = this.user[0].authorMeta.avatar
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