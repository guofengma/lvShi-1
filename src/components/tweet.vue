<template>
	<div class="page">
		<div class="article-box">
			<div class="atr-tit">{{bean.infoTitle}}</div>
			<div class="art-info">
				<span class="time">{{bean.infoPostTime}}</span>
				<span class="author">知了法律咨询</span>
			</div>
			<div class="art-con">
				<div id="view_content" class="wenzhanag" v-html="bean.infoContentStr">
                  
                </div>
			</div>
		</div>
		<!-- 评价 -->
		<div class="comment-box">
			<div class="layer-tit">律师观点</div>
			<div class="lawyer-info-box">
				<img class="l-head" v-bind:src="bean.proImg">
				<div class="l-info">
					<div class="l-name">{{bean.proName}}律师</div>
					<div class="l-desc">{{bean.proIntro}}</div>
				</div>
			</div>
			<!-- 律师观点内容 -->
			<div class="lsgd" v-if="!edit">
				{{bean.replyContentStr}}
			</div>
			<!-- 评论框 -->
			<div class="cmt-con" v-if="edit">
				<textarea class="comment-input" placeholder="请输入您的观点" v-model="replyContentStr"></textarea>
				<div class=" btnm cmt-btn" @click="updateTweet">立即发布</div>
			</div>
			<div class="edit-del-box" v-if="lawyerId == bean.proId">
				<span class="item edit" @click="editFn">编辑</span>
				<span class="item del" @click="deleteTweet">删除</span>
			</div>
		</div>

		<!-- 咨询 电话 -->
		<div class="contact-box">
			<div class="contact-item l-contact">在线咨询</div>
			<div class="contact-item phone-contact">电话咨询</div>
		</div>

		<!-- 点赏文章 -->
		<div class="shang-box">
			<div class="shang-item" @click="rewardInfo">
				<img src="../common/img/shang.png" class="shang-img">
				<span class="shang-name">点赏文章</span>
			</div>
			<div class="shang-item"  @click="rewardLawyer">
				<img src="../common/img/shang.png" class="shang-img">
				<span class="shang-name">点赏律师</span>
			</div>
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
			<span class="yue">阅读 {{bean.viewNum}}</span>
			<span class="zan" @click="zan">
				<img src="../common/img/zan.png" class="zan-icon">
				{{bean.likeNum}}
			</span>
			<!-- <span class="ping">
				<img src="../common/img/bz.png" class="bz-icon">
				评论
			</span> -->
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
				edit:false,
				seqId:"",	//推文id
				bean:{
					infoTitle:"离婚房子怎么分,离婚房子怎么分，离婚房子怎么分离婚房子怎么分离婚房子怎么分，离婚房子怎么分",
					postDate:"2018-05-04",
					viewNum:1500,
					replyNum:3,
					likeNum:3,
					infoContentStr:"",
					isComments:"",	//是否能评论
					isLike:0,	//是否已点赞
				},
				replyContentStr:"",
			}
		},
		created(){
			console.log(this.$route.params)
			let seqId = this.$route.params.seqId
			this.seqId = seqId;
			let openId = localStorage.getItem('openId')
			let lawyerId = localStorage.getItem('lawyerId')
			this.openId = openId;
			this.lawyerId = lawyerId;
			this.getTweetDetail();
		},
		methods:{
			//获取推广文详情
			getTweetDetail(){
				Indicator.open();
				let redData = {
					id:this.seqId,
					openId:localStorage.getItem('openId'),
				};
				this.axios.get(url.tweetDetail,{params:redData}).then((response) => {
					Indicator.close();
					console.log("获取推广文详情 -->",response)
					if(response.data.code == 0){
						this.bean = response.data.bean;
						this.replyContentStr = response.data.bean.replyContentStr
					}else{
						Toast({
						  message:  response.data.msg,
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
			//点击编辑按钮 
			editFn(){
				this.edit = !this.edit
			},
			//发布新的评论 更新推文
			updateTweet(){
				let replyContentStr = this.replyContentStr
				if(replyContentStr.trim() == '' && replyContentStr == undefined){
					Toast({
					  message: "内容不能为空",
					  duration: 2000
					});
					return
				}
				Indicator.open();
				let redData = {
					infoId:this.bean.infoId,
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
						this.edit = false
						setTimeout(()=>{
							this.getTweetDetail()
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
			//删除推文
			deleteTweet(){
				Indicator.open();
				let redData = {
					id:this.bean.seqId,
				};
				this.axios.get(url.deleteTweet,{params:redData}).then((response) => {
					Indicator.close();
					console.log("删除推文 -->",response)
					if(response.data.code == 0){
						Toast({
						  message: "删除成功",
						  duration: 2000
						});
						setTimeout(()=>{
							this.$router.push('/')
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
			//推文点赞
			zan(){
				Indicator.open();
				let redData = {
					busiType:'lawyer',
					pubId:this.bean.seqId,
					openId:localStorage.getItem('openId'),
				};
				this.axios.get(url.zanTweet,{params:redData}).then((response) => {
					Indicator.close();
					console.log("推文点赞 -->",response)
					let code = response.data.code;
					if(code == 0){
						console.log("点赞成功")
						Toast({
						  message: "点赞成功",
						  duration: 2000
						});
						setTimeout(()=>{
							this.getTweetDetail()
						},2000)
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
			//点赏文章
			rewardInfo(){
				let seqId = this.bean.infoId
				this.$router.push({path:'reward/:seqId/:target',name:"reward",params:{seqId:seqId,target:"info"}})
			},
			//点赏律师
			rewardLawyer(){
				let seqId = this.bean.proId
				this.$router.push({path:'reward/:seqId/:target',name:"reward",params:{seqId:seqId,target:"lawyer"}})
			},
		},
	}
</script>
<style>
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
		position: relative;
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

	/*律师信息*/
	.lawyer-info-box{
		display: flex;
		padding: 20px 30px;
		align-items: center;
		justify-content: space-between;
	}
	.l-head{
		width: 170px;
		height: 170px;
		border-radius: 50%;
		overflow: hidden;
	}
	.l-info{
		flex:1;
		margin-left: 25px;
		display: flex;
		flex-flow: column;
	}
	.l-name{
		font-size: 14px;/*no*/
		font-weight: 600;
		margin-bottom: 16px;
	}	
	.l-desc{
		/*font-size: 14px;/*
		/*no*/
		color: #666;
		line-height: 30px;

		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.lsgd{
		line-height: 32px;
	}
	/* 咨询 电话 */
	.contact-box{
		display: flex;
		margin-bottom: 50px;
	}
	.contact-item{
		width: 50%;
		height: 88px;
		color: #fff;
		font-size: 16px;/*no*/
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.l-contact{
		background: #009944;
	}
	.phone-contact{
		background: #e62a39;
	}
	/* 赏 */
	.shang-box{
		display: flex;
		align-items: center;
		margin: 30px;
		padding: 30px;
		border-bottom: 3px solid #eeeeee;
	}
	.shang-item{
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* 编辑 删除 */
	.edit-del-box{
		position: absolute;
		right: 30px;
		top: 0;
		height: 40px;
		display: flex;
		align-items: center;
	}
	.edit-del-box .item{
		margin-left: 50px;
	}
	.edit-del-box .edit{
		color: #27a623;
	}
	.edit-del-box .del{
		color: #999;
	}
</style>
