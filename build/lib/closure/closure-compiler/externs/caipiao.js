var CP = {};
CP.Box.text= function () {
};
CP.Box.showConfirm= function () {
};
CP.Box.showErrBox = function () {
};
CP.getServerTime = function(flag){}
$.NumInput= function () {
};
$.unbindNumInput= function () {
};
CP.jquery.NumInput= function () {
};
CP.jquery.unbindNumInput= function () {
};
Number.prototype.toFixed = function(n) {};
Number.prototype.fix = function(n) {};
Date.prototype.format = function(format){}

function base64encode(d){}
function base64decode(d){};
function utf16to8(d){};
function utf8to16(d){};


CP.t = function(){};

CP.math = {
	C : function(n, m) {
	},
	P : function(n, m) {
	},
	Cs : function (len, num){
	},
	N1:function(spArr,n){
	},
	N1d:function(spArrd,n){},
	enumCom:function(oriArr, comQty, fixedArr){},
	NM:function(arr,str,isDan){},
	random:function(startNum, totalNum, len, a ,rep) {}
};
CP.Util = {
	getMeta: function(name) {},
	filterScript: function(str) {},
	getPara: function(name, url) {},
	getParaHash: function(name, url) {},
	win: function(k, v) {},
	doForm: function(url, target, method, params, isAutoSubmit){},
	redirectTo: function(url, blank) {},
	padArray:function(obj,length){},
	pad:function(source,length){},
	key:function(){},
	paramToObj:function(str){},
	isCodesRepeat:function(c,a,t){},
	formatWinCodes:function(c,w,t,s){}
};

CP.Amount = {
	format: function(val, n) {},
	split: function(val, n, d) {}
};





CP.User = {
	info:null,
	isLogin: function() {},
	logout: function(url) {},
	getSession: function(){},
	isCPUser: function() {},
	checkLogin:function(fn){},
	showLogin: function(opt) {},
	getUserInfo: function(opt) {},
	getBalance: function(fn) {},
	balance: -1,
	mobile: false
};

CP.TopWin = {};
CP.TopWin.G_LOGIN_CALLBACK = {};

CP.Category = {};

CP.Category.getConf= function(){};

CP.Storage={
	is:function(){},
	set:function(name,value){},
	get:function(name){}
}

CP.Cookie = {
	set: function(name, value, domain, path, hour) {},
	get: function(name) {},
	del: function (name, domain, path) {}
};


function Stat() {};
Stat.prototype = {
	resetGlobalValue: function(){},
	main: function(path){},
	start: function(path){},
	load: function(path, param) {},
	innerCall: function(path, trace){},
	clickStat: function(tag, _domain){},
	pgv: function(_domain, path, param){},
	clickBctag: function(tag){},
	pgvBctag: function(){}
};
CP.Stat = {};

var initCustomAttr = function() {}

var Timer=function(serverTime){}
Timer.prototype={
	countDown:function(endTime,callback,flag){},
	countUp:function(callback){},
	upadte:function(){}
}

$.fn.NumInput = function(options){};
$.fn.selectRange = function(start, end) {};
var CP = {
	"Dom": function () {},
	"t": function () {},
	"getType": function () {},
	"getServerTime": function () {},
	"math": {
		"C": function () {},
		"P": function () {},
		"Cs": function () {},
		"N1": function () {},
		"N1d": function () {},
		"enumCom": function () {},
		"NM": function () {},
		"random": function () {}
	},
	"Util": {
		"getMeta": function () {},
		"copy": function () {},
		"filterScript": function () {},
		"getPara": function () {},
		"greet": function () {},
		"win": function () {},
		"indexOf": function () {},
		"doForm": function () {},
		"redirectTo": function () {},
		"padArray": function () {},
		"pad": function () {},
		"key": function () {},
		"paramToObj": function () {},
		"isCodesRepeat": function () {},
		"formatWinCodes": function () {}
	},
	"Amount": {
		"format": function () {},
		"split": function () {},
		"cn": function () {},
		"cnUnit": function () {},
		"fen2Yuan": function () {},
		"yuan2Fen": function () {}
	},
	"Loader": {
		"loadCss": function () {},
		"loadFrame": function () {}
	},
	"Box": {
		"name": function () {},
		"isOpen": function () {},
		"obj": function () {},
		"text": function () {},
		"frame": function () {},
		"isIframePage": function () {},
		"offset": function () {},
		"center": function () {},
		"resetFrameSize": function () {},
		"setTitle": function () {},
		"setContent": function () {},
		"close": function () {},
		"showErrBox": function () {},
		"showErrBoxs": function () {},
		"showConfirm1": function () {},
		"showConfirm": function () {}
	},
	"Validator": {
		"test": function () {}
	},
	"Date": {
		"format": function () {}
	},
	"Size": {
		"getObjSize": function () {},
		"getPageSize": function () {},
		"getWinSize": function () {},
		"getScrollSize": function () {},
		"getFrameSize": function () {},
		"getObjPosition": function () {}
	},
	"User": {
		"info": function () {},
		"isLogin": function () {},
		"logout": function () {},
		"getSession": function () {},
		"isCPUser": function () {},
		"checkLogin": function () {},
		"showLogin": function () {},
		"showReg": function () {},
		"getUserInfo": function () {},
		"getBalance": function () {},
		"balance": {},
		"mobile": {}
	},
	"TopWin": {},
	"Category": {
		"getConf": function () {}
	},
	"Cookie": {
		"set": function () {},
		"get": function () {},
		"del": function () {}
	},
	"Stat": {
		"$domain": {},
		"url": {},
		"loader": function () {},
		"DOMAIN": {
			"www": {},
			"wallet": {},
			"mch": {},
			"action": {},
			"caipiao": {},
			"cp": {},
			"bc": {}
		},
		"resetGlobalValue": function () {},
		"main": function () {},
		"start": function () {},
		"load": function () {},
		"innerCall": function () {},
		"clickStat": function () {},
		"pgv": function () {},
		"clickBctag": function () {},
		"pgvBctag": function () {}
	},
	"Upload": {
		"init": function () {},
		"getFileName": function () {},
		"addData": function () {},
		"setUrl": function () {},
		"submit": function () {}
	},
	"util": {
		"namespace": function () {}
	},
	"Pay": {
		"callBackCharge": function () {},
		"showCharge": function () {},
		"showCYHMBox": function () {},
		"success": function () {},
		"init": function () {}
	},
	"mainsubnav": function () {},
	"winnerRank": {
		"init": function () {}
	},
	"award": {
		"init": function () {},
		"doWithNo": function () {},
		"getNewAwardNo": function () {}
	},
	"INTERFACE": {
		"init": function () {}
	},
	"rules": {
		"init": function () {}
	}
}