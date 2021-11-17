<template>
  <div class="player" >
    <video controls
           preload="none"
           :width="width"
           :poster="poster"
           :src="video"
           @error=imageLoadError >
    </video>

  </div>
</template>

<script>

import img from '../assets/alt-image.png'
import video404 from '../assets/video404.mp4'


export default {
  name: "Player",
  props:['poster','video', 'width'],
  data() {
    return {
      videoProblem: video404
    }
  },
  methods: {
    imageLoadError(event) {
      event.target.poster = img
      event.target.src = video404
    },
  }

}


</script>

<style scoped>

</style>