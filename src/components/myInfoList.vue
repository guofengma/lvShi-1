<template>
	<div class="infolist">

		<!-- 文章列表 -->
		<div class="info-list">

			<div class="info-item" v-for="item in infoList" @click="toDetail(item.seqId)">
				<div class="info-info-box">
					<div class="info-item-tit">
						{{item.infoTitle}}
					</div>
					<div class="info-other-info">
						<span class="time">{{item.infoPostTime}}</span>
						<span class="yd">阅读{{item.viewNum}}</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							{{item.likeNum}}
						</span>
					</div>
				</div>
				<div class="img-box">
					<!-- <img src="../common/img/wzimg.jpg" class="info-img"> -->
					<img v-bind:src="item.imgPath" class="info-img">
				</div>
			</div>
		
		</div>
		<div class="noData" v-if="infoList.length ==0">暂无数据</div>

	</div>
</template>

<script>
	import url from '@/common/js/url.js'
  	import { Toast } from 'mint-ui';
  	import { Indicator } from 'mint-ui';
	export default{
		props:{},
		data(){
			return{
				infoList:[],
			}
		},
		created(){
			this.getInfoList()
		},
		methods:{
			//我的推文
			getInfoList:function(e){
				Indicator.open();
				let redData = {
					proId:localStorage.getItem('lawyerId'),
					busiType:"lawyer"
				};
				this.axios.get(url.tweetList,{params:redData}).then((response) => {
					Indicator.close();
					console.log("我的推文 -->",response)
					if(response.data.code == 0){
						this.infoList = response.data.list;
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
			//跳转推文详情
			toDetail(seqId){
				console.log(seqId);
				this.$router.push({path:'tweet/:seqId',name:"tweet",params:{seqId:seqId}})
			}
		}
	}
</script>
<style>
	.infolist{
		position: relative;
	}

	/*文章列表*/
	.info-list{

	}
	.info-item{
		padding: 0 20px;
		height: 260px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #999;
	}
	.info-info-box{
		flex: 1;
		margin-right: 20px;
	}
	.info-item-tit{
		color: #000;
		line-height: 64px;
		font-size: 16px;/*no*/
		font-weight: 600;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-bottom: 20px;
	}
	.info-other-info{
		color: #999;
		font-size: 10px;/*no*/
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.time{
		font-size: 12px;/*no*/
	}
	.dz{
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.dz-icon{
		width: 24px;
		/*margin-right: 10px;*/
	}
	.img-box{
		width: 250px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	.info-img{
		max-width: 100%;
		max-height: 100%;
	}

	/*分类*/
	.cate-box{
		position: fixed;
		background: rgba(0,0,0,0.6);
		top: 90px;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
	.cate-con-box{
		background: #fff;
		padding: 20px;
		padding-bottom: 0;
	}
	.cate-tit{
		margin-bottom: 20px;
		color: #666;
		font-size: 14px;/*no*/
	}
	.cate-con{
		display: flex;
		flex-wrap: wrap;
	}
	.cate-item{
		flex: 0 1 20%;
		margin-bottom: 20px;
		display: flex;
		justify-content: center;
	}
</style>	