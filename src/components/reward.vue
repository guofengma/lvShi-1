<template>
	<div class="page">
		<!-- 背景头像 -->
		<div class="top">
			<img src="../common/img/bg.png" class="bg" />
			<img v-bind:src="head" class="head">
			<div class="name">{{name}}</div>
		</div>
		<!-- 打赏金额 -->
		<div class="reward-box">

			<div class="reward-item" v-for="item in dsList" @click="zanShang(item.num)">
				<span class="je">{{item.num}}</span>
				<span class="yuan">元</span>
			</div>
			
		</div>
		<!-- 其他金额 -->
		<div class="other" @click="showModelfn">其他金额</div>

		<!-- 其他金额弹框 -->
		<div class="mask" v-if="showModel">
			<div class="orther-box">
				<div class="orther-tit-box">
					<span class="orther-tit">其他金额</span>
					<span class="close" @click="closeModelFn">×</span>
				</div>
				<div class="orther-con">
					<div class="je-input-box">
						<span class="orther-input-label">其他金额(元)</span>
						<input type="number" name="" v-model="otherVal" class="je-input" placeholder="请输入金额">
					</div>
					<div class="btn zs-btn" @click="zanShangOther">赞赏</div>
				</div>
			</div>
		</div>

		<!-- 赞赏是为表示鼓励而对文章内容的无偿赠与 -->
		<div class="tips" v-if="target == 'info'">赞赏是为表示鼓励而对文章内容的无偿赠与</div>
		<div class="tips" v-if="target == 'lawyer'">赞赏是为表示鼓励而对律师的无偿赠与</div>

	</div>
</template>


<script>
	import qs from 'qs';
	import url from '@/common/js/url.js'
  	import { Toast } from 'mint-ui';
  	import { Indicator } from 'mint-ui';
	export default{
		props:{},
		data(){
			return{
				otherVal:'',
				head:require('../common/img/head.jpg'),
				name:"",
				target:"",	//info 打赏文章,   lawyer  打赏律师
				seqId:"",	//打赏文章时传递 文章id，打赏律师时传递律师id
				showModel:false,
				dsList:[
					{num:5,},{num:10,},{num:20,},{num:50,},{num:100,},{num:200,}
				]
			}
		},
		created(){
			console.log("reward params -->",this.$route.params)
			let target = this.$route.params.target
			let seqId = this.$route.params.seqId
			this.target = target
			this.seqId = seqId
			if(target == 'info'){
				this.name = '知了法律咨询'
			}else{
				this.name = localStorage.getItem('lawyerName')
				this.head = localStorage.getItem('lawyerImg')
			}
		},
		methods:{
			test(){
				alert(666)
			},
			//显示其他金额弹框
			showModelfn(){
				this.showModel = true;
			},
			closeModelFn(){
				this.showModel = false;
			},
			//赞赏 判断 文章赞赏还是律师赞赏
			zanShang(num){
				let target = this.target
				if(target == 'info'){
					this.artZanShang(num)
				}else if(target == 'lawyer'){
					this.lawyerZanShang(num)
				}
			},
			//弹框中的赞赏
			zanShangOther(){
				let otherVal = this.otherVal;
				let target = this.target
				otherVal = parseFloat(otherVal)
				if(typeof otherVal == 'number' && otherVal > 0){
					if(target == 'info'){
						this.artZanShang(otherVal)
					}else if(target == 'lawyer'){
						this.lawyerZanShang(otherVal)
					}
				}else{
					Toast({
					  message: "请输入正确的数值",
					  duration: 2000
					});
				}
			},

			//文章赞赏
			artZanShang(num){
				this.wechatapiJsSign(this._artZanShang(datas,num))
			},

			// 文章赞赏
			_artZanShang(num){
				Indicator.open();
				let redData = {
					rewardMoney:num,
					infoId:this.seqId,
					openId:localStorage.getItem('openId'),
				};
				this.axios.post(url.artZanShang,qs.stringify(redData)).then((response) => {
					Indicator.close();
					console.log("文章赞赏 -->",response)
					if(response.data.code == 0){
						this.wxParamMap(datas,response.data.paramMap)
					}else{
						Toast({
						  message: response.data.msg,
						  duration: 2000
						});
					}
				}).catch(()=>{
					Indicator.close();
					Toast({
					  message: "获取失败",
					  duration: 2000
					});
				})
			},

			//律师赞赏
			lawyerZanShang(num){
				this.wechatapiJsSign(this._lawyerZanShang(datas,num))
			},

			// 律师赞赏
			_lawyerZanShang(datas,num){
				let redData = {
					orderMoney:num,
					replyProId:this.seqId,
					openId:localStorage.getItem('openId'),
					busiType:2,
				};
				this.axios.post(url.lawyerZanShang,qs.stringify(redData)).then((response) => {
					Indicator.close();
					console.log("律师赞赏 -->",response)
					if(response.data.code == 0){
						this.wxParamMap(datas,response.data.paramMap)
					}else{
						Toast({
						  message: response.data.msg,
						  duration: 2000
						});
					}
				}).catch(()=>{
					Indicator.close();
					Toast({
					  message: "获取失败",
					  duration: 2000
					});
				})
			},
			// 请求支付签名
			wechatapiJsSign (cb) {
		      Indicator.open();
		      let urls = location.href.split('#')[0]
		      // let splist = location.href.split('#')[0]
		      // let urls = splist + '?openId=' + url.openId.count
		      // alert(urls)
		      this.axios.post(url.wechatapiJsSign, qs.stringify({
		        url: urls
		      }))
		        .then(response => {
		          Indicator.close();
		          console.log(response.data)
		          if (parseInt(response.data.code) === 0) {
		            cb(response.data)
		          } else {
		            Toast({
					  message: response.data.msg,
					  duration: 2000
					});
		          }
		        })
		        .catch(error => {
		          Indicator.close();
		          console.log(error)
		          //    alert('网络错误，不能访问');
		          // this.$Spin.hide()
		          // this.$Message.error('网络错误，不能访问')
		          Toast({
					  message: '网络错误，不能访问',
					  duration: 2000
				  });
		        })
		    },

		    wxParamMap (data, datas) {	//data  签名参数  datas 后台返回的支付参数
				let that = this
				wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				// debug : true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: data.appId, // 必填，公众号的唯一标识
				timestamp: data.timestamp, // 必填，生成签名的时间戳
				nonceStr: data.nonceStr, // 必填，生成签名的随机串
				signature: data.signature, // 必填，签名，见附录1
				jsApiList: ['chooseWXPay', 'checkJsApi', 'scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				})
				wx.ready(function () {
					wx.chooseWXPay({
						timestamp: datas.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
						nonceStr: datas.nonceStr, // 支付签名随机串，不长于 32 位
						package: datas.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
						signType: datas.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
						paySign: datas.paySign, // 支付签名
						success: function (res) {
							// 支付成功后的回调函数
							window.history.back(-1)
							// this.$Message.success('充值成功')
							Toast({
							  message: '充值成功',
							  duration: 2000
						  	});
						},
						fail: function (errors) {
							// that.$Message.error(errors)
							Toast({
							  message: errors,
							  duration: 2000
						  	});
						}
					})
				})
				// this.$Spin.hide()
			},
		}
	}
</script>

<style scoped>
	/*头部*/
	.top{
		height: 400px;
		position: relative;
		margin-bottom: 40px;
	}
	.bg{
		width: 100%;
	}
	.head{
		width: 168px;
		height: 168px;
		border-radius: 50%;
		border: 2px solid #fff;
		box-sizing: border-box;
		position: absolute;
		left: 292px;
		top: 152px;
	}
	.name{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 10px;
		text-align: center;
		font-size: 16px;/*no*/
	}
	/*打赏金额*/
	.reward-box{
		display: flex;
		flex-wrap: wrap;
		padding: 20px 50px;
		justify-content: space-between;
	}
	.reward-item{
		width: 205px;
		height: 125px;
		border: 5px solid #cd2525;
		border-radius: 10px;
		color: #cd2525;
		box-sizing: border-box;
		margin-bottom: 45px;
		display: flex;
		padding-bottom: 20px;
		align-items: flex-end;
		justify-content: center;
	}
	.je{
		font-size: 30px;/*no*/
	}
	.yuan{
		font-size: 14px;/*no*/
		line-height: 2
	}
	.other{
		text-align: center;
		color: #0068b7;
	}
	.tips{
		color: #999999;
		position: absolute;
		bottom: 30px;
		text-align: center;
		left: 0;
		right: 0;
		z-index: 0;
	}
	/*其他金额*/
	.mask{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.7);
		z-index: 1;
	}
	.orther-box{
		position: absolute;
		bottom: 350px;
		left: 50px;
		right: 50px;
		background: #fff;
		border-radius: 5px;
	}
	.orther-tit-box{
		height: 120px;
		box-sizing: border-box;
		border-bottom: 1px solid #e4e7e6;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		font-size: 20px;/*no*/
	}
	.orther-tit{
	}
	.close{
		position: absolute;
		left: 60px;
		top: 30px;
		font-size: 22px;/*no*/
		color: #c7caca;
	}
	.orther-con{
		padding: 40px;
	}
	.je-input-box{
		height: 100px;
		border: 1px solid #e8e8e8;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 30px;
		margin-bottom: 40px;
	}
	.orther-input-label{
		margin-right: 20px;
		/*width: 260px;*/
		white-space:nowrap;
	}
	.je-input{
		height: 80px;
		padding-left: 20px;
		flex: 1;
		border: none;
	}
	.zs-btn{
		height: 88px;
		background: #02be00;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 16px;/*no*/
		border-radius: 5px;
	}
</style>