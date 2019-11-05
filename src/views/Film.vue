<template>
  <div>
    film
    <div>大轮波</div>
    <ul>
      <router-link to="/film/nowplaying" tag="li" activeClass="szmactive">正在热映</router-link>
      <router-link to="/film/comingsoon" tag="li" activeClass="szmactive">即将上映</router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.szmactive {
  color: red;
  border-bottom: 2px solid red;
}
</style>
