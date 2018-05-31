<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import url from '@/common/js/url.js'
  import { Toast } from 'mint-ui';
  export default {
    name: 'App'
  }
</script>
<style>
/*@import '/common/css/reset.css'*/
.none{
  display: none;
}

.mb60{
  margin-bottom: 60px;
}
.ovHide{
	overflow: hidden;
}

.noData{
  height:100px;
  display:flex;
  align-items: center;
  justify-content: center;
}
</style>
