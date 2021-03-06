g_aIframe = $(".sp");

$(function () {
	// 检查插件是否已经安装过
    var iRet = WebVideoCtrl.I_CheckPluginInstall();
/*	if (-2 == iRet) {
//		alert("您的Chrome浏览器版本过高，不支持NPAPI插件！");
		return;
	} else if (-1 == iRet) {
        alert("您还未安装过插件，双击开发包目录里的WebComponentsKit.exe安装！");
		return;
    }	
*/
	// 关闭浏览器
	$(window).unload(function () {
		$.each(g_aIframe, function (i, oIframe) {
            getWebVideoCtrl(oIframe).I_Stop();
        });
	});
});

var iLoadedCount = 0;
function iframeLoaded3() {

    iLoadedCount++;

    if(iLoadedCount==4){
        var oLiveView = {
            iProtocol: 1,			// protocol 1：http, 2:https
            szIP: "60.216.132.158",	// protocol ip
            szPort: "70",			// protocol port
            szUsername: "admin",	// device username
            szPassword: "admin12345",	// device password
            iStreamType: 1,			// stream 1：main stream  2：sub-stream  3：third stream  4：transcode stream
            iChannelID: 2,			// channel no
            bZeroChannel: false		// zero channel
        };

        $.each(g_aIframe, function (i, oIframe) {
            var oWebVideoCtrl = getWebVideoCtrl(oIframe);
            // 登录设备
            oWebVideoCtrl.I_Login(oLiveView.szIP, oLiveView.iProtocol, oLiveView.szPort, oLiveView.szUsername, oLiveView.szPassword, {
                success: function (xmlDoc) {
                    // 开始预览
                    
                    oWebVideoCtrl.I_StartRealPlay(oLiveView.szIP, {
                        iStreamType: oLiveView.iStreamType,
                        iChannelID: oLiveView.iChannelID,
                        bZeroChannel: oLiveView.bZeroChannel
                    });
                }
            });
        });


    }}

function getWebVideoCtrl(oIframe) {
    return oIframe.contentWindow.WebVideoCtrl;
}