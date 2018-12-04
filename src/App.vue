<template>
  <div id="app">
    <router-view></router-view>
    <begin></begin>
  </div>
</template>

<script>
  import begin from "./components/begin/begin"
export default {
  name: 'App',
  components:{
    begin
  }
}
</script>

<style>

</style>
