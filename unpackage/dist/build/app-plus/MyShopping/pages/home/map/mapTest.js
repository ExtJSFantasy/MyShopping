
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(\x22https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf\x22) format(\x22truetype\x22)}\n.",[1],"uni-flex{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"uni-flex-item{-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.",[1],"uni-row{-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"uni-column,.",[1],"uni-row{-webkit-box-direction:normal}\n.",[1],"uni-column{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"uni-h6{font-size:",[0,24],";color:#8f8f94}\n.",[1],"uni-h5{font-size:",[0,28],";color:#8f8f94}\n.",[1],"uni-h4{font-size:",[0,36],"}\n.",[1],"uni-h3{font-size:",[0,48],";font-weight:600}\n.",[1],"uni-h2{font-size:",[0,60],";font-weight:600}\n.",[1],"uni-h1{font-size:",[0,72],";font-weight:600}\n.",[1],"uni-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.",[1],"uni-input{height:",[0,50],";min-height:",[0,50],";padding:",[0,15]," 0;line-height:",[0,50],"}\n.",[1],"uni-label{width:",[0,210],";word-wrap:break-word;word-break:break-all}\n.",[1],"uni-badge{padding:",[0,4]," ",[0,14],";font-size:",[0,24],";height:",[0,24],";line-height:1;color:#333;background-color:rgba(0,0,0,.15);border-radius:",[0,200],"}\n.",[1],"uni-badge.",[1],"uni-badge-inverted{padding:0 ",[0,10]," 0 0;color:#929292;background-color:transparent}\n.",[1],"uni-badge-primary{color:#fff;background-color:#007aff}\n.",[1],"uni-badge-blue.",[1],"uni-badge-inverted,.",[1],"uni-badge-primary.",[1],"uni-badge-inverted{color:#007aff;background-color:transparent}\n.",[1],"uni-badge-green,.",[1],"uni-badge-success{color:#fff;background-color:#4cd964}\n.",[1],"uni-badge-green.",[1],"uni-badge-inverted,.",[1],"uni-badge-success.",[1],"uni-badge-inverted{color:#4cd964;background-color:transparent}\n.",[1],"uni-badge-warning,.",[1],"uni-badge-yellow{color:#fff;background-color:#f0ad4e}\n.",[1],"uni-badge-warning.",[1],"uni-badge-inverted,.",[1],"uni-badge-yellow.",[1],"uni-badge-inverted{color:#f0ad4e;background-color:transparent}\n.",[1],"uni-badge-danger,.",[1],"uni-badge-red{color:#fff;background-color:#dd524d}\n.",[1],"uni-badge-danger.",[1],"uni-badge-inverted,.",[1],"uni-badge-red.",[1],"uni-badge-inverted{color:#dd524d;background-color:transparent}\n.",[1],"uni-badge-purple,.",[1],"uni-badge-royal{color:#fff;background-color:#8a6de9}\n.",[1],"uni-badge-purple.",[1],"uni-badge-inverted,.",[1],"uni-badge-royal.",[1],"uni-badge-inverted{color:#8a6de9;background-color:transparent}\n.",[1],"uni-collapse-content{height:0;width:100%;overflow:hidden}\n.",[1],"uni-collapse-content.",[1],"uni-active{height:auto}\n.",[1],"uni-card{background:#fff;border-radius:",[0,8],";margin:",[0,20],";position:relative;box-shadow:0 ",[0,2]," ",[0,4]," rgba(0,0,0,.3)}\n.",[1],"uni-card-content{font-size:",[0,30],"}\n.",[1],"uni-card-content-inner{position:relative;padding:",[0,30],"}\n.",[1],"uni-card-footer,.",[1],"uni-card-header{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;min-height:",[0,50],";padding:",[0,20]," ",[0,30],";-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n.",[1],"uni-card-header{font-size:",[0,36],"}\n.",[1],"uni-card-footer{color:#6d6d72}\n.",[1],"uni-card-footer:before,.",[1],"uni-card-header:after{position:absolute;top:0;right:0;left:0;height:",[0,2],";content:\x22\x22;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}\n.",[1],"uni-card-header:after{top:auto;bottom:0}\n.",[1],"uni-card-media{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}\n.",[1],"uni-card-media-logo{height:",[0,84],";width:",[0,84],";margin-right:",[0,20],"}\n.",[1],"uni-card-media-body{height:",[0,84],";display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n.",[1],"uni-card-media-text-top{line-height:",[0,36],";font-size:",[0,34],"}\n.",[1],"uni-card-media-text-bottom{line-height:",[0,30],";font-size:",[0,28],";color:#8f8f94}\n.",[1],"uni-card-link{color:#007aff}\n.",[1],"uni-list{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"uni-list:after{bottom:0}\n.",[1],"uni-list:after,.",[1],"uni-list:before{position:absolute;z-index:10;right:0;left:0;height:",[0,1],";content:\x22\x22;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}\n.",[1],"uni-list:before{top:0}\n.",[1],"uni-list-cell{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n.",[1],"uni-list-cell-hover{background-color:#eee}\n.",[1],"uni-list-cell-pd{padding:",[0,22]," ",[0,30],"}\n.",[1],"uni-list-cell-left{padding:0 ",[0,30],"}\n.",[1],"uni-list-cell-db,.",[1],"uni-list-cell-right{-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.",[1],"uni-list-cell:after{position:absolute;right:0;bottom:0;left:",[0,30],";height:",[0,1],";content:\x22\x22;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}\n.",[1],"uni-list-cell-last.",[1],"uni-list-cell:after,.",[1],"uni-list .",[1],"uni-list-cell:last-child:after{height:",[0,0],"}\n.",[1],"uni-list-cell-divider{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;color:#999;background-color:#f7f7f7;padding:",[0,10]," ",[0,20],"}\n.",[1],"uni-list-cell-divider:before{top:0}\n.",[1],"uni-list-cell-divider:after,.",[1],"uni-list-cell-divider:before{position:absolute;right:0;left:",[0,0],";height:",[0,1],";content:\x22\x22;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}\n.",[1],"uni-list-cell-divider:after{bottom:0}\n.",[1],"uni-list-cell-navigate{padding:",[0,22]," ",[0,30],";line-height:",[0,48],";position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:",[0,36],"}\n.",[1],"uni-navigate-badge{margin-right:",[0,20],"}\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-right:after{content:\x22\\E583\x22}\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom:after,.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-right:after{font-family:uniicons;position:absolute;right:",[0,24],";top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom:after{content:\x22\\E581\x22}\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom.",[1],"uni-active:after{font-family:uniicons;content:\x22\\E580\x22;position:absolute;right:",[0,24],";top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}\n.",[1],"uni-collapse.",[1],"uni-list-cell{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"uni-list-cell-navigate.",[1],"uni-active{background:#eee}\n.",[1],"uni-list.",[1],"uni-collapse{box-sizing:border-box;height:0;overflow:hidden}\n.",[1],"uni-collapse .",[1],"uni-list-cell{padding-left:",[0,36],"}\n.",[1],"uni-collapse .",[1],"uni-list-cell:after{left:",[0,52],"}\n.",[1],"uni-list.",[1],"uni-active{height:auto}\n.",[1],"uni-triplex-row{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row;padding:",[0,22]," ",[0,30],"}\n.",[1],"uni-triplex-left,.",[1],"uni-triplex-right,.",[1],"uni-triplex-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-direction:normal}\n.",[1],"uni-triplex-left,.",[1],"uni-triplex-right{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"uni-triplex-left{width:84%}\n.",[1],"uni-triplex-right{width:16%;text-align:right}\n.",[1],"uni-media-list{padding:",[0,22]," ",[0,30],";box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"uni-navigate-right.",[1],"uni-media-list{padding-right:",[0,74],"}\n.",[1],"uni-pull-right{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}\n.",[1],"uni-pull-right\x3e.",[1],"uni-media-list-logo{margin-right:",[0,0],";margin-left:",[0,20],"}\n.",[1],"uni-media-list-logo{height:",[0,84],";width:",[0,84],";margin-right:",[0,20],"}\n.",[1],"uni-media-list-logo wx-image{height:100%;width:100%}\n.",[1],"uni-media-list-body{height:",[0,84],";display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;overflow:hidden}\n.",[1],"uni-media-list-text-top{width:100%;line-height:",[0,36],";font-size:",[0,34],"}\n.",[1],"uni-media-list-text-bottom{width:100%;line-height:",[0,30],";font-size:",[0,28],";color:#8f8f94}\n.",[1],"uni-grid-9{background:#f2f2f2;width:100%;-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-top:",[0,2]," solid #eee}\n.",[1],"uni-grid-9,.",[1],"uni-grid-9-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-direction:normal}\n.",[1],"uni-grid-9-item{width:33.3333%;height:",[0,200],";-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-bottom:",[0,2]," solid;border-right:",[0,2]," solid;border-color:#eee;box-sizing:border-box}\n.",[1],"no-border-right{border-right:none}\n.",[1],"uni-grid-9-image{width:",[0,100],";height:",[0,100],"}\n.",[1],"uni-grid-9-text{width:",[0,250],";line-height:",[0,4],";height:",[0,40],";text-align:center;font-size:",[0,30],"}\n.",[1],"uni-grid-9-item-hover{background:rgba(0,0,0,.1)}\n.",[1],"uni-uploader{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"uni-uploader-head{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"uni-uploader-info{color:#b2b2b2}\n.",[1],"uni-uploader-body{margin-top:",[0,16],";overflow:hidden}\n.",[1],"uni-uploader__file{float:left;margin-right:",[0,18],";margin-bottom:",[0,18],"}\n.",[1],"uni-uploader__img{display:block;width:",[0,158],";height:",[0,158],"}\n.",[1],"uni-uploader__input-box{float:left;position:relative;margin-right:",[0,18],";margin-bottom:",[0,18],";width:",[0,154],";height:",[0,154],";border:",[0,2]," solid #d9d9d9}\n.",[1],"uni-uploader__input-box:after,.",[1],"uni-uploader__input-box:before{content:\x22 \x22;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}\n.",[1],"uni-uploader__input-box:before{width:",[0,4],";height:",[0,79],"}\n.",[1],"uni-uploader__input-box:after{width:",[0,79],";height:",[0,4],"}\n.",[1],"uni-uploader__input-box:active{border-color:#999}\n.",[1],"uni-uploader__input-box:active:after,.",[1],"uni-uploader__input-box:active:before{background-color:#999}\n.",[1],"uni-uploader__input{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}\n.",[1],"feedback-title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:",[0,20],";color:#8f8f94;font-size:",[0,28],"}\n.",[1],"feedback-star-view.",[1],"feedback-title{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0}\n.",[1],"feedback-quick{position:relative;padding-right:",[0,40],"}\n.",[1],"feedback-quick:after{font-family:uniicons;font-size:",[0,40],";content:\x22\\E581\x22;position:absolute;right:0;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}\n.",[1],"feedback-body{background:#fff}\n.",[1],"feedback-textare{height:",[0,200],";font-size:",[0,34],";line-height:",[0,50],";width:100%;box-sizing:border-box;padding:",[0,20]," ",[0,30]," 0}\n.",[1],"feedback-input{font-size:",[0,34],";height:",[0,50],";min-height:",[0,50],";padding:",[0,15]," ",[0,20],";line-height:",[0,50],"}\n.",[1],"feedback-uploader{padding:",[0,22]," ",[0,20],"}\n.",[1],"feedback-star{font-family:uniicons;font-size:",[0,40],";margin-left:",[0,6],"}\n.",[1],"feedback-star-view{margin-left:",[0,20],"}\n.",[1],"feedback-star:after{content:\x22\\E408\x22}\n.",[1],"feedback-star.",[1],"active{color:#ffb400}\n.",[1],"feedback-star.",[1],"active:after{content:\x22\\E438\x22}\n.",[1],"feedback-submit{background:#007aff;color:#fff;margin:",[0,20],"}\n.",[1],"_map{width:100%;height:",[0,600],";margin-top:var(top)}\n",],undefined,{path:"./pages/home/map/mapTest.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/home/map/mapTest.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      