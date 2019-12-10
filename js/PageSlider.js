(function ($, window) {
/**
 * [jweixin-1.0.0.js]                                                                                                                                                                  [description]
 */
!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(this,function(e,n){function i(n,i,o){e.WeixinJSBridge?WeixinJSBridge.invoke(n,t(i),function(e){s(n,e,o)}):u(n,o)}function o(n,i,o){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){o&&o.trigger&&o.trigger(e),s(n,e,i)}):o?u(n,o):u(n,i)}function t(e){return e=e||{},e.appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function r(e,n){return{scope:n,signType:"sha1",timeStamp:e.timestamp+"",nonceStr:e.nonceStr,addrSign:e.addrSign}}function c(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,"package":e["package"],paySign:e.paySign,signType:"SHA1"}}function s(e,n,i){var o,t,r;switch(delete n.err_code,delete n.err_desc,delete n.err_detail,o=n.errMsg,o||(o=n.err_msg,delete n.err_msg,o=a(e,o,i),n.errMsg=o),i=i||{},i._complete&&(i._complete(n),delete i._complete),o=n.errMsg||"",M.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n)),t=o.indexOf(":"),r=o.substring(t+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function a(e,n){var i,o,t,r;if(n){switch(i=n.indexOf(":"),e){case g.config:o="config";break;case g.openProductSpecificView:o="openProductSpecificView";break;default:o=n.substring(0,i),o=o.replace(/_/g," "),o=o.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}),o=o.substring(0,1).toLowerCase()+o.substring(1),o=o.replace(/ /g,""),-1!=o.indexOf("Wcpay")&&(o=o.replace("Wcpay","WCPay")),t=h[o],t&&(o=t)}r=n.substring(i+1),"confirm"==r&&(r="ok"),-1!=r.indexOf("failed_")&&(r=r.substring(7)),-1!=r.indexOf("fail_")&&(r=r.substring(5)),r=r.replace(/_/g," "),r=r.toLowerCase(),("access denied"==r||"no permission to execute"==r)&&(r="permission denied"),"config"==o&&"function not exist"==r&&(r="ok"),n=o+":"+r}return n}function d(e){var n,i,o,t;if(e){for(n=0,i=e.length;i>n;++n)o=e[n],t=g[o],t&&(e[n]=t);return e}}function u(e,n){if(M.debug&&!n.isInnerInvoke){var i=h[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function p(){if(!("6.0.2">v)){var e=new Image;V.appId=M.appId,V.initTime=k.initEndTime-k.initStartTime,V.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,P.getNetworkType({isInnerInvoke:!0,success:function(n){V.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+V.version+"&o="+V.isPreVerifyOk+"&s="+V.systemType+"&c="+V.clientVersion+"&a="+V.appId+"&n="+V.networkType+"&i="+V.initTime+"&p="+V.preVerifyTime+"&u="+V.url;e.src=i}})}}function l(){return(new Date).getTime()}function f(n){I&&(e.WeixinJSBridge?n():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",n,!1))}function m(){P.invoke||(P.invoke=function(n,i,o){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,t(i),o)},P.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}var g,h,S,y,_,I,w,T,v,k,V,M,b,x,P;return e.jWeixin?void 0:(g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},h=function(){var e,n={};for(e in g)n[g[e]]=e;return n}(),S=e.document,y=S.title,_=navigator.userAgent.toLowerCase(),I=-1!=_.indexOf("micromessenger"),w=-1!=_.indexOf("android"),T=-1!=_.indexOf("iphone")||-1!=_.indexOf("ipad"),v=function(){var e=_.match(/micromessenger\/(\d+\.\d+\.\d+)/)||_.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},V={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:w?2:-1,clientVersion:v,url:encodeURIComponent(location.href)},M={},b={_completes:[]},x={state:0,res:{}},f(function(){k.initEndTime=l()}),P={config:function(e){M=e,u("config",e),f(function(){i(g.config,{verifyJsApiList:d(M.jsApiList)},function(){b._complete=function(e){k.preVerifyEndTime=l(),x.state=1,x.res=e},b.success=function(){V.isPreVerifyOk=0},b.fail=function(e){b._fail?b._fail(e):x.state=-1};var e=b._completes;return e.push(function(){M.debug||p()}),b.complete=function(n){for(var i=0,o=e.length;o>i;++i)e[i](n);b._completes=[]},b}()),k.preVerifyStartTime=l()}),M.beta&&m()},ready:function(e){0!=x.state?e():(b._completes.push(e),!I&&M.debug&&e())},error:function(e){"6.0.2">v||(-1==x.state?e(x.res):b._fail=e)},checkJsApi:function(e){var n=function(e){var n,i,o=e.checkResult;for(n in o)i=h[n],i&&(o[i]=o[n],delete o[n]);return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(w){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e}())},onMenuShareTimeline:function(e){o(g.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl,link:e.link||location.href},e)}},e)},onMenuShareAppMessage:function(e){o(g.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(g.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl,link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(g.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl,link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:e.isShowProgressTips||1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:e.isShowProgressTips||1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:e.isShowProgressTips||1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2"},function(){return e._complete=function(e){if(w){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e}())},previewImage:function(e){i(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:e.isShowProgressTips||1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:e.isShowProgressTips||1},e)},getNetworkType:function(e){var n=function(e){var n,i,o,t=e.errMsg;if(e.errMsg="getNetworkType:ok",n=e.subtype,delete e.subtype,n)e.networkType=n;else switch(i=t.indexOf(":"),o=t.substring(i+1)){case"fail":case"permission denied":case"localparameters":e.errMsg="getNetworkType:fail";break;default:e.networkType=o}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=n(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){i(g.getLocation,r(e,"jsapi_location"),e)},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{immediate_close:e&&e.immediateClose||0},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{desc:e.desc,needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},e)},openProductSpecificView:function(e){i(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0},e)},addCard:function(e){var n,o,t,r,c=e.cardList,s=[];for(n=0,o=c.length;o>n;++n)t=c[n],r={card_id:t.cardId,card_ext:t.cardExt},s.push(r);i(g.addCard,{card_list:s},function(){return e._complete=function(e){var n,i,o,t=e.card_list;if(t){for(t=JSON.parse(t),n=0,i=t.length;i>n;++n)o=t[n],o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=o.is_succ?!0:!1,delete o.card_id,delete o.card_ext,delete o.is_succ;e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){var n,o,t,r,c=e.cardList,s=[];for(n=0,o=c.length;o>n;++n)t=c[n],r={card_id:t.cardId,code:t.code},s.push(r);i(g.openCard,{card_list:s},e)},chooseWXPay:function(e){i(g.chooseWXPay,c(e),e)}},n&&(e.wx=e.jWeixin=P),P)});
/**
 * [eventemitter3.min.js]                                                                                                                                                                  [description]
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EventEmitter3=e()}}(function(){return function i(s,f,c){function u(t,e){if(!f[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(a)return a(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=f[t]={exports:{}};s[t][0].call(o.exports,function(e){return u(s[t][1][e]||e)},o,o.exports,i,s,f,c)}return f[t].exports}for(var a="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,v="~";function o(){}function f(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(e,t,n,r,o){if("function"!=typeof n)throw new TypeError("The listener must be a function");var i=new f(n,r||e,o),s=v?v+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],i]:e._events[s].push(i):(e._events[s]=i,e._eventsCount++),e}function u(e,t){0==--e._eventsCount?e._events=new o:delete e._events[t]}function s(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(v=!1)),s.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(v?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=v?v+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,o=n.length,i=new Array(o);r<o;r++)i[r]=n[r].fn;return i},s.prototype.listenerCount=function(e){var t=v?v+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,r,o,i){var s=v?v+e:e;if(!this._events[s])return!1;var f,c,u=this._events[s],a=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),a){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,r),!0;case 5:return u.fn.call(u.context,t,n,r,o),!0;case 6:return u.fn.call(u.context,t,n,r,o,i),!0}for(c=1,f=new Array(a-1);c<a;c++)f[c-1]=arguments[c];u.fn.apply(u.context,f)}else{var l,p=u.length;for(c=0;c<p;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),a){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,n);break;case 4:u[c].fn.call(u[c].context,t,n,r);break;default:if(!f)for(l=1,f=new Array(a-1);l<a;l++)f[l-1]=arguments[l];u[c].fn.apply(u[c].context,f)}}return!0},s.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,n,r){var o=v?v+e:e;if(!this._events[o])return this;if(!t)return u(this,o),this;var i=this._events[o];if(i.fn)i.fn!==t||r&&!i.once||n&&i.context!==n||u(this,o);else{for(var s=0,f=[],c=i.length;s<c;s++)(i[s].fn!==t||r&&!i[s].once||n&&i[s].context!==n)&&f.push(i[s]);f.length?this._events[o]=1===f.length?f[0]:f:u(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=v?v+e:e,this._events[t]&&u(this,t)):(this._events=new o,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=v,s.EventEmitter=s,void 0!==t&&(t.exports=s)},{}]},{},[1])(1)});
/**
 * [Scroller.js]                                                                                                                                                         [description]
 */
var Scroller;(function(){var u=function(){};Scroller=function(a,b){this.__callback=a;this.options={animating:true,animationDuration:250,bouncing:true,scrollingX:true,scrollingY:true,locking:true,paging:false,snapping:false,zooming:false,minZoom:0.5,maxZoom:3,speedMultiplier:1,scrollingComplete:u,penetrationDeceleration:0.03,penetrationAcceleration:0.08};for(var c in b){this.options[c]=b[c]}};var v=function(a){return(Math.pow((a-1),3)+1)};var w=function(a){if((a/=0.5)<1){return 0.5*Math.pow(a,3)}return 0.5*(Math.pow((a-2),3)+2)};var x={__isSingleTouch:false,__isTracking:false,__didDecelerationComplete:false,__isGesturing:false,__isDragging:false,__isDecelerating:false,__isAnimating:false,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:false,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(a,b,c,d){var e=this;if(a===+a){e.__clientWidth=a}if(b===+b){e.__clientHeight=b}if(c===+c){e.__contentWidth=c}if(d===+d){e.__contentHeight=d}e.__computeScrollMax();e.scrollTo(e.__scrollLeft,e.__scrollTop,true)},setPosition:function(a,b){var c=this;c.__clientLeft=a||0;c.__clientTop=b||0},setSnapSize:function(a,b){var c=this;c.__snapWidth=a;c.__snapHeight=b},activatePullToRefresh:function(a,b,c,d){var e=this;e.__refreshHeight=a;e.__refreshActivate=b;e.__refreshDeactivate=c;e.__refreshStart=d},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,true);if(this.__refreshStart){this.__refreshStart()}},finishPullToRefresh:function(){var a=this;a.__refreshActive=false;if(a.__refreshDeactivate){a.__refreshDeactivate()}a.scrollTo(a.__scrollLeft,a.__scrollTop,true)},getValues:function(){var a=this;return{left:a.__scrollLeft,top:a.__scrollTop,zoom:a.__zoomLevel}},getScrollMax:function(){var a=this;return{left:a.__maxScrollLeft,top:a.__maxScrollTop}},zoomTo:function(a,b,c,d,e){var f=this;if(!f.options.zooming){throw new Error("Zooming is not enabled!");}if(e){f.__zoomComplete=e}if(f.__isDecelerating){core.effect.Animate.stop(f.__isDecelerating);f.__isDecelerating=false}var g=f.__zoomLevel;if(c==null){c=f.__clientWidth/2}if(d==null){d=f.__clientHeight/2}a=Math.max(Math.min(a,f.options.maxZoom),f.options.minZoom);f.__computeScrollMax(a);var h=((c+f.__scrollLeft)*a/g)-c;var i=((d+f.__scrollTop)*a/g)-d;if(h>f.__maxScrollLeft){h=f.__maxScrollLeft}else if(h<0){h=0}if(i>f.__maxScrollTop){i=f.__maxScrollTop}else if(i<0){i=0}f.__publish(h,i,a,b)},zoomBy:function(a,b,c,d,e){var f=this;f.zoomTo(f.__zoomLevel*a,b,c,d,e)},scrollTo:function(a,b,c,d){var e=this;if(e.__isDecelerating){core.effect.Animate.stop(e.__isDecelerating);e.__isDecelerating=false}if(d!=null&&d!==e.__zoomLevel){if(!e.options.zooming){throw new Error("Zooming is not enabled!");}a*=d;b*=d;e.__computeScrollMax(d)}else{d=e.__zoomLevel}if(!e.options.scrollingX){a=e.__scrollLeft}else{if(e.options.paging){a=Math.round(a/e.__clientWidth)*e.__clientWidth}else if(e.options.snapping){a=Math.round(a/e.__snapWidth)*e.__snapWidth}}if(!e.options.scrollingY){b=e.__scrollTop}else{if(e.options.paging){b=Math.round(b/e.__clientHeight)*e.__clientHeight}else if(e.options.snapping){b=Math.round(b/e.__snapHeight)*e.__snapHeight}}a=Math.max(Math.min(e.__maxScrollLeft,a),0);b=Math.max(Math.min(e.__maxScrollTop,b),0);if(a===e.__scrollLeft&&b===e.__scrollTop){c=false}if(!e.__isTracking){e.__publish(a,b,d,c)}},scrollBy:function(a,b,c){var d=this;var e=d.__isAnimating?d.__scheduledLeft:d.__scrollLeft;var f=d.__isAnimating?d.__scheduledTop:d.__scrollTop;d.scrollTo(e+(a||0),f+(b||0),c)},doMouseZoom:function(a,b,c,d){var e=this;var f=a>0?0.97:1.03;return e.zoomTo(e.__zoomLevel*f,false,c-e.__clientLeft,d-e.__clientTop)},doTouchStart:function(a,b){if(a.length==null){throw new Error("Invalid touch list: "+a);}if(b instanceof Date){b=b.valueOf()}if(typeof b!=="number"){throw new Error("Invalid timestamp value: "+b);}var c=this;c.__interruptedAnimation=true;if(c.__isDecelerating){core.effect.Animate.stop(c.__isDecelerating);c.__isDecelerating=false;c.__interruptedAnimation=true}if(c.__isAnimating){core.effect.Animate.stop(c.__isAnimating);c.__isAnimating=false;c.__interruptedAnimation=true}var d,currentTouchTop;var e=a.length===1;if(e){d=a[0].pageX;currentTouchTop=a[0].pageY}else{d=Math.abs(a[0].pageX+a[1].pageX)/2;currentTouchTop=Math.abs(a[0].pageY+a[1].pageY)/2}c.__initialTouchLeft=d;c.__initialTouchTop=currentTouchTop;c.__zoomLevelStart=c.__zoomLevel;c.__lastTouchLeft=d;c.__lastTouchTop=currentTouchTop;c.__lastTouchMove=b;c.__lastScale=1;c.__enableScrollX=!e&&c.options.scrollingX;c.__enableScrollY=!e&&c.options.scrollingY;c.__isTracking=true;c.__didDecelerationComplete=false;c.__isDragging=!e;c.__isSingleTouch=e;c.__positions=[]},doTouchMove:function(a,b,c){if(a.length==null){throw new Error("Invalid touch list: "+a);}if(b instanceof Date){b=b.valueOf()}if(typeof b!=="number"){throw new Error("Invalid timestamp value: "+b);}var d=this;if(!d.__isTracking){return}var e,currentTouchTop;if(a.length===2){e=Math.abs(a[0].pageX+a[1].pageX)/2;currentTouchTop=Math.abs(a[0].pageY+a[1].pageY)/2}else{e=a[0].pageX;currentTouchTop=a[0].pageY}var f=d.__positions;if(d.__isDragging){var g=e-d.__lastTouchLeft;var h=currentTouchTop-d.__lastTouchTop;var i=d.__scrollLeft;var j=d.__scrollTop;var k=d.__zoomLevel;if(c!=null&&d.options.zooming){var l=k;k=k/d.__lastScale*c;k=Math.max(Math.min(k,d.options.maxZoom),d.options.minZoom);if(l!==k){var m=e-d.__clientLeft;var n=currentTouchTop-d.__clientTop;i=((m+i)*k/l)-m;j=((n+j)*k/l)-n;d.__computeScrollMax(k)}}if(d.__enableScrollX){i-=g*this.options.speedMultiplier;var o=d.__maxScrollLeft;if(i>o||i<0){if(d.options.bouncing){i+=(g/2*this.options.speedMultiplier)}else if(i>o){i=o}else{i=0}}}if(d.__enableScrollY){j-=h*this.options.speedMultiplier;var p=d.__maxScrollTop;if(j>p||j<0){if(d.options.bouncing){j+=(h/2*this.options.speedMultiplier);if(!d.__enableScrollX&&d.__refreshHeight!=null){if(!d.__refreshActive&&j<=-d.__refreshHeight){d.__refreshActive=true;if(d.__refreshActivate){d.__refreshActivate()}}else if(d.__refreshActive&&j>-d.__refreshHeight){d.__refreshActive=false;if(d.__refreshDeactivate){d.__refreshDeactivate()}}}}else if(j>p){j=p}else{j=0}}}if(f.length>60){f.splice(0,30)}f.push(i,j,b);d.__publish(i,j,k)}else{var q=d.options.locking?3:0;var r=5;var s=Math.abs(e-d.__initialTouchLeft);var t=Math.abs(currentTouchTop-d.__initialTouchTop);d.__enableScrollX=d.options.scrollingX&&s>=q;d.__enableScrollY=d.options.scrollingY&&t>=q;f.push(d.__scrollLeft,d.__scrollTop,b);d.__isDragging=(d.__enableScrollX||d.__enableScrollY)&&(s>=r||t>=r);if(d.__isDragging){d.__interruptedAnimation=false}}d.__lastTouchLeft=e;d.__lastTouchTop=currentTouchTop;d.__lastTouchMove=b;d.__lastScale=c},doTouchEnd:function(a){if(a instanceof Date){a=a.valueOf()}if(typeof a!=="number"){throw new Error("Invalid timestamp value: "+a);}var b=this;if(!b.__isTracking){return}b.__isTracking=false;if(b.__isDragging){b.__isDragging=false;if(b.__isSingleTouch&&b.options.animating&&(a-b.__lastTouchMove)<=100){var c=b.__positions;var d=c.length-1;var e=d;for(var i=d;i>0&&c[i]>(b.__lastTouchMove-100);i-=3){e=i}if(e!==d){var f=c[d]-c[e];var g=b.__scrollLeft-c[e-2];var h=b.__scrollTop-c[e-1];b.__decelerationVelocityX=g/f*(1000/60);b.__decelerationVelocityY=h/f*(1000/60);var j=b.options.paging||b.options.snapping?4:1;if(Math.abs(b.__decelerationVelocityX)>j||Math.abs(b.__decelerationVelocityY)>j){if(!b.__refreshActive){b.__startDeceleration(a)}}else{b.options.scrollingComplete()}}else{b.options.scrollingComplete()}}else if((a-b.__lastTouchMove)>100){b.options.scrollingComplete()}}if(!b.__isDecelerating){if(b.__refreshActive&&b.__refreshStart){b.__publish(b.__scrollLeft,-b.__refreshHeight,b.__zoomLevel,true);if(b.__refreshStart){b.__refreshStart()}}else{if(b.__interruptedAnimation||b.__isDragging){b.options.scrollingComplete()}b.scrollTo(b.__scrollLeft,b.__scrollTop,true,b.__zoomLevel);if(b.__refreshActive){b.__refreshActive=false;if(b.__refreshDeactivate){b.__refreshDeactivate()}}}}b.__positions.length=0},__publish:function(d,e,f,g){var h=this;var i=h.__isAnimating;if(i){core.effect.Animate.stop(i);h.__isAnimating=false}if(g&&h.options.animating){h.__scheduledLeft=d;h.__scheduledTop=e;h.__scheduledZoom=f;var j=h.__scrollLeft;var k=h.__scrollTop;var l=h.__zoomLevel;var m=d-j;var n=e-k;var o=f-l;var p=function(a,b,c){if(c){h.__scrollLeft=j+(m*a);h.__scrollTop=k+(n*a);h.__zoomLevel=l+(o*a);if(h.__callback){h.__callback(h.__scrollLeft,h.__scrollTop,h.__zoomLevel)}}};var q=function(a){return h.__isAnimating===a};var r=function(a,b,c){if(b===h.__isAnimating){h.__isAnimating=false}if(h.__didDecelerationComplete||c){h.options.scrollingComplete()}if(h.options.zooming){h.__computeScrollMax();if(h.__zoomComplete){h.__zoomComplete();h.__zoomComplete=null}}};h.__isAnimating=core.effect.Animate.start(p,q,r,h.options.animationDuration,i?v:w)}else{h.__scheduledLeft=h.__scrollLeft=d;h.__scheduledTop=h.__scrollTop=e;h.__scheduledZoom=h.__zoomLevel=f;if(h.__callback){h.__callback(d,e,f)}if(h.options.zooming){h.__computeScrollMax();if(h.__zoomComplete){h.__zoomComplete();h.__zoomComplete=null}}}},__computeScrollMax:function(a){var b=this;if(a==null){a=b.__zoomLevel}b.__maxScrollLeft=Math.max((b.__contentWidth*a)-b.__clientWidth,0);b.__maxScrollTop=Math.max((b.__contentHeight*a)-b.__clientHeight,0)},__startDeceleration:function(d){var e=this;if(e.options.paging){var f=Math.max(Math.min(e.__scrollLeft,e.__maxScrollLeft),0);var g=Math.max(Math.min(e.__scrollTop,e.__maxScrollTop),0);var h=e.__clientWidth;var i=e.__clientHeight;e.__minDecelerationScrollLeft=Math.floor(f/h)*h;e.__minDecelerationScrollTop=Math.floor(g/i)*i;e.__maxDecelerationScrollLeft=Math.ceil(f/h)*h;e.__maxDecelerationScrollTop=Math.ceil(g/i)*i}else{e.__minDecelerationScrollLeft=0;e.__minDecelerationScrollTop=0;e.__maxDecelerationScrollLeft=e.__maxScrollLeft;e.__maxDecelerationScrollTop=e.__maxScrollTop}var j=function(a,b,c){e.__stepThroughDeceleration(c)};var k=e.options.snapping?4:0.001;var l=function(){var a=Math.abs(e.__decelerationVelocityX)>=k||Math.abs(e.__decelerationVelocityY)>=k;if(!a){e.__didDecelerationComplete=true}return a};var m=function(a,b,c){e.__isDecelerating=false;if(e.__didDecelerationComplete){e.options.scrollingComplete()}e.scrollTo(e.__scrollLeft,e.__scrollTop,e.options.snapping)};e.__isDecelerating=core.effect.Animate.start(j,l,m)},__stepThroughDeceleration:function(a){var b=this;var c=b.__scrollLeft+b.__decelerationVelocityX;var d=b.__scrollTop+b.__decelerationVelocityY;if(!b.options.bouncing){var e=Math.max(Math.min(b.__maxDecelerationScrollLeft,c),b.__minDecelerationScrollLeft);if(e!==c){c=e;b.__decelerationVelocityX=0}var f=Math.max(Math.min(b.__maxDecelerationScrollTop,d),b.__minDecelerationScrollTop);if(f!==d){d=f;b.__decelerationVelocityY=0}}if(a){b.__publish(c,d,b.__zoomLevel)}else{b.__scrollLeft=c;b.__scrollTop=d}if(!b.options.paging){var g=0.95;b.__decelerationVelocityX*=g;b.__decelerationVelocityY*=g}if(b.options.bouncing){var h=0;var i=0;var j=b.options.penetrationDeceleration;var k=b.options.penetrationAcceleration;if(c<b.__minDecelerationScrollLeft){h=b.__minDecelerationScrollLeft-c}else if(c>b.__maxDecelerationScrollLeft){h=b.__maxDecelerationScrollLeft-c}if(d<b.__minDecelerationScrollTop){i=b.__minDecelerationScrollTop-d}else if(d>b.__maxDecelerationScrollTop){i=b.__maxDecelerationScrollTop-d}if(h!==0){if(h*b.__decelerationVelocityX<=0){b.__decelerationVelocityX+=h*j}else{b.__decelerationVelocityX=h*k}}if(i!==0){if(i*b.__decelerationVelocityY<=0){b.__decelerationVelocityY+=i*j}else{b.__decelerationVelocityY=i*k}}}}};for(var y in x){Scroller.prototype[y]=x[y]}})();(function(u){var v=Date.now||function(){return+new Date()};var w=60;var x=1000;var y={};var z=1;if(!u.core){u.core={effect:{}}}else if(!core.effect){core.effect={}}core.effect.Animate={requestAnimationFrame:(function(){var g=u.requestAnimationFrame||u.webkitRequestAnimationFrame||u.mozRequestAnimationFrame||u.oRequestAnimationFrame;var h=!!g;if(g&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(g.toString())){h=false}if(h){return function(a,b){g(a,b)}}var i=60;var j={};var k=0;var l=1;var m=null;var n=+new Date();return function(d,e){var f=l++;j[f]=d;k++;if(m===null){m=setInterval(function(){var a=+new Date();var b=j;j={};k=0;for(var c in b){if(b.hasOwnProperty(c)){b[c](a);n=a}}if(a-n>2500){clearInterval(m);m=null}},1000/i)}return f}})(),stop:function(a){var b=y[a]!=null;if(b){y[a]=null}return b},isRunning:function(a){return y[a]!=null},start:function(f,g,h,i,k,l){var m=v();var n=m;var o=0;var p=0;var q=z++;if(!l){l=document.body}if(q%20===0){var r={};for(var s in y){r[s]=true}y=r}var t=function(a){var b=a!==true;var c=v();if(!y[q]||(g&&!g(q))){y[q]=null;h&&h(w-(p/((c-m)/x)),q,false);return}if(b){var d=Math.round((c-n)/(x/w))-1;for(var j=0;j<Math.min(d,4);j++){t(true);p++}}if(i){o=(c-m)/i;if(o>1){o=1}}var e=k?k(o):o;if((f(e,c,b)===false||o===1)&&b){y[q]=null;h&&h(w-(p/((c-m)/x)),q,o===1||i==null)}else if(b){n=c;core.effect.Animate.requestAnimationFrame(t,l)}};y[q]=true;core.effect.Animate.requestAnimationFrame(t,l);return q}}})(this);
/*!  | http://thinkpixellab.com/PxLoader */
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.PxLoader=b()}):"object"==typeof module&&module.exports?module.exports=b():a.PxLoader=b()}(this,function(){function a(a){a=a||{},this.settings=a,null==a.statusInterval&&(a.statusInterval=5e3),null==a.loggingDelay&&(a.loggingDelay=2e4),null==a.noProgressTimeout&&(a.noProgressTimeout=1/0);var c,d=[],e=[],f=[],g=Date.now(),h={QUEUED:0,WAITING:1,LOADED:2,ERROR:3,TIMEOUT:4},i=function(a){return null==a?[]:Array.isArray(a)?a:[a]};this.add=function(a){a.tags=new b(a.tags),null==a.priority&&(a.priority=1/0),d.push({resource:a,status:h.QUEUED})},this.addProgressListener=function(a,c){f.push({callback:a,tags:new b(c)})},this.addCompletionListener=function(a,c){e.push({tags:new b(c),callback:function(b){b.completedCount===b.totalCount&&a(b)}})};var j=function(a){a=i(a);var b=function(b){for(var c=b.resource,d=1/0,e=0;e<c.tags.length;e++)for(var f=0;f<Math.min(a.length,d)&&!(c.tags.all[e]===a[f]&&f<d&&(d=f,0===d))&&0!==d;f++);return d};return function(a,c){var d=b(a),e=b(c);return d<e?-1:d>e?1:a.priority<c.priority?-1:a.priority>c.priority?1:0}};this.start=function(a){c=Date.now();var b=j(a);d.sort(b);for(var e=0,f=d.length;e<f;e++){var g=d[e];g.status=h.WAITING,g.resource.start(this)}setTimeout(k,100)};var k=function(){for(var b=!1,c=Date.now()-g,e=c>=a.noProgressTimeout,f=c>=a.loggingDelay,i=0,j=d.length;i<j;i++){var l=d[i];l.status===h.WAITING&&(l.resource.checkStatus&&l.resource.checkStatus(),l.status===h.WAITING&&(e?l.resource.onTimeout():b=!0))}f&&b&&n(),b&&setTimeout(k,a.statusInterval)};this.isBusy=function(){for(var a=0,b=d.length;a<b;a++)if(d[a].status===h.QUEUED||d[a].status===h.WAITING)return!0;return!1};var l=function(a,b){var c,i,j,k,l,n=null;for(c=0,i=d.length;c<i;c++)if(d[c].resource===a){n=d[c];break}if(null!=n&&n.status===h.WAITING)for(n.status=b,g=Date.now(),j=f.concat(e),c=0,i=j.length;c<i;c++)k=j[c],l=0===k.tags.length||a.tags.intersects(k.tags),l&&m(n,k)};this.onLoad=function(a){l(a,h.LOADED)},this.onError=function(a){l(a,h.ERROR)},this.onTimeout=function(a){l(a,h.TIMEOUT)};var m=function(a,b){var c,e,f,g,i=0,j=0;for(c=0,e=d.length;c<e;c++)f=d[c],g=!1,g=0===b.tags.length||f.resource.tags.intersects(b.tags),g&&(j++,f.status!==h.LOADED&&f.status!==h.ERROR&&f.status!==h.TIMEOUT||i++);b.callback({resource:a.resource,loaded:a.status===h.LOADED,error:a.status===h.ERROR,timeout:a.status===h.TIMEOUT,completedCount:i,totalCount:j})},n=this.log=function(a){if(window.console){var b=Math.round((Date.now()-c)/1e3);window.console.log("PxLoader elapsed: "+b+" sec");for(var e=0,f=d.length;e<f;e++){var g=d[e];if(a||g.status===h.WAITING){var i="PxLoader: #"+e+" "+g.resource.getName();switch(g.status){case h.QUEUED:i+=" (Not Started)";break;case h.WAITING:i+=" (Waiting)";break;case h.LOADED:i+=" (Loaded)";break;case h.ERROR:i+=" (Error)";break;case h.TIMEOUT:i+=" (Timeout)"}g.resource.tags.length>0&&(i+=" Tags: ["+g.resource.tags.all.join(",")+"]"),window.console.log(i)}}}}}function b(a){if(this.all=[],this.first=null,this.length=0,this.lookup={},a){if(Array.isArray(a))this.all=a.slice(0);else if("object"==typeof a)for(var b in a)a.hasOwnProperty(b)&&this.all.push(b);else this.all.push(a);this.length=this.all.length,this.length>0&&(this.first=this.all[0]);for(var c=0;c<this.length;c++)this.lookup[this.all[c]]=!0}}return b.prototype.intersects=function(a){if(0===this.length||0===a.length)return!1;if(1===this.length&&1===a.length)return this.first===a.first;if(a.length<this.length)return a.intersects(this);for(var b in this.lookup)if(a.lookup[b])return!0;return!1},a}),function(a,b){"function"==typeof define&&define.amd?define(["pxloader"],function(c){return a.PxLoaderImage=b(c)}):"object"==typeof module&&module.exports?module.exports=b(require("pxloader")):a.PxLoaderImage=b(a.PxLoader)}(this,function(a){function b(a,b,c,d){d=d||{};var e,f=this,g=null;e=this.img=new Image,d.origin&&(e.crossOrigin=d.origin),this.tags=b,this.priority=c;var h=function(){"complete"===f.img.readyState&&i()},i=function(){g.onLoad(f),l()},j=function(){g.onError(f),l()},k=function(){g.onTimeout(f),l()},l=function(){f.unbind("load",i),f.unbind("readystatechange",h),f.unbind("error",j)};this.start=function(b){g=b,f.bind("load",i),f.bind("readystatechange",h),f.bind("error",j),f.img.src=a},this.checkStatus=function(){h()},this.onTimeout=function(){f.img.complete?i():k()},this.getName=function(){return a},this.bind=function(a,b){f.img.addEventListener(a,b,!1)},this.unbind=function(a,b){f.img.removeEventListener(a,b,!1)}}return a.prototype.addImage=function(a,c,d,e){var f=new b(a,c,d,e);return this.add(f),f.img},b});

var EasyScroller = function(d, e) {
	EventEmitter3.call(this);
    this.content = d;
    this.container = d.parentNode;
    var f = this;
    this.scroller = new Scroller(function(a, b, c) {
    	f.emit('scroller',{x:a,y:b,z:c});
        f.render(a, b, c);
    }, e);
    f.bindEvents();
    f.content.style[EasyScroller.vendorPrefix + 'TransformOrigin'] = "left top";
};
EasyScroller.prototype = Object.create(EventEmitter3.prototype);
EasyScroller.prototype.constructor = EasyScroller; 


EasyScroller.prototype.render = (function() {
    var d = document.documentElement.style;
    var e;
    if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
        e = 'presto'
    } else if ('MozAppearance' in d) {
        e = 'gecko'
    } else if ('WebkitAppearance' in d) {
        e = 'webkit'
    } else if (typeof navigator.cpuClass === 'string') {
        e = 'trident'
    }
    var f = EasyScroller.vendorPrefix = {
        trident: 'ms',
        gecko: 'Moz',
        webkit: 'Webkit',
        presto: 'O'
    }[e];
    var g = document.createElement("div");
    var h;
    var i = f + "Perspective";
    var j = f + "Transform";
    if (g.style[i] !== h) {
        return function(a, b, c) {
            this.content.style[j] = 'translate3d(' + (-a) + 'px,' + (-b) + 'px,0) scale(' + c + ')'
        }
    } else if (g.style[j] !== h) {
        return function(a, b, c) {
            this.content.style[j] = 'translate(' + (-a) + 'px,' + (-b) + 'px) scale(' + c + ')'
        }
    } else {
        return function(a, b, c) {
            this.content.style.marginLeft = a ? (-a / c) + 'px' : '';
            this.content.style.marginTop = b ? (-b / c) + 'px' : '';
            this.content.style.zoom = c || ''
        }
    }
})();

EasyScroller.prototype.bindEvents = function() {
    var f = this;
    this.container.addEventListener("touchstart", function(e) {
        if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
            return;
        }
        f.scroller.doTouchStart(e.touches, e.timeStamp)
    }, false);
    this.container.addEventListener("touchmove", function(e) {
        e.preventDefault();
        f.scroller.doTouchMove(e.touches, e.timeStamp, e.scale)
    }, false);
    this.container.addEventListener("touchend", function(e) {
        f.scroller.doTouchEnd(e.timeStamp)
    }, false);
    this.container.addEventListener("touchcancel", function(e) {
        f.scroller.doTouchEnd(e.timeStamp)
    }, false)
};



    //默认参数
    var defaults = {
        direction: 'vertical',    //滚动方向：vertical/horizontal
        currentClass: 'current',  //当前 className
        gestureFollowing: false,  //是否需要手势跟随
        rememberLastVisited: false,
        preventDefault: true,
        animationPlayOnce: false,
        dev: false,               //开发模式，传入数值，直接跳到正在开发的屏数
        musicUrl: false,          //是否需要背景音乐
        shareUrl: 'https://yidian.weiyihui.com.cn/weixinshare/index.php', //默认分享方式
        baseUrl: '',
        onSwipeUp: function () {  //swipeUp 回调

        },
        checkMobile: function (s) { //正则匹配手机号
            return s.length != 11 ? false : true;
        },
        checkEmail: function CheckMail(mail) {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return filter.test(mail) ? true : false;
        },
        onSwipeDown: function () {//swipeDown 回调
        },
        onSwipeLeft: function () {//swipeLeft 回调
        },
        onSwipeRight: function () {//swipeRight 回调
        },
        oninit: function () {     //初始化完成时的回调

        },
        onbeforechange: function () {  //开始切换前的回调

        },
        onchange: function () {   //每一屏切换完成时的回调          
            // var index = this.index + 1;
            // var This = this;

        },
        smallScreen:function () {
           
        }
    };

    //一些辅助全局变量
    var pageWidth = document.documentElement.clientWidth,
        pageHeight = document.documentElement.clientHeight,
        hei = window.innerHeight,
        lockNext,
        lockPrev,
        state,
        startPos,
        isGestureFollowing,
        offset,
        pageScrollTop,
        compareDis,
		compareStart;

    function PageSlider(options) {
        EventEmitter3.call(this);
        $.extend(this, defaults, options);

        if (this.pages.length <= 0) {
            throw new Error('target para not pass');
        }
        this.loader = new PxLoader();
        this.target = this.pages.eq(0).parent();
        this.length = this.pages.length;
        this.index = 0;
        this.curPage = this.pages.eq(this.index);
        this.timer = null;

        isGestureFollowing = this.gestureFollowing;

        if (this.direction === 'vertical' || this.direction === 'v') {
            this.direction = 'v';
        }

        if (this.direction === 'horizontal' || this.direction === 'h') {
            this.direction = 'h';
        }

        this._init();
    }
    PageSlider.prototype = Object.create(EventEmitter3.prototype);
    PageSlider.prototype.constructor = PageSlider; 
    PageSlider.prototype._init = function () {
        var self = this;

        //初始化CSS动画，好让滑动有缓动效果
        this.target.css('-webkit-transition', '-webkit-transform 0.5s ease');

        //小屏幕兼容
        this.smallScreen();

        // // //如果是长页面
        this.pages.each(function (index) {
            var $this = $(this);

            if ($this.data('scroller')) {
                var element = $this.children('.page-inner')[0];

                $this[0].scrollerController = new EasyScroller(element, {
                    scrollingY:true,
                    scrollingX: false,
                    bouncing:false
                });

                var contentHeight = $this.data('height')?$this.data('height'):window.innerHeight;

                var scrollerHeight = $this.data('height')?$this.data('height')+"px":"auto";
             	
             	$(element).css('height', scrollerHeight);

                $this[0].scrollerController.scroller.setDimensions(
            		window.innerWidth, 
            		window.innerHeight, 
            		window.innerWidth,
            		contentHeight
            	);
            }
        });

        //如果是横向滚动
        if (this.direction === 'h') {
            this.target.css('position', 'relative');
            this.pages.each(function (index) {
                $(this).css({
                    position: 'absolute',
                    left: index * 100 + '%',
                    top: 0
                });
            });
        }

        //绑定动态动画效果
        self._bindAnimation();

        this.target.on('touchstart', function (e) {
            self._startHandle(e);
        });

        this.target.on('touchmove', function (e) {
            self._moveHandle(e);
        });

        this.target.on('touchend', function (e) {
            self._endHandle(e);
        });

        //如果需要记住上次访问的屏索引
        if (this.rememberLastVisited) {
            this.lastVisitedIndex = this._getLastVisited();
        }

        this.target.css('-webkit-transform', 'translate(0, 0)');
        this.pages.eq(0).addClass(this.currentClass);

        this.oninit.call(this);

        //调用开发
        this._dev();

        //默认开启微信验证
        this._initWeixin();

        //默认开启
        this._bgMusic();

        this.orient()
    };
    PageSlider.prototype._startHandle = function (e) {

        var touch = e.originalEvent.changedTouches[0];


        //如果动画在执行中则不予以操作
        if (state === 'running') {
            e.preventDefault();
            return;
        }

        startPos = this.direction === 'v' ? touch.clientY : touch.clientX;
		compareStart = this.direction === 'v' ? touch.clientX : touch.clientY;
        //是否禁止滑屏参数获取
        lockNext = this.curPage.data('lock-next');
        lockPrev = this.curPage.data('lock-prev');

        //是否是长页面
        this.curPage[0].pageScrollHeight = this.curPage.data('scroller');

        if (this.curPage[0].pageScrollHeight) {
            isGestureFollowing && (this.gestureFollowing = false);
            this.preventDefault = false;
            pageScrollTop = pageHeight + this.curPage[0].scrollerController.scroller.__scrollTop;
        }

        //手势跟随判断
        if (this.gestureFollowing) {
            //获取当前的位置值
            offset = -this.index * (this.direction === 'v' ? pageHeight : pageWidth);
        }
    };

    PageSlider.prototype._moveHandle = function (e) {

        var touch = e.originalEvent.changedTouches[0],
            distance,
            endPos;

        //如果动画在执行中则不予以操作
        if (state === 'running') {
            e.preventDefault();
            return;
        }

        endPos = this.direction === 'v' ? touch.clientY : touch.clientX;
        distance = endPos - startPos;

        //如果存在长页面，需多判断一下，以阻止默认行为
        if (this.curPage[0].pageScrollHeight) {
  
            if (distance > 0 && pageScrollTop === pageHeight) e.preventDefault();

            if (distance < 0 && pageScrollTop === this.curPage[0].scrollerController.content.offsetHeight) e.preventDefault();
        }

        //如果不需要手势跟随，直接返回
        if (!this.gestureFollowing) {
            this._preventDefault(e);
            return;
        }

        //下面是在有手势跟随时的一些情况
        //1. 如果在第一屏或最后一屏，直接返回
        if ((this.index <= 0 && endPos > startPos) || (this.index >= this.length - 1 && endPos < startPos)) {
            e.preventDefault();
            return;
        }

        //2. 如果向上或向下被禁止，直接返回
        if ((distance > 0 && lockPrev) || distance < 0 && lockNext) {
            e.preventDefault();
            return;
        }

        //3. 没有特殊情况，需要手势跟随了，则
        distance = offset + distance + 'px';

        //移除动画缓动
        this._removeTransition();

        if (this.direction === 'v') {
            this.target.css('-webkit-transform', 'translate(0, ' + distance + ')');
        } else {
            this.target.css('-webkit-transform', 'translate(' + distance + ', 0)');
        }


        this._preventDefault(e);
    };

    PageSlider.prototype._endHandle = function (e) {

        var touch = e.originalEvent.changedTouches[0],
            distance,
            endPos;

        //如果动画在执行中则不予以操作
        if (state === 'running') {
            e.preventDefault();
            return;
        }

        endPos = this.direction === 'v' ? touch.clientY : touch.clientX;
        distance = endPos - startPos;
		compareEnd = this.direction === 'v' ? touch.clientX : touch.clientY;
		compareDis = compareEnd - compareStart

        //设置动画缓动
        this._setTransition();

        //swipeDown
        if (distance > 0) {
            this.direction === 'v' ? this.onSwipeDown.call(this) : this.onSwipeRight.call(this);

            if (!lockPrev) {
                //如果是长页面，需判断一下是否到顶
                if (this.curPage[0].pageScrollHeight && pageScrollTop > pageHeight) {
                    return;
                } else if (distance > 20) {
                   if(Math.abs(compareDis) < Math.abs(distance)) {
						this.prev();
					}
                } else {
                    this.moveTo(this.index);
                }
            }
        }

        //swipeUp
        if (distance < 0) {
            this.direction === 'v' ? this.onSwipeUp.call(this) : this.onSwipeLeft.call(this);

            if (!lockNext) {
                //如果是长页面，需判断一下是否到底
                if (this.curPage[0].pageScrollHeight && pageScrollTop < this.curPage[0].scrollerController.content.offsetHeight) {
                    return;
                } else if (distance < -20) {
                    if(Math.abs(compareDis) < Math.abs(distance)) {
						this.next();
					}
                } else {
                    this.moveTo(this.index);
                }
                //循环

            }
        }
    };

    PageSlider.prototype.moveTo = function (index, direct) {
        var distance,
            self = this;

        state = 'running';

        direct = direct || false;

        if (index >= this.length || index < 0) {
            state = 'end';
            return;
        }

        direct && this._removeTransition();

        this.onbeforechange.call(this);

        if (this.direction === 'v') {
            distance = -index * 100 + '%';
            this.target.css('-webkit-transform', 'translate(0, ' + distance + ')');
        }

        if (this.direction === 'h') {
            distance = -index * 100 + '%';
            this.target.css('-webkit-transform', 'translate(' + distance + ', 0)');
        }

        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            self._currentClass(index);
            self.prevIndex = self.index;
            self.index = index;
            self.onchange.call(self);

            direct && self._setTransition();

            //如果是较长的页面，在翻屏时，重置滚动条位置
            if (self.curPage && self.curPage[0].pageScrollHeight) {
                isGestureFollowing && (self.gestureFollowing = true);
                self.preventDefault = true;

                self.curPage[0].scrollerController.scroller.scrollTo(0, 0, false);
            }

            self.curPage = self.pages.eq(self.index);

            self.rememberLastVisited && self._saveLastVisited();

            state = 'end';
            clearTimeout(this.timer);
        }, 500);
    };

    PageSlider.prototype.prev = function () {
        this.moveTo(this.index - 1);
    }

    PageSlider.prototype.next = function () {
        this.moveTo(this.index + 1);
    }

    PageSlider.prototype._setTransition = function () {
        this.target.css('-webkit-transition', '-webkit-transform 0.5s ease');
    }

    PageSlider.prototype._removeTransition = function () {
        this.target.css('-webkit-transition', 'none');
    }

    PageSlider.prototype._currentClass = function (index) {
        var currentClass = this.currentClass;

        this.pages.eq(index).addClass(currentClass);
        if (index !== this.index && !this.animationPlayOnce) {
            this.pages.eq(this.index).removeClass(currentClass);
        }
    }

    PageSlider.prototype._saveLastVisited = function () {
        var storage = window.localStorage;

        if (storage) {
            storage.setItem('pageSliderIndex', this.index);
        }
    }

    PageSlider.prototype._getLastVisited = function () {
        var storage = window.localStorage;

        if (storage) {
            this.cacheIndex = storage.getItem('pageSliderIndex');
            return parseInt(this.cacheIndex);
        }
    }
    PageSlider.prototype._bindAnimation = function () {
        var self = this,
            styleText = '<style>';

        $('[data-animation]').each(function (index) {
            var $this = $(this),
                dataAnimation = $this.data('animation'),
                animationName = dataAnimation['name'],
                animationDuration = dataAnimation['duration'] || 500,
                animationDelay = dataAnimation['delay'] || 0,
                animationTimeFunction = dataAnimation['timing-function'] || 'ease',
                animationFillMode = dataAnimation['fill-mode'] || 'both',
                animationIterationCount = dataAnimation['iteration-count'] || 1,
                animationDirection = dataAnimation['direction'] || 'normal';

            $this.data('animationid', ++index);

            styleText += '.' + self.currentClass +
                ' ' +
                '[data-animationid="' + index + '"]' +
                '{' +
                '-webkit-animation-name: ' + animationName + ';' +
                '-webkit-animation-duration: ' + animationDuration + 'ms;' +
                '-webkit-animation-delay: ' + animationDelay + 'ms;' +
                '-webkit-animation-timing-function: ' + animationTimeFunction + ';' +
                '-webkit-animation-fill-mode: ' + animationFillMode + ';' +
                '-webkit-animation-iteration-count: ' + animationIterationCount + ';' +
                '-webkit-animation-direction: ' + animationDirection + ';' +
                '}';
        });

        styleText + '</style>';
        $('head').eq(0).append(styleText);
    }
    PageSlider.prototype._preventDefault = function (e) {
        this.preventDefault && e.preventDefault();
    }
    PageSlider.prototype._dev = function () {
        if (this.dev !== false) {
            this.moveTo(this.dev, true);
        }
    }
    PageSlider.prototype.orient = function () { //横竖屏提示
        function init() {
            var htm = '<div id="orientLayer" class="orientLayer"><img src="images/orient.png" class="orientIcon"><div class="orientWrd">为了更好的体验，请使用竖屏浏览</div></div>';
            var sty = '.orientLayer{height:100%;width:100%;background:rgba(0,0,0,.8);position:fixed;left:0;top:0;z-index:999;text-align:center}.orientIcon{width:67px;height:109px;margin-top:80px;transform:rotate(90deg);-webkit-transform:rotate(90deg);-webkit-animation:rotation infinite 1.5s ease-in-out;animation:rotation infinite 1.5s ease-in-out}.orientWrd{margin-top:20px;color:#fff;font:18px/1.5 Microsoft Yahei}@keyframes rotation{10%{transform:rotate(90deg);-webkit-transform:rotate(90deg)}50%{transform:rotate(0);-webkit-transform:rotate(0)}60%{transform:rotate(0);-webkit-transform:rotate(0)}90%{transform:rotate(90deg);-webkit-transform:rotate(90deg)}100%{transform:rotate(90deg);-webkit-transform:rotate(90deg)}}@-webkit-keyframes rotation{10%{transform:rotate(90deg);-webkit-transform:rotate(90deg)}50%{transform:rotate(0);-webkit-transform:rotate(0)}60%{transform:rotate(0);-webkit-transform:rotate(0)}90%{transform:rotate(90deg);-webkit-transform:rotate(90deg)}100%{transform:rotate(90deg);-webkit-transform:rotate(90deg)}}';
            var chks = document.documentElement.clientWidth > document.documentElement.clientHeight ? 'landscape' : 'portrait';

            if (chks == 'landscape') {
                $('body').append(htm);
                $('head').append('<style class="style-orient">' + sty + '</style>')
            } else {
                $('.orientLayer,.style-orient').hide().remove();
            }
        }
        init();
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
            setTimeout(init, 100);
        }, false)
    }

    PageSlider.prototype._bgMusic = function () {
        if (this.musicUrl) {
            var htm = '<a class="u-btn-play "></a><audio id="bgmusic" src="' + this.musicUrl + '" preload="auto" style="visibility: hidden;" loop="loop"></audio>';
            $('body').append(htm);

            //平常播放
            var bgmusic = document.getElementById('bgmusic');
            bgmusic.play();

            //ios兼容处理
            document.addEventListener("WeixinJSBridgeReady", function () {
                bgmusic.play();
            }, false);

            //切换音乐播放
            $(".u-btn-play").on('click', function () {
                if (bgmusic.paused) {
                    bgmusic.play();
                    $('.u-btn-play').removeClass("zanting");
                } else {
                    bgmusic.pause();
                    $('.u-btn-play').addClass("zanting");
                }
            });
        } else {
            // console.log('不需要背景音乐？');
        }
    }

    PageSlider.prototype._initWeixin = function () {
        var url = location.href.split('#')[0],
            _this = this;
        $.ajax({
            url: _this.shareUrl, //https://yidian.weiyihui.com.cn/weixinshare/index.php
            type: "get",			// 数据发送方式
            dataType: "jsonp",		// 接受数据格式
            jsonp: 'jsoncallback',
            data: { "url": url },
            success: function (jsonData) {
                if (jsonData.error == 1) {
                    //alert('发生错误,请联系管理员!');
                } else {
                    wx.config({
                        debug: false,
                        appId: jsonData.appId,
                        timestamp: jsonData.timestamp,
                        nonceStr: jsonData.nonceStr,
                        signature: jsonData.signature,
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'closeWindow'
                        ]
                    });
                }
            },
            error: function (e) {
            }
        });
    }

    PageSlider.prototype._loadimg = function (imgarr,progress,callback) {

		for (var i = 0; i < imgarr.length; i++) {
		    this.loader.addImage(imgarr[i]);
		}
		//进度监听
		this.loader.addProgressListener(function (e) {
		    percent = Math.round( e.completedCount / e.totalCount * 100 );
		    progress && progress(percent);
		});

		//加载完成
		this.loader.addCompletionListener(function () {
		    callback && callback();
		});
		this.loader.start();
    }

    PageSlider.prototype.wxShare = function (sharetitle1, sharedesc, url1, url2, callback) {
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: sharedesc, // 分享标题
                link: url1, // 分享链接
                imgUrl: url2, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                    //location.href="http://m.miguvideo.com/wap/resource/Geeks/index.jsp"
                    //判读用户是否分享
                    return typeof callback == "function" && callback();
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareAppMessage({
                title: sharetitle1, // 分享标题
                desc: sharedesc, // 分享描述
                link: url1, // 分享链接
                imgUrl: url2, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    //判读用户是否分享
                    return typeof callback == "function" && callback();
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        });
    }
    
    window.PageSlider = PageSlider;
    window.EasyScroller = EasyScroller;

})(jQuery, window);

if (typeof define === "function" && define.amd) {
    define("PageSlider", [], function () {
        return PageSlider;
    });
}


