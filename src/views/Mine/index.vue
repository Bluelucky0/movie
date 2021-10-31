<template>
  <div id="main">
      <Header title="我的电影"/>
      <div id="content">
          <router-view />
      </div>
      <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name:'Mine',
  components:{
    Header,
    TabBar
  }
}
</script>

<style>

</style>