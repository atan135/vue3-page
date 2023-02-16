<script setup>
import Header from './layout/Header.vue';
import LeftPart from './layout/LeftPart.vue';
import MainContent from './layout/MainContent.vue';
</script>

<template>
  <div class="header">
    <van-row justify="center" gutter="50">
      <van-col span="3"></van-col>
      <van-col span="18">
        <Header></Header>
      </van-col>
      <van-col span="3"></van-col>
    </van-row>
  </div>

  <div class="main">
    <van-row justify="start">
      <van-col class="leftpart" span="6">
        <LeftPart></LeftPart>
      </van-col>
      <van-col class="maincontent" span="18">
        <MainContent></MainContent>
      </van-col>
    </van-row>
  </div>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.header{
  width: 100%;
  height: 100px;
  background: lightblue;
}
.maincontent{
  background-color: lightcyan;
}
.leftpart{
  min-height: 800px;
  background-color: lightpink;
}
.main{
  width: 100%;
  min-height: 800px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
