class YandexSDK{constructor(){this.ready=new Promise(e=>this.init=e)}setSDK(e){this.ysdk=e}showFullscreen(){this.ready.then(()=>this.ysdk.adv.showFullscreenAdv({callbacks:{}}))}}const Yandex=new YandexSDK;function initSDK(){YaGames.init({adv:{onAdvClose:e=>console.info("adv closed! was shown: ",e)},screen:{fullscreen:!1,orientation:{value:"portrait",lock:!0}}}).then(e=>{Yandex.setSDK(e),Yandex.init()})}!function(e){var n=e.getElementsByTagName("script")[0],s=e.createElement("script");s.src="https://yandex.ru/games/sdk/v2",s.async=!0,n.parentNode.insertBefore(s,n),s.onload=initSDK}(document);