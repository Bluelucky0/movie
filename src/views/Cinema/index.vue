<template>
  <div id="main">
      <Header title="宅宅影院"/>
        <div id="content">
              <div class="cinema_menu">
                  <router-link tag="div" to="/cinema/wholecity" class="city_switch">
                    <span>全城</span>
                    <i class="iconfont icon-lower-triangle"></i>
                  </router-link>
                  <router-link tag="div" to="/cinema/brand" class="brand_swtich">
                    <span>品牌</span>          
                    <i class="iconfont icon-lower-triangle"></i>
                  </router-link>
                  <router-link tag="div" to="/cinema/characteristic" class="feature_switch">
                    <span>特色 </span>
                    <i class="iconfont icon-lower-triangle"></i>
                  </router-link>
              </div>
            <keep-alive>
                <router-view />
            </keep-alive>
         </div>
      <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name:'Cinema',
  components:{
    Header,
    TabBar
  }
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
.cinema_menu .active{ color: #ef4238;}
.cinema_menu .router-link-active{ color: #ef4238;}
</style>