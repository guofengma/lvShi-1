<template>
	<div class="infolist">
		
		<!-- 头部 -->
		<div class="list-head">
			<input type="search" class="search" name="" placeholder="请输入关键词搜索">
			<img src="../common/img/search.png" class="search-img">
			<img src="../common/img/cate.png" class="cate-img">
		</div>

		<!-- 分类 -->
		<div class="cate-box">
			<div class="cate-con-box">
				<div class="cate-tit">要闻分类查找</div>
				<div class="cate-con">
					<span class="cate-item" v-for="item in list">{{item.typeName}}</span>
				</div>
			</div>
		</div>

		<!-- 文章列表 -->
		<div class="info-list">

			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>

			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>
			<div class="info-item">
				<div class="info-info-box">
					<div class="info-item-tit">
						离婚房子怎么分？法院公布十大典型案例
					</div>
					<div class="info-other-info">
						<span class="time">2018年10月23日</span>
						<span class="yd">阅读1500</span>
						<span class="dz">
							<img src="../common/img/zan.png" class="dz-icon">
							100
						</span>
					</div>
				</div>
				<div class="img-box">
					<img src="../common/img/wzimg.jpg" class="info-img">
				</div>
			</div>

		</div>

	</div>
</template>
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

	}
</script>