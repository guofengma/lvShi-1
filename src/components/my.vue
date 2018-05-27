<template>
	<div class="page">
		<!-- 背景头像 -->
		<div class="top">
			<img src="../common/img/bg.png" class="bg" />
			<img src="../common/img/head.png" class="head">
			<!-- <div class="name">寒子</div> -->
		</div>
		<!-- 我的 -->
		<div class="line-box">
			<img src="../common/img/admin.png" class="line-icon">
			<span class="line-name">律师信息</span>
		</div>
		<div class="line-box">
			<img src="../common/img/wz-01.png" class="line-icon">
			<span class="line-name">我的推文</span>
		</div>
		<div class="line-box">
			<img src="../common/img/phone.png" class="line-icon">
			<span class="line-name">联系电话</span>
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
	/*我的*/
	.line-box{
		height: 98px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		display: flex;
		padding: 0 30px;
		align-items: center;
	}
	.line-icon{
		width: 64px;
		height: 64px;
		margin-right: 16px;
	}
	.line-name{
		flex: 1;
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