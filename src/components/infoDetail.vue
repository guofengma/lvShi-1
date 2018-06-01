<template>
	<div class="page">
		<div class="article-box">
			<div class="atr-tit">{{infoDetail.infoTitle}}</div>
			<div class="art-info">
				<span class="time">{{infoDetail.postDate}}</span>
				<span class="author">知了法律咨询</span>
			</div>
			<div class="art-con">
				<div id="view_content" class="wenzhanag" v-html="infoDetail.infoContentStr">
                
                </div>
			</div>
		</div>
		<!-- 评价 -->
		<div class="comment-box" v-if="showComt">
			<div class="layer-tit">律师观点</div>
			<textarea class="comment-input" placeholder="请输入您的观点" v-model="replyContentStr"></textarea>
			<div class="btnm cmt-btn" @click="saveComment">立即发布</div>
		</div>

		<!-- 点赏文章 -->
		<div class="art-shang">
			<img src="../common/img/shang.png" class="shang-img" @click="rewardInfo(infoDetail.seqId)">
			<span class="shang-name">点赏文章</span>
		</div>
		<!-- 二维码 -->
		<div class="code-box">
			<div class="code-item">
				<img src="../common/img/gzh.jpg" class="code-img">
				<span class="code-name">扫描关注“律师公众号” 您专业的律师顾问</span>
			</div>、
			<div class="code-item">
				<img src="../common/img/xcx.jpg" class="code-img">
				<span class="code-name">扫描关注“律师小程序” 您专业的律师顾问</span>
			</div>
		</div>

		<!-- 阅 赞 评-->
		<div class="handle-box">
			<span class="yue">阅读 {{infoDetail.viewNum}}</span>
			<span class="zan" @click="zan">
				<img src="../common/img/zan.png" class="zan-icon">
				{{infoDetail.likeNum}}
			</span>
			<span class="ping" @click="comment">
				<img src="../common/img/bz.png" class="bz-icon">
				评论
			</span>
		</div>

	</div>
</template>

<script>
	import qs from 'qs'
	import url from '@/common/js/url.js'
  	import { Toast } from 'mint-ui';
  	import { Indicator } from 'mint-ui';
	export default{
		props:{},
		data(){
			return{
				seqId:"",
				openId:"",
				infoDetail:{
					infoTitle:"离婚房子怎么分,离婚房子怎么分，离婚房子怎么分离婚房子怎么分离婚房子怎么分，离婚房子怎么分",
					postDate:"2018-05-04",
					viewNum:1500,
					replyNum:3,
					likeNum:3,
					infoContentStr:"",
					isComments:"",	//是否能评论
					isLike:0,	//是否已点赞
				},
				showComt:false,
				replyContentStr:"",
			}
		},
		created(){
			console.log(this.$route.params)
			let seqId = this.$route.params.seqId
			this.seqId = seqId;
			let openId = localStorage.getItem('openId')
			this.openId = openId;
			this.getInfoDetail(seqId);
		},
		methods:{
			//获取文章详情
			getInfoDetail(seqId){
				Indicator.open();
				let redData = {
					busiType:"ynlawyer",
					seqId:seqId,
					openId:localStorage.getItem('openId'),
				};
				let lawyerId = localStorage.getItem('lawyerId')
				if(lawyerId){
					redData.proId = lawyerId
				}
				this.axios.get(url.getInfoDetail,{params:redData}).then((response) => {
					Indicator.close();
					console.log("获取文章详情 -->",response)
					if(response.data.code == 0){
						this.infoDetail = response.data.infoDetail;
					}else{
						Toast({
						  message: response.data.msg,
						  duration: 2000
						});
					}
				}).catch(()=>{
					Toast({
					  message: "获取失败",
					  duration: 2000
					});
					Indicator.close();
				})
			},
			//点赏文章
			rewardInfo(seqId){
				console.log(seqId);
				this.$router.push({path:'reward/:seqId/:target',name:"reward",params:{seqId:seqId,target:"info"}})
			},
			//文章点赞
			zan(){
				Indicator.open();
				let redData = {
					busiType:"ynlawyer",
					seqId:this.seqId,
					openId:localStorage.getItem('openId'),
				};
				this.axios.get(url.actZan,{params:redData}).then((response) => {
					Indicator.close();
					console.log("文章点赞 -->",response)
					let code = response.data.code;
					if(code == 0){
						console.log("点赞成功")
						Toast({
						  message: "点赞成功",
						  duration: 2000
						});
					}else{
						console.log("点赞 fail-->",response.data.msg)
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
			// 点击 评论 显示评论框或跳转登录
			comment(){
				console.log(2)
				let lawyerId = localStorage.getItem('lawyerId')
				let isComments = this.infoDetail.isComments
				if(!lawyerId){
					Toast({
					  message: "请先登录",
					  duration: 2000
					});
					setTimeout(()=>{
						this.$router.push({name:"login"})
					},2000)
					return
				}
				if(isComments == 0){
					Toast({
					  message: "暂无权限",
					  duration: 2000
					});
					return
				}
				if(isComments == 1){
					this.showComt = true
				}
			},
			//保存评论
			saveComment(){
				Indicator.open();
				let replyContentStr = this.replyContentStr
				if(replyContentStr.trim() == '' && replyContentStr == undefined){
					Toast({
					  message: "内容不能为空",
					  duration: 2000
					});
					return
				}
				let redData = {
					infoId:this.seqId,
					openId:localStorage.getItem('openId'),
					proId:localStorage.getItem('lawyerId'),
					replyContentStr:replyContentStr,
				};
				this.axios.post(url.saveReply,qs.stringify(redData)).then((response) => {
					Indicator.close();
					console.log("保存评论 -->",response)
					if(response.data.code == 0){
						Toast({
						  message: "评论成功",
						  duration: 2000
						});
						setTimeout(()=>{
							this.$router.push({path:'tweet/:seqId',name:"tweet",params:{seqId:response.data.seqId}})
						},2000)
					}else{
						Toast({
						  message:response.data.msg,
						  duration: 2000
						});
					}
				}).catch(()=>{
					Indicator.close();
					Toast({
					  message:"评论失败",
					  duration: 2000
					});
				})

			},
		}
	}
</script>
<style scoped>
	/* 文章 */
	.article-box{
		padding: 20px 30px;
	}
	.atr-tit{
		font-size: 16px;/*no*/
		line-height: 60px;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-bottom: 50px;
		font-weight: 600;
	}
	.art-info{
		margin-bottom: 40px;
	}
	.time{
		color: #999;
		margin-right: 20px;
	}
	.author{
		color: #3679c5;
	}
	.art-con{

	}
	.art-con img{
		max-width: 100%;
	}
	/* 点赏文章 */
	.art-shang{
		display: flex;
		margin: 30px;
		flex-flow: column;
		align-items: center;
		border-bottom: 3px solid #eeeeee;
		padding-bottom: 30px;
	}
	.shang-img{
		width: 110px;
		height: 110px;
		margin-bottom: 18px;
	}
	/*二维码*/
	.code-box{
		display: flex;
		padding: 0 30px;
		justify-content: space-around;
		margin-bottom: 50px;
 	}
	.code-item{
		width: 250px;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}
	.code-img{
		width: 190px;
		height: 190px;
		margin-bottom: 16px;
	}
	.code-name{
		line-height: 28px;
	}

	/*阅 赞 评*/
	.handle-box{
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		padding: 0 30px;
	}
	.ping{
		margin-left: auto;
		color: #3679c5;
	}
	.text{

	}
	.zan-icon{
		width: 28px;
		height: 28px;
		margin-right: 10px;
	}
	.bz-icon{
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
	.yue{
		margin-right: 30px;
	}
	.zan,.ping{
		display: flex;
		align-items: center;
	}
	/*评价*/
	.comment-box{
		padding: 0 30px;
		margin-bottom: 50px;
	}
	.layer-tit{
		font-size: 16px;/*no*/
		font-weight: 600;
		padding-left: 10px;
		position: relative;
		margin-bottom: 10px;
	}
	.layer-tit:before{
		position: absolute;
		left: 0;
		top:5px;
		display: block;
		content:"";
		width: 5px;
		height: 34px;
		background: #a40000;
	}
	.comment-input{
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		border:1px solid #cccccc;/*no*/
		border-radius: 10px;
		height: 400px;
		line-height: 36px;
		margin-bottom: 20px;
	}
	.cmt-btn{
		/*width: 550px;*/
		height: 88px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #28bf23;
		color: #fff;
		font-size: 16px;
		margin: 0 auto;
		border-radius: 10px;
		font-weight: 600;
	}
</style>