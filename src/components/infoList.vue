<template>
	<div class="infolist" v-bind:class="{ovHide:showCate}">
		
		<!-- 头部 -->
		<div class="list-head">
			<input type="search" class="search" name="" v-model="searchValue" placeholder="请输入关键词搜索">
			<img src="../common/img/search.png" @click="getSearchInfoList" class="search-img">
			<img src="../common/img/cate.png" @click="toggleShow" class="cate-img">
		</div>

		<!-- 分类 -->
		<div class="cate-box" v-if="showCate" @click="toggleShow">
			<div class="cate-con-box">
				<div class="cate-tit">要闻分类查找</div>
				<div class="cate-con">
					<span class="cate-item" v-for="item in cateList" @click="getCateInfoList(item.seqId)">{{item.typeName}}</span>
				</div>
			</div>
		</div>

		<!-- 文章列表 -->
		<div class="info-list">

			<div class="info-item" v-for="item in infoList" @click="toDetail(item.seqId)">
				<div class="info-info-box">
					<div class="info-item-tit">
						{{item.infoTitle}}
					</div>
					<div class="info-other-info">
						<span class="time">{{item.createTime}}</span>
						<span class="yd">阅读{{item.viewNum}}</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							{{item.likeNum}}
						</span>
					</div>
				</div>
				<div class="img-box">
					<!-- <img src="../common/img/wzimg.jpg" class="info-img"> -->
					<img v-bind:src="item.infoImg" class="info-img">
				</div>
			</div>

			<div class="noData" v-if="!infoList.length">暂无数据</div>

		</div>

	</div>
</template>

<script>
	import url from '@/common/js/url.js'
  	import { Toast } from 'mint-ui';
	export default{
		props:{},
		data(){
			return{
				showCate:false,
				searchValue:"",
				cateList:[
					{"typeName":"民事","typeSort":"null","busiType":"ynlawyer","typeAuth":"null","seqId":"35"},
				],
				infoList:[]
			}
		},
		created(){
			this.getCateList()
			this.getInfoList()
		},
		methods:{
			//切换显示 分类
			toggleShow(){
				this.showCate = !this.showCate
				if(this.showCate){
					document.getElementsByTagName("body")[0].className="ovHide";
				}else{
					document.getElementsByTagName("body")[0].className="";
				}
			},
			//获取分类
			getCateList:function(){
				this.axios.get(url.getCateList).then((response) => {
					console.log(response)
					this.cateList = response.data.list;
				})
			},
			//获取信息列表
			getInfoList:function(obj){
				let reqData = {
					busiType:"ynlawyer",
				};
				if(obj && obj.typeId){
					reqData.typeId = obj.typeId
				}
				if(obj && obj.keyword){
					reqData.keyword = obj.keyword
				}
				this.axios.get(url.getInfoList,{params:reqData}).then((response) => {
					console.log("信息列表 -->",response)
					if(response.data.code == 0){
						this.infoList = response.data.list;
					}
				})
			},
			toDetail(seqId){
				console.log(seqId);
				this.$router.push({path:'infoDetail/:seqId',name:"infoDetail",params:{seqId:seqId}})
			},
			// 点击分类
			getCateInfoList:function(seqId){
				console.log(seqId)
				this.getInfoList({'typeId':seqId})
				// this.toggleShow()
			},

			//点击搜索
			getSearchInfoList(){
				if(this.searchValue){
					this.getInfoList({'keyword':this.searchValue})
				}
			},

		}

	}
</script>
<style>
	.infolist{
		position: relative;
	}
	/*头部搜索*/
	.list-head{
		height: 90px;
		display: flex;
		align-items: center;
		padding: 0 20px;
		background: #f0eff4;
	}
	.search{
		flex: 1;
		margin-right: 16px;
		border: 1px solid #dddddd;
		background: #fff;
		height: 60px;
		box-sizing: border-box;
		text-align: center;
		padding-left: 20px;
	}
	.search-img{
		width: 36px;
		margin-right: 16px;
	}
	.cate-img{
		width: 38px;
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
