<template>
    <div id="nav" class="container">
      <router-link to="/">News</router-link> |
      <router-link to="/user">User</router-link>
    </div>
  <router-view/>
</template>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.container {
   max-width: 550px;
}

.news {
  margin-bottom: 50px;
}

.avatar:hover {
  opacity: 0.8;
}

.hashtag {
  margin: 2px;
  font-weight: bold;
}

.form-switch {
  padding-left: 3.5em;
}

article {
  margin-top: 40px
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}




#config {
  margin: 20px 0;
}

/*** Player */

.start{
  position:absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  z-index:100;
  background-color: white;
  border-radius: 50%;
  opacity: 0.05;
}

.bi-play{
  padding-left: 5px;
}

/*** Loading */

.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

</style>
