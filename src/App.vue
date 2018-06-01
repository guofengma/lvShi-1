<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import url from '@/common/js/url.js'
  import { Toast } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  export default {
    name: 'App',
    created () {
      // this.wechatapiWxLogin()
    },
    methods: {
      wechatapiWxLogin () {
        Indicator.open();
        let openId = localStorage.getItem('openId')
        if (openId === '' || openId === undefined || openId === null) {
          openId = this.getopenid('openId')
          if (openId === '' || openId === undefined || openId === null) {
            window.location.href = url.wechatapiWxLogin
          } else {
            localStorage.setItem('openId', openId)
          }
        } else {
          localStorage.setItem('openId', openId)
        }
        // this.$Spin.hide()
        Indicator.close();
      },
      getopenid (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) {
          return unescape(r[2])
        }
        return null
      }
    },
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
