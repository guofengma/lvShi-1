<template>
	<div class="page">
		<!-- 背景头像 -->
		<div class="top">
			<img src="../common/img/bg.png" class="bg" />
			<img src="../common/img/head.png" class="head">
			<div class="name">寒子</div>
		</div>
		<!-- 打赏金额 -->
		<div class="reward-box">
			<div class="reward-item">
				<span class="je">5</span>
				<span class="yuan">元</span>
			</div>
			<div class="reward-item">
				<span class="je">10</span>
				<span class="yuan">元</span>
			</div>
			<div class="reward-item">
				<span class="je">20</span>
				<span class="yuan">元</span>
			</div>
			<div class="reward-item">
				<span class="je">50</span>
				<span class="yuan">元</span>
			</div>
			<div class="reward-item">
				<span class="je">100</span>
				<span class="yuan">元</span>
			</div>
			<div class="reward-item">
				<span class="je">200</span>
				<span class="yuan">元</span>
			</div>
		</div>
		<!-- 其他金额 -->
		<div class="other">其他金额</div>

		<!-- 其他金额弹框 -->
		<div class="mask">
			<div class="orther-box">
				<div class="orther-tit-box">
					<span class="orther-tit">其他金额</span>
					<span class="close">×</span>
				</div>
				<div class="orther-con">
					<div class="je-input-box">
						<span class="orther-input-label">其他金额(元)</span>
						<input type="number" name="" class="je-input" placeholder="请输入金额">
					</div>
					<div class="btn zs-btn">赞赏</div>
				</div>
			</div>
		</div>

		<!-- 赞赏是为表示鼓励而对文章内容的无偿赠与 -->
		<div class="tips">赞赏是为表示鼓励而对文章内容的无偿赠与</div>

	</div>
</template>
<style>
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

<script>
	export default{
		props:{},
		data(){
			return{
				
			}
		},
		methods:{
			test(){
				alert(666)
			}
		}
	}
</script>