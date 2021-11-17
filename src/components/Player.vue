<template>
<!--  <video ref="videoRef"-->
<!--         src="https://v39-eu.tiktokcdn.com/b97056bc4a18cd2e846398221c318db5/619566bb/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211117143145010190191047310008BC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=" id="video-container"-->
<!--         width="300"-->
<!--         controls>-->
<!--  </video>-->

  <div class="player" >
<!--    <div class="start">-->
<!--       <i class="bi bi-play" style=" font-size: 40px"></i>-->
<!--    </div>-->
    <video width="300" controls :poster="poster" preload="none" @error=imageLoadError>
      <source :src="video">
    </video>

  </div>
</template>

<script>

import img from '../assets/alt-image.png'


export default {
  name: "Player",
  props:['poster','video'],
  data() {
    return {

    }
  },
  methods: {
    imageLoadError(event) {
      event.target.poster = img
    },
  }

}


</script>

<style scoped>

</style>