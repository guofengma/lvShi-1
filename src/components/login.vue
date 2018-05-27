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
				<input type="text" placeholder="请输入账号" class="form-input" />
			</div>
			<div class="form-controller mb60">
				<img src="../common/img/pwd.png" alt="" class="form-icon">
				<input type="password" placeholder="请输入密码" class="form-input">
			</div>
			<div class="btn-box">
				<span class="form-btn" @click="test">登录</span>
			</div>
		</div>
	</div>
</template>
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

<script>
	export default{
		props:{},
		data(){
			return{
				list:[
					{"typeName":"民事","typeSort":"null","busiType":"ynlawyer","typeAuth":"null","seqId":"35"},
					{"typeName":"离婚","typeSort":"null","busiType":"ynlawyer","typeAuth":"null","seqId":"36"},
					{"typeName":"车祸","typeSort":"null","busiType":"ynlawyer","typeAuth":"null","seqId":"37"},
					{"typeName":"医疗","typeSort":"null","busiType":"ynlawyer","typeAuth":"null","seqId":"38"},
					{"typeName":"遗产","typeSort":"null","busiType":"ynlawyer","typeAuth":"null","seqId":"39"},
					{"typeName":"事故","typeSort":"null","busiType":"ynlawyer","typeAuth":"null","seqId":"40"}
				],
			}
		},
		methods:{
			test(){
				alert(666)
			}
		}
	}
</script>