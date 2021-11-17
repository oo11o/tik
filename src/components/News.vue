<template>
  <div class="container">
    <section id="config">
      <div class="row">
        <div class="col text-success">Select data</div>
      </div>
      <div class="row">
        <div class="col-lg-5 text-end">
          JSON_file: <strong>{{api? 'off' : 'on'}}</strong>
        </div>
        <div class="col-lg-2 text-center" >
          <div class="form-check form-switch">
              <input v-model="api" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
          </div>
        </div>
        <div class="col-lg-5 text-start">
          API: <strong>{{api? 'on' : 'off'}}</strong>
        </div>

      </div>
    </section>

    <section id="msg">
      <div class="row" v-if="loading">
        <div class="col text-danger blink">{{loading}}</div>
      </div>
    </section>

    <article>
      <div class="row news" v-for="item  in news" :key="item">
        <div class="text-start">
          <h2>{{ item.authorMeta.nickName }}</h2>
          <hr>
        </div>
        <div class="col-lg-6 text-start">
          <p><a :href="'user/'+item.authorMeta.name">{{ item.authorMeta.name }}</a></p>
          <p><a :href="'user/'+item.authorMeta.name"><img class="avatar" width="100" :src=item.authorMeta.avatar></a>
          </p>
          <p class="fst-italic">{{ item.text }}</p>
          <p>{{ item.name }}</p>
          <p>
            <i class="bi bi-emoji-heart-eyes"></i>️ {{ item.diggCount }}
            <i class="bi bi-chat-square-dots"></i> {{ item.commentCount }}
          </p>
          <p>
            <span class="hashtag" v-for="tag in item.hashtags" :key="tag"> #{{ tag.name }} </span>
          </p>
        </div>

        <div class="col-lg-6">
          <div class="row">
            <div class="col">
              <img width="250" :src=item.covers.default @error="imageLoadError">
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>

import axios from 'axios'
import jsonNews from '/news-feed.json';


import img from '../assets/alt-image.png'


export default {
  name: 'News',
  data() {
    return {
      news: '',
      error: '',
      api: false,
      limitNews: 30,
      loading: '',
      pageNumber: 0,
    };
  },

  methods: {

    imageLoadError(event) {
      event.target.src = img
    },

    selectData(){
      console.log(this.api)
      this.api ? this.getNewsAPI() : this.getNewsJson();
    },

    async getNewsAPI() {

      this.news =''
      this.loading = 'Loading'

      const options = {
        method: 'GET',
        url: `https://tiktok33.p.rapidapi.com/trending/feed?limit=${this.limitNews}`,
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
        }
      };

      this.news = await axios.request(options).then(function (response) {
        return response.status === 200
               ? response.data
               : {error:true, 'msg': `Error API ${response.status}`};

      }).catch(function (error) {
        console.error(error);
      });

      this.loading = ''

    },

    getNewsJson() {
      this.news = jsonNews;
    }

  },
  
  watch: {
    api(){
      this.selectData()
    }
  },

  mounted() {
    this.selectData()
  },


}
</script>


