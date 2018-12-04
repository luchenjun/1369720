<template>
  <div class="wrap">
    <div class="wrap-top">
      <div class="logo"><a href=""></a></div>
      <div class="tophome">
        <i class="icon"></i>
        <input type="text" placeholder="搜索商品，共19914款好物">
      </div>
      <div class="login"><a href="">登录</a></div>
    </div>
    <div class="nav">
      <div class="nav-tap">
      <ul class="ul">
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
     <li>推荐</li>
   </ul>
    </div>
    <div class="toggle"><div class="icon"></div></div>
  </div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>


    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap
    width 100%
    height 100%
    font-size 0.24rem
    position relative
    .wrap-top
      padding-top 0.16rem
      padding-bottom 0.16rem
      padding-right 0.28rem
      padding-left 0.28rem
      display flex
      .logo
        width 1.38rem
        height 0.4rem
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
        background-size cover
        background-position content
        margin-right 0.12rem
        a
          display block
          width 100%
          height 100%
      .tophome
        display flex
        width 4.42rem
        height 0.56rem
        color #666
        flex-grow 1;
        border 1px solid #666
        background rgb(237,237,237)
        border-radius 0.10rem

        i
          display inline-block
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png")
          background-repeat no-repeat
          background-size 100% 100%
          width 0.37rem
          height 0.37rem
          margin-right 0.13rem

      .login
        width 0.74rem
        height 0.4rem
        border 1px solid #b4282d
        margin 0.1rem
        border-radius 0.1rem
        a
          display block
          width 100%
          height 100%
          color #b4282d
          border-radius 0.10rem
          margin-right 0.21rem
          line-height 0.4rem
          text-align center

    .nav
      position absolute
      left 0
      color #333;
      .nav-tap
        height 100%
        ul
          width 14.3rem
          li
            width 0.88rem
            height 0.6rem
            float left
            padding 0.21rem
            line-height 0.6rem
            text-align center


         .toggle
            height 0.8rem
            width 0.6rem
            .icon
              width 0.4rem
              height 0.4rem
              margin-bottom 0
              margin-right 0
              background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png")
              background-position center center
              background-size cover


    .bg
      background-image url("http://yanxuan.nosdn.127.net/d6414ff4f5acb49911d613a98490c869.jpg?quality=85&thumbnail=750x0&imageView")
      height 4.93rem
      background-position center center
      background-size cover
      margin-top 0.80rem










</style>
