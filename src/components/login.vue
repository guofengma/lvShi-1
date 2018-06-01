<template>
	<div class="page">
		<!-- 背景头像 -->
		<div class="top">
			<img src="../common/img/bg.png" class="bg" />
			<img src="../common/img/head.png" class="head">
			<div class="name">寒子</div>
		</div>
		<!-- 登录表单 -->
		<div class="form-box">
			<div class="form-controller">
				<img src="../common/img/user.png" class="form-icon">
				<input type="text" placeholder="请输入账号" v-model="proAccount" class="form-input" />
			</div>
			<div class="form-controller mb60">
				<img src="../common/img/pwd.png" alt="" class="form-icon">
				<input type="password" placeholder="请输入密码" v-model="proPwd" class="form-input">
			</div>
			<div class="btn-box">
				<span class="form-btn" @click="login">登录</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import url from '@/common/js/url.js'
	import { Toast } from 'mint-ui';
	export default{
		props:{},
		data(){
			return{
				proAccount:"",
				proPwd:"",
			}
		},
		created(){
			// Toast('提示信息');
		},
		methods:{
			test(){
				alert(666)
			},
			//律师登录
			login(){
				// Indicator.open('加载中...');
				this.$router.back(-1)
				let reqData={
					openId:localStorage.getItem('openId'),
					proAccount:this.proAccount,
					proPwd:this.proPwd,
				};
				if(!reqData.proAccount || reqData.proAccount == '' || !reqData.proPwd || reqData.proPwd == ''){
					console.log("账号或密码错误")
					Toast({
					  message: '账号或密码错误',
					  duration: 2000
					});
					return
				}
				this.axios.get(url.lawyerLogin,{params:reqData}).then((response) => {
					console.log("律师登录 -->",response)
					if(response.data.code == 0){
						localStorage.setItem('lawyerId',response.data.seqId)
						localStorage.setItem('lawyerName',response.data.proName)
						localStorage.setItem('lawyerImg',response.data.proImg)
						window.history.back(-1)
					}else{
						Toast({
						  message: response.data.msg,
						  duration: 2000
						});
					}
				}).catch((response)=>{
					console.log("登录失败 -->",response)
					Toast({
					  message: "登录失败",
					  duration: 2000
					});
				})
			},
		}
	}
</script>
<style>
	/*头部*/
	.top{
		height: 380px;
		position: relative;
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
	/*表单*/
	.form-box{

	}
	.form-controller{
		height: 104px;
		box-sizing: border-box;
		display: flex;
		padding: 0 80px;
		align-items: center;
		border-bottom: 1px solid #eaeaea;
	}
	.form-icon{
		width: 24px;
		height: 32px;
		margin-right: 20px;
	}
	.form-input{
		flex: 1;
		box-sizing: border-box;
		padding-left: 20px;
		height: 90px;
		border:none;
		font-size: 16px;/*no*/
	}
	.btn-box{
		padding: 0 80px;
	}
	.form-btn{
		width: 100%;
		height: 90px;
		background: #cd2525;
		color: #fff;
		border-radius: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		font-size: 16px;/*no*/
	}
</style>
