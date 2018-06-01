var oid = "1801120001";

var url = "";
var codeUrl = "https://smarthome.yancloud.cn/cymall/m";
var codeUrl = "http://wechatmp.bingosale.net:4903/cymall/m";

export default{
    oid:oid,

    // 2.2.1获取分类列表
    getCateList:codeUrl+"/info/typeList.do?oid="+oid+"&isPub=1",

    // 2.2.2获取文章列表
    getInfoList:codeUrl+"/info/list.do?oid="+oid+"&isPub=1",

    // 2.2.3获取文章详情
    getInfoDetail:codeUrl+"/infodetail/getByIdForLaywerPub.do?oid="+oid+"&isPub=1",

	// 2.2.4保存文章回复/评价
	saveReply:codeUrl+"/infopub/save.do?oid="+oid+"&isPub=1",

	// 2.2.5文章赞赏
	artZanShang:codeUrl+"/inforeward/saveMoney.do?oid="+oid+"&isPub=1",

	// 2.2.6律师赞赏
	lawyerZanShang:codeUrl+"/memberwithdrawcommi/saveMoney.do?oid="+oid+"&isPub=1",

	// 2.2.7文章点赞
	actZan:codeUrl+"/info/saveLikeNum.do?oid="+oid+"&isPub=1",

	//2.3.1律师登录
	lawyerLogin:codeUrl+"/professorinfo/login.do?oid="+oid+"&isPub=1",

	// 2.3.2推广列表
	tweetList:codeUrl+"/infopub/list.do?oid="+oid+"&isPub=1",

	// 2.3.3推广详情
	tweetDetail:codeUrl+"/infopub/getById.do?oid="+oid+"&isPub=1",

	// 2.3获取公众号openId
  	wechatapiWxLogin: codeUrl + 'wechatapi/wxLogin.do?oid=' + oid + '&isPub=1',

  	// 2.4更新会员微信信息
  	getBySrvOpenId: codeUrl + 'member/getBySrvOpenId.do?oid=' + oid + '&isPub=1',

  	// 微信支付签名
  	wechatapiJsSign: codeUrl + 'wechatapi/jsSign.do?oid=' + oid + '&isPub=1',

  	//删除推文
	deleteTweet:codeUrl+"/infopub/delete.do?oid="+oid+"&isPub=1",

	//推文点赞
	zanTweet:codeUrl+"/infopub/saveLike.do?oid="+oid+"&isPub=1",
}