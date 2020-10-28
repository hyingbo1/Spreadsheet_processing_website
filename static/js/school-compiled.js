/**
 * Created by MJX on 2017/5/25.
 */
var schoolApp=angular.module("schoolApp",["ngRoute","ngAnimate","schools.utils"]);schoolApp.config(["$routeProvider","$provide","$compileProvider","$controllerProvider",function(a,b,c,h){b.factory("dynamicDirectiveService",function(){return{registerDirective:function(a,p){c.directive(a,p)},registerController:function(a,c){h.register(a,c)}}})}]);schoolApp.service("$schoolService",[function(){return{sysStatus:{DebugNoServer:!0,location:""},config:{},api:{}}}]);
schoolApp.controller("schoolController",["$scope","$timeout","$interval","$scResource","$schoolService","$scDialog",function(a,b,c,h,d,p){function f(){q++;h({url:"jxlConfig"}).then(function(a){for(var c=d.config,b=0;b<a.length;b++){var k=a[b];c[k.location]=k;e[k.xqh].buildings.push(k)}SCT.deletePageLoading()},function(a){120<q?SCT.showWords("\u83b7\u53d6\u6570\u636e\u5f02\u5e38\uff0c\u8bf7\u5173\u95ed\u8f6f\u4ef6\uff0c\u5e76\u91cd\u65b0\u6253\u5f00","error"):(SCT.showWords("\u6570\u636e\u8fd4\u56de\u5f02\u5e38\uff0c\u6b63\u5728\u91cd\u65b0\u83b7\u53d6\u6570\u636e\uff0c\u8bf7\u7a0d\u7b49",
    "error"),b(function(){f()},2E3))})}a.isShowScreen=!1;a.menuArray=[{areaName:"\u671b\u6c5f\u6821\u533a",areaCode:"01",buildings:[]},{areaName:"\u6c5f\u5b89\u6821\u533a",areaCode:"03",buildings:[]},{areaName:"\u534e\u897f\u6821\u533a",areaCode:"02",buildings:[]}];var e={};e["01"]=a.menuArray[0];e["02"]=a.menuArray[2];e["03"]=a.menuArray[1];a.clickShowScreen=function(c){d.sysStatus.location=c.location;SCT.showPageLoading();a.isShowScreen=!0};a.clickReturnMenu=function(){window.location.reload()};var q=
    0;f()}]);
schoolApp.controller("schoolScreenController",["$scope","$timeout","$interval","$scResource","$schoolService","$scDialog",function(a,b,c,h,d,p){function f(){for(var a=(new Date).getTime(),c=0,g=0;g<l.length;g++){var b=l[g].jsr.toString(),d=l[g].ksr.toString().split("."),d=(new Date(d[0].replace("-","/").replace("-","/"))).getTime(),b=b.split("."),b=(new Date(b[0].replace("-","/").replace("-","/"))).getTime();if(a>=d&&a<=b){c=l[g].zc;break}}return"\u7b2c"+c+"\u5468   "}function e(){var a=new Date;
    a.toLocaleDateString();var b=a.getFullYear(),c=k[a.getMonth()],d=a.getDate(),e=v[a.getDay()],m=a.getHours(),n=a.getMinutes(),a=a.getSeconds();return b+"/"+c+"/"+d+" "+e+" "+(10>m?"0"+m:m)+":"+(10>n?"0"+n:n)+":"+(10>a?"0"+a:a)}function q(){u=c(function(){a.systemZc=f();a.systemTimer=e()},1E3)}function t(c){r++;h({url:"XLRoomData",data:{jxlname:d.sysStatus.location}}).then(function(b){r=0;var d=b.roomdata;l=b.xldata;a.roomData=[];a.roomData=d;c&&(a.systemZc=f(),a.systemTimer=e(),q());SCT.deletePageLoading()},
    function(a){c&&(120<r?SCT.showWords("\u83b7\u53d6\u6570\u636e\u5f02\u5e38\uff0c\u8bf7\u5173\u95ed\u8f6f\u4ef6\uff0c\u5e76\u91cd\u65b0\u6253\u5f00","error"):(SCT.showWords("\u6570\u636e\u8fd4\u56de\u5f02\u5e38\uff0c\u6b63\u5728\u91cd\u65b0\u83b7\u53d6\u6570\u636e\uff0c\u8bf7\u7a0d\u7b49","error"),b(function(){t(c)},2E3)))})}var u=null;a.locationName=function(){var a=d.config[d.sysStatus.location];return a?a.name:"\u672c\u6559\u5b66\u697c"};a.roomData=[];a.replaceLongString=function(a){return 10<a.length?
    a.substr(0,10)+"...":a};var v="\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),k="1 2 3 4 5 6 7 8 9 10 11 12".split(" "),l,r=0;t(!0);a.clickShowDetail=function(c,b){var g=d.config[d.sysStatus.location],g=g?g.name:"\u672c\u6559\u5b66\u697c",e=b.roomName,k=b.roomZws,m=b.classUse[c],n=m.kcm,h=m.jsm,f=m.zymkid,l=null,l=1==m.use?n&&h?"<div><span>\u8bfe\u7a0b\uff1a</span><span>"+n+"</span></div><div><span>\u6559\u5e08\uff1a</span><span>"+
    h+"</span></div>":"07"==f||"14"==f||"room"==f||"01"==f?"<span>\u4e8b\u9879\uff1a</span><span>"+n+"</span>":"<span>\u4e8b\u9879\uff1a</span><span>\u5e08\u751f\u501f\u7528</span>":"<div>\u7a7a\u95f2</div>";p.confirm({head:{title:"\u8bfe\u7a0b\u4fe1\u606f",close:!0},inner:{type:"self",html:'<div class="kc_detail"><div><span>\u6559\u5ba4\uff1a</span><span>'+(g+"&nbsp"+e)+"</span></div><div><span>\u5ea7\u4f4d\u6570\uff1a</span><span>"+k+"</span></div><div><span>\u8282\u6b21\uff1a</span><span>"+("\u7b2c"+
(c+1)+"\u5927\u8282")+"</span></div><div>"+l+"</div></div>"},foot:{hasConfirmBtn:!0,confirmBtnName:"\u786e\u5b9a",hasCancelBtn:!1},unique:"sc_detail_dialog"},a).then(function(){},function(a){})};a.$on("$destroy",function(){c.cancel(u);c.cancel(_refreshCurrentPageDataInterval)})}]);