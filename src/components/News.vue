<template>
  <div class="container">
    <div class="row">
      <div class="form-check form-switch">
        <div class="col-lg-2">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
          <label class="form-check-label" for="flexSwitchCheckDefault">Включить API</label>
        </div>
      </div>
    </div>
    <article>
     <div class="row news" v-for="item  in news" :key="item">
       <div class="text-start">
         <h2>{{item.authorMeta.nickName}}</h2>
         <hr>
       </div>
       <div class="col-lg-6 text-start">
         <p><a :href="'user/'+item.authorMeta.name">{{item.authorMeta.name}}</a></p>
         <p><a :href="'user/'+item.authorMeta.name"><img class="avatar" width="100" :src=item.authorMeta.avatar></a></p>
         <p class="fst-italic">{{item.text}}</p>
         <p>{{item.name}}</p>
         <p>
           <i class="bi bi-emoji-heart-eyes"></i>️ {{item.diggCount}}
           <i class="bi bi-chat-square-dots"></i> {{item.commentCount}}
         </p>
         <p>
           <span class="hashtag" v-for="tag in item.hashtags" :key="tag"> #{{tag.name}} </span>
         </p>
       </div>

       <div class="col-lg-6">
         <div class="row">
           <div class="col">
             <img width="250" :src=item.covers.default>
           </div>
         </div>
       </div>
     </div>
    </article>
  </div>
</template>

<script>
  import axios from 'axios';
  import jsonNews from '/news-feed.json';

  export default {
    name: 'News',
    data() {
      return {
        news: '',
        api: false,
      };
    },

    mounted() {
      this.api ? this.getNewsApi() : this.getNewsJson();
    },

    methods: {
      async getNewsAPI() {
        this.news = await
                axios.get('/tik.json').then(response => (this.info = response));
      },
      getNewsJson() {
        this.news = jsonNews
      }
    }
  }
</script>
<style>
  .container{
    max-width: 550px;
  }
  .news{
    margin-bottom: 50px;
  }
  .avatar:hover{
    opacity: 0.8;
  }
  .hashtag{
    margin: 2px;
    font-weight: bold;
  }
  article{
    margin-top:40px
  }
</style>
