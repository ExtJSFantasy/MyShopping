
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"_map { width: 100%; height: ",[0,600],"; }\n",],undefined,{path:"./pages/home/map/mapTest.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/home/map/mapTest.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      